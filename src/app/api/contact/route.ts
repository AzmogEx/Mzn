import { NextResponse } from "next/server";

/* =====================================================================
   POST /api/contact
   - Valide le payload (champs requis + longueurs raisonnables)
   - Anti-spam : honeypot field + rate-limit (window de mémoire)
   - Si RESEND_API_KEY définie → envoi via api.resend.com
   - Sinon → log côté serveur (mode dev), retourne 200 quand même
   ===================================================================== */

export const runtime = "nodejs";

type Payload = {
  universe?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  organization?: string;
  eventDate?: string;
  audienceSize?: string;
  residentName?: string;
  occasion?: string;
  /** Honeypot — doit rester vide ; rempli = bot */
  website?: string;
};

const VALID_UNIVERSES = ["institutions", "entreprises", "particuliers"];

/* ---- Rate-limit en mémoire (par IP, fenêtre 60s, max 3 envois) ---- */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count += 1;
  return true;
}

function validate(p: Payload): string | null {
  if (p.website && p.website.length > 0) return "spam"; // honeypot
  if (!p.universe || !VALID_UNIVERSES.includes(p.universe))
    return "Univers invalide.";
  if (!p.name || p.name.trim().length < 2)
    return "Nom requis (2 caractères min).";
  if (p.name.length > 200) return "Nom trop long.";
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))
    return "Email invalide.";
  if (p.email.length > 200) return "Email trop long.";
  if (!p.message || p.message.trim().length < 10)
    return "Message trop court (10 caractères min).";
  if (p.message.length > 5000) return "Message trop long.";
  return null;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlEmail(p: Payload): string {
  const fields: Array<[string, string | undefined]> = [
    ["Univers", p.universe],
    ["Nom", p.name],
    ["Email", p.email],
    ["Téléphone", p.phone],
    ["Organisation", p.organization],
    ["Date / période", p.eventDate],
    ["Audience", p.audienceSize],
    ["Résident concerné", p.residentName],
    ["Type d'événement", p.occasion],
  ];
  const rows = fields
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([label, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;color:#111;">${escapeHtml(v!)}</td></tr>`,
    )
    .join("");
  const message = escapeHtml(p.message ?? "").replace(/\n/g, "<br/>");
  return `
    <div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;color:#111;">
      <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.24em;color:#c9a961;margin:0 0 8px;">MIS — Brief projet</p>
      <h1 style="font-family:Georgia,serif;font-size:28px;margin:0 0 24px;">Nouveau brief reçu</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">${rows}</table>
      <div style="border-top:1px solid #eee;padding-top:16px;">
        <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.18em;color:#888;margin:0 0 8px;">Message</p>
        <p style="font-size:15px;line-height:1.6;margin:0;">${message}</p>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  // Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Trop de tentatives. Réessayez dans 1 minute." },
      { status: 429 },
    );
  }

  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload invalide." },
      { status: 400 },
    );
  }

  const validationError = validate(payload);
  if (validationError === "spam") {
    // Faux 200 pour ne pas signaler aux bots qu'ils sont détectés
    return NextResponse.json({ ok: true });
  }
  if (validationError) {
    return NextResponse.json(
      { ok: false, error: validationError },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT ?? "contact@mis-prod.fr";
  const sender =
    process.env.CONTACT_SENDER ?? "MIS <onboarding@resend.dev>";

  // Mode dev / pas de clé → on logue et on répond OK
  if (!apiKey) {
    console.log("\n[/api/contact] RESEND_API_KEY absente — log uniquement.");
    console.log(JSON.stringify(payload, null, 2));
    return NextResponse.json({ ok: true, mode: "log" });
  }

  // Envoi via Resend
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: recipient,
        reply_to: payload.email,
        subject: `[MIS] Brief ${payload.universe} — ${payload.name}`,
        html: buildHtmlEmail(payload),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[/api/contact] Resend error:", res.status, detail);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Le service d'envoi est momentanément indisponible. Écrivez-nous directement à " +
            recipient +
            ".",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("[/api/contact] Network error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Erreur réseau. Réessayez dans quelques instants.",
      },
      { status: 503 },
    );
  }
}
