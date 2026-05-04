import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Brief projet",
  description:
    "Décrivez-nous votre projet en quelques minutes. On revient vers vous sous 24 h ouvrées.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      {/* Hero éditorial discret */}
      <section className="relative border-b border-border bg-background pt-40 pb-20 md:pt-52 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle">
                (Brief projet)
              </p>
            </div>

            <div className="md:col-span-9">
              <h1 className="font-serif text-balance text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
                Trois <em className="italic">étapes</em>.
                <span className="block text-foreground-muted">
                  Quatre minutes.
                </span>
              </h1>
              <p className="mt-10 max-w-xl font-sans text-[15px] leading-relaxed text-foreground-muted md:text-base">
                Pour les urgences, écrivez-nous à{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {SITE.email}
                </a>{" "}
                — sinon, ce formulaire est le moyen le plus efficace pour
                qu&apos;on prépare votre dossier en amont.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground-subtle">
                (Formulaire)
              </p>
            </div>

            <div className="md:col-span-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
