"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import {
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UNIVERSES_LIST, type UniverseSlug } from "@/data/universes";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

type ApiResponse = { ok: boolean; error?: string; mode?: "log" | "sent" };

type FormState = {
  universe: UniverseSlug | null;
  // Communs
  name: string;
  email: string;
  phone: string;
  message: string;
  // Adaptés selon univers
  organization: string; // entreprises + institutions
  eventDate: string; // particuliers + entreprises
  audienceSize: string; // entreprises
  residentName: string; // institutions (atelier mémoire)
  occasion: string; // particuliers
};

const INITIAL_STATE: FormState = {
  universe: null,
  name: "",
  email: "",
  phone: "",
  message: "",
  organization: "",
  eventDate: "",
  audienceSize: "",
  residentName: "",
  occasion: "",
};

const STEPS = [
  { id: 1, label: "Univers" },
  { id: 2, label: "Projet" },
  { id: 3, label: "Vous" },
] as const;

/* ================================================================== */

export function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  // Honeypot — invisible, doit rester vide
  const [honeypot, setHoneypot] = useState("");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((s) => ({ ...s, [key]: value }));

  const goNext = () => {
    setDirection(1);
    setStep((s) => (s < 3 ? ((s + 1) as 2 | 3) : s));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => (s > 1 ? ((s - 1) as 1 | 2) : s));
  };

  // Validation minimale par étape
  const canProceed =
    (step === 1 && form.universe !== null) ||
    (step === 2 && form.message.trim().length >= 10) ||
    step === 3;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      });
      const data: ApiResponse = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setErrorMessage(
          data.error ??
            "Une erreur est survenue. Vous pouvez nous écrire directement à contact@mis-prod.fr.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMessage(
        "Erreur réseau. Vous pouvez nous écrire directement à contact@mis-prod.fr.",
      );
      setStatus("error");
    }
  };

  if (status === "success") return <SuccessState />;

  return (
    <form onSubmit={handleSubmit} className="relative" noValidate>
      {/* Honeypot anti-spam — caché aux humains, visible aux bots */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="cf-website">
          Site web (laisser vide)
          <input
            id="cf-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      {/* Progress indicator */}
      <StepIndicator currentStep={step} />

      {/* Steps */}
      <div className="relative mt-16 min-h-[420px] md:mt-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 1 && (
              <StepUniverse
                value={form.universe}
                onChange={(u) => {
                  set("universe", u);
                  // auto-advance après sélection
                  setTimeout(() => {
                    setDirection(1);
                    setStep(2);
                  }, 350);
                }}
              />
            )}
            {step === 2 && (
              <StepProject form={form} set={set} />
            )}
            {step === 3 && <StepContact form={form} set={set} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Erreur API */}
      <AnimatePresence>
        {status === "error" && errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            role="alert"
            aria-live="polite"
            className="mt-10 rounded-lg border border-red-500/30 bg-red-500/[0.06] p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red-400">
              Erreur d&apos;envoi
            </p>
            <p className="mt-2 font-sans text-sm text-foreground">
              {errorMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-border pt-8 md:mt-16 md:pt-10">
        <Button
          type="button"
          variant="ghost"
          onClick={goBack}
          disabled={step === 1}
          className={cn(step === 1 && "invisible")}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Retour
        </Button>

        {step < 3 ? (
          <Button
            type="button"
            variant="primary"
            onClick={goNext}
            disabled={!canProceed}
          >
            Continuer
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            disabled={
              status === "submitting" ||
              form.name.trim().length < 2 ||
              !form.email.includes("@")
            }
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
                Envoi…
              </>
            ) : (
              <>
                Envoyer le brief
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}

/* ================================================================== */

function StepIndicator({ currentStep }: { currentStep: 1 | 2 | 3 }) {
  return (
    <ol className="flex items-center gap-3 md:gap-5">
      {STEPS.map((s, i) => {
        const active = currentStep === s.id;
        const done = currentStep > s.id;
        return (
          <li key={s.id} className="flex items-center gap-3 md:gap-5">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] transition-colors duration-500",
                  active && "border-gold bg-gold text-background",
                  done && "border-gold bg-transparent text-gold",
                  !active && !done && "border-border text-foreground-subtle",
                )}
              >
                {done ? <Check className="h-3 w-3" strokeWidth={2} /> : s.id}
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.32em] transition-colors duration-500",
                  (active || done) && "text-foreground",
                  !active && !done && "text-foreground-subtle",
                )}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  "h-px w-6 transition-colors duration-500 md:w-12",
                  done ? "bg-gold" : "bg-border",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ---------------- Step 1 — Univers --------------- */

function StepUniverse({
  value,
  onChange,
}: {
  value: UniverseSlug | null;
  onChange: (u: UniverseSlug) => void;
}) {
  return (
    <StepShell
      title={
        <>
          Quel est votre <em className="italic">univers</em>&nbsp;?
        </>
      }
      subtitle="Pour adapter les questions à votre besoin."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {UNIVERSES_LIST.map((u) => {
          const selected = value === u.slug;
          return (
            <li key={u.slug}>
              <button
                type="button"
                onClick={() => onChange(u.slug)}
                className={cn(
                  "group relative flex h-full w-full flex-col items-start gap-3 rounded-xl border p-6 text-left transition-all duration-500",
                  "hover:border-gold/60 hover:bg-foreground/[0.02]",
                  selected
                    ? "border-gold bg-gold/[0.06]"
                    : "border-border bg-background",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.32em] transition-colors",
                    selected ? "text-gold" : "text-foreground-subtle",
                  )}
                >
                  {u.number} · {u.eyebrow}
                </span>
                <span className="font-serif text-2xl leading-tight text-foreground">
                  {u.shortName}
                </span>
                <span className="font-sans text-[13px] leading-relaxed text-foreground-muted">
                  {u.pitch}
                </span>
                {selected && (
                  <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-background">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </StepShell>
  );
}

/* ---------------- Step 2 — Projet (champs adaptés) --------------- */

function StepProject({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const universe = form.universe;

  return (
    <StepShell
      title={
        <>
          Parlez-nous de votre <em className="italic">projet</em>.
        </>
      }
      subtitle="Plus c'est précis, mieux on revient vers vous."
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
        {/* Champs spécifiques selon univers */}
        {universe === "entreprises" && (
          <>
            <Field
              label="Entreprise / organisation"
              htmlFor="organization"
            >
              <Input
                id="organization"
                value={form.organization}
                onChange={(e) => set("organization", e.target.value)}
                placeholder="Ex : Groupe Lumière SAS"
              />
            </Field>
            <Field label="Date / période de l'événement" htmlFor="eventDate">
              <Input
                id="eventDate"
                type="text"
                value={form.eventDate}
                onChange={(e) => set("eventDate", e.target.value)}
                placeholder="Ex : Mars 2026, semaine 12"
              />
            </Field>
            <Field
              label="Audience attendue"
              htmlFor="audienceSize"
            >
              <Input
                id="audienceSize"
                value={form.audienceSize}
                onChange={(e) => set("audienceSize", e.target.value)}
                placeholder="Ex : 500 invités physiques + 2 000 en live"
              />
            </Field>
          </>
        )}

        {universe === "institutions" && (
          <>
            <Field
              label="Institution / structure"
              htmlFor="organization"
            >
              <Input
                id="organization"
                value={form.organization}
                onChange={(e) => set("organization", e.target.value)}
                placeholder="Ex : EHPAD Saint-Joseph"
              />
            </Field>
            <Field
              label="Résident concerné (si atelier)"
              htmlFor="residentName"
            >
              <Input
                id="residentName"
                value={form.residentName}
                onChange={(e) => set("residentName", e.target.value)}
                placeholder="Optionnel"
              />
            </Field>
          </>
        )}

        {universe === "particuliers" && (
          <>
            <Field label="Type d'événement" htmlFor="occasion">
              <Input
                id="occasion"
                value={form.occasion}
                onChange={(e) => set("occasion", e.target.value)}
                placeholder="Ex : Mariage, biographie, anniversaire"
              />
            </Field>
            <Field label="Date prévue" htmlFor="eventDate">
              <Input
                id="eventDate"
                value={form.eventDate}
                onChange={(e) => set("eventDate", e.target.value)}
                placeholder="Ex : 14 juin 2026"
              />
            </Field>
          </>
        )}

        {/* Message — sur toute la largeur */}
        <div className="md:col-span-2">
          <Field
            label="Décrivez votre projet"
            htmlFor="message"
            required
          >
            <Textarea
              id="message"
              required
              minLength={10}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Le contexte, l'ambiance recherchée, les contraintes, l'audience…"
            />
          </Field>
        </div>
      </div>
    </StepShell>
  );
}

/* ---------------- Step 3 — Vous (contact) --------------- */

function StepContact({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <StepShell
      title={
        <>
          Et <em className="italic">vous</em>&nbsp;?
        </>
      }
      subtitle="On vous recontacte sous 24 h ouvrées."
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
        <Field label="Votre nom" htmlFor="name" required>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Prénom Nom"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="vous@exemple.fr"
          />
        </Field>
        <Field label="Téléphone" htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+33 6 66 46 79 31"
          />
        </Field>
      </div>
    </StepShell>
  );
}

/* ---------------- Helpers --------------- */

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      <p className="mt-4 max-w-xl font-sans text-sm text-foreground-muted md:text-base">
        {subtitle}
      </p>
      <div className="mt-12 md:mt-16">{children}</div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </Label>
      {children}
    </div>
  );
}

/* ---------------- Success state --------------- */

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-8 py-20 md:py-28"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-gold/10 text-gold">
        <Check className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <h2 className="max-w-2xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
        Brief reçu. <em className="italic">Merci.</em>
      </h2>
      <p className="max-w-md font-sans text-base text-foreground-muted">
        On revient vers vous sous 24 h ouvrées avec une première lecture
        de votre projet et les questions qui restent à éclaircir.
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span className="h-px w-12 bg-gold/60" />
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle">
          Studio MIS — Nîmes
        </span>
      </div>
    </motion.div>
  );
}
