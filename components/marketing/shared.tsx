import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL, faqs, workers } from "@/config/marketing";
import { ArrowRight, ArrowUpRight, Check, Flower2 } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function SectionIntro({
  title,
  copy,
  className = "",
  inverse = false,
}: {
  title: string;
  copy?: string;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div className={className}>
      <h2 className="section-title">{title}</h2>
      {copy && <p className={`section-copy ${inverse ? "!text-white/65" : ""}`}>{copy}</p>}
    </div>
  );
}

export function PageHero({
  title,
  copy,
  children,
}: {
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className={`site-container grid gap-12 py-16 md:py-24 ${children ? "lg:grid-cols-[1.1fr_.9fr] lg:items-end" : ""}`}>
        <div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                Agenda un diagnóstico
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/casos-de-uso">
                Ver casos de uso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function WorkerRows({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? workers.slice(0, limit) : workers;
  return (
    <div className="border-t border-border">
      {items.map((worker, index) => {
        const Icon = worker.icon;
        return (
          <article
            key={worker.slug}
            className="group grid gap-4 border-b border-border px-3 py-7 transition-colors duration-200 hover:bg-white md:grid-cols-[56px_1fr_1fr] md:items-start md:gap-7 md:px-5"
          >
            <div className="flex items-center gap-3 md:block">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon className="mt-3 hidden h-5 w-5 text-[hsl(var(--joe-green-dark))] md:block" />
            </div>
            <div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-[hsl(var(--joe-green-dark))]">{worker.name}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{worker.description}</p>
            </div>
            <div className="text-sm leading-6">
              <p>
                <strong>Ideal para:</strong> {worker.idealFor}
              </p>
              <p className="mt-2 text-muted-foreground">{worker.outcome}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function FaqList() {
  return (
    <div className="border-t border-border">
      {faqs.map((item) => (
        <details key={item.question} className="group border-b border-border py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
            {item.question}
            <span
              aria-hidden="true"
              className="text-2xl font-normal text-primary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pt-4 leading-7 text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  title = "Tu próximo colaborador puede ser un trabajador IA.",
  copy = "Identifica qué proceso puede vender más, operar mejor o aprender más rápido durante las próximas cuatro semanas.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="group relative mx-auto max-w-[1100px] overflow-hidden rounded-2xl bg-[hsl(var(--joe-console))] px-6 py-14 text-white md:px-14 md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="relative">
            <Flower2 className="flower-delight mb-7 h-9 w-9 text-primary" />
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-white/65">{copy}</p>
          </div>
          <Button asChild size="lg" className="relative">
            <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
              Agenda diagnóstico IA
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <Check className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--joe-green-dark))]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
