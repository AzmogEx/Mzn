import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center bg-background py-32">
      {/* Halo or radial discret */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[600px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(201,169,97,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Eyebrow */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold md:w-20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
                Erreur 404
              </span>
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle">
              {SITE.name} — {SITE.city}
            </p>
          </div>

          {/* Bloc principal */}
          <div className="md:col-span-9">
            <h1 className="font-serif text-balance text-[clamp(3rem,9vw,8rem)] leading-[0.98] tracking-[-0.03em] text-foreground">
              <span className="block">
                <em className="italic">Hors</em> champ.
              </span>
              <span className="block text-foreground-muted">
                Cette page n&apos;existe pas.
              </span>
            </h1>

            <p className="mt-10 max-w-xl font-sans text-[15px] leading-relaxed text-foreground-muted md:mt-14 md:text-base">
              Le lien est peut-être ancien, ou la page a été déplacée. Revenez
              à l&apos;accueil ou parcourez nos univers.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-16">
              <Link
                href="/"
                className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full border border-foreground bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.28em] text-background transition-all duration-700 hover:border-gold hover:bg-gold"
              >
                <span className="relative z-10">Retour à l&apos;accueil</span>
                <ArrowUpRight
                  className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-14 items-center gap-3 rounded-full border border-border-strong px-7 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground transition-all duration-700 hover:border-gold hover:text-gold"
              >
                Démarrer un brief
                <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

            {/* Trois liens vers les univers */}
            <div className="mt-20 border-t border-border pt-10 md:mt-28">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle">
                Ou explorez un univers
              </p>
              <ul className="grid gap-px md:grid-cols-3 md:gap-0">
                {[
                  { href: "/institutions", label: "Institutions · Santé" },
                  { href: "/entreprises", label: "Entreprises · Broadcast" },
                  { href: "/particuliers", label: "Particuliers · Héritage" },
                ].map((u, i) => (
                  <li
                    key={u.href}
                    className={[
                      "group",
                      i > 0 && "md:border-l md:border-border",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Link
                      href={u.href}
                      className="flex items-center justify-between py-5 transition-colors md:px-6"
                    >
                      <span className="font-serif text-lg italic text-foreground transition-colors group-hover:text-gold md:text-xl">
                        {u.label}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-foreground-subtle transition-all duration-500 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-gold"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
