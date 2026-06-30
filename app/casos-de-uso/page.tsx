import { FinalCta } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { useCases } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  Cog,
  MessagesSquare,
  Route,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Casos de uso",
  description: "Casos de uso de trabajadores IA para ventas, ecommerce, cotizaciones, pagos, operaciones, atención y Company Brain.",
  path: "/casos-de-uso",
});

const categoryDefinitions = [
  {
    id: "vender",
    number: "01",
    title: "Vender",
    description: "Responder, recomendar y seguir oportunidades mientras todavía están calientes.",
    icon: Target,
    slugs: ["ventas-whatsapp", "ecommerce-shopify", "cotizaciones"],
  },
  {
    id: "operar",
    number: "02",
    title: "Operar",
    description: "Mover información, validar excepciones y mantener sistemas actualizados.",
    icon: Cog,
    slugs: ["validacion-pagos", "ordenes-compra", "crm-reportes", "atencion-cliente"],
  },
  {
    id: "aprender",
    number: "03",
    title: "Aprender",
    description: "Convertir conversaciones, decisiones y SOPs en capacidad reutilizable.",
    icon: BrainCircuit,
    slugs: ["onboarding-comercial", "company-brain-ventas", "company-brain-operaciones"],
  },
];

const categories = categoryDefinitions.map((category) => ({
  ...category,
  cases: category.slugs
    .map((slug) => useCases.find((useCase) => useCase.slug === slug))
    .filter((useCase): useCase is (typeof useCases)[number] => Boolean(useCase)),
}));

export default function UseCasesPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="site-container relative grid gap-14 py-16 md:py-24 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-primary">
              10 flujos listos para explorar
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-7xl">
              De una tarea repetitiva a un resultado de negocio.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Explora dónde un trabajador IA puede aumentar capacidad comercial, operativa o de aprendizaje sin perder control humano.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#explorar">
                  Explorar casos
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white hover:text-foreground"
              >
                <Link href="/trabajadores-ia">
                  Ver trabajadores IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative border border-white/15 bg-black/10 p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/40">Mapa de oportunidad</p>
                  <p className="mt-1 font-bold">Capacidad conectada al flujo</p>
                </div>
                <Route className="h-6 w-6 text-primary" />
              </div>

              <div className="space-y-3 py-6">
                {categories.map(({ number, title, cases, icon: Icon }) => (
                  <div key={title} className="group grid grid-cols-[44px_1fr_auto] items-center gap-3 border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-primary/50">
                    <div className="grid h-10 w-10 place-items-center bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[.14em] text-white/35">Frente {number}</p>
                      <p className="mt-1 text-sm font-bold">{title}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary">{cases.length} flujos</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 text-center">
                {["Contexto", "Ejecución", "Medición"].map((item) => (
                  <div key={item} className="bg-[hsl(var(--joe-console))] px-2 py-3 text-[10px] font-semibold uppercase tracking-[.08em] text-white/45">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-white">
        <div className="site-container grid gap-px bg-border md:grid-cols-3">
          {categories.map(({ id, number, title, description, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex min-h-44 flex-col justify-between bg-white p-6 transition-colors hover:bg-[hsl(var(--joe-green-soft))] md:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-[hsl(var(--joe-green-dark))]" />
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-extrabold">{title}</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <main id="explorar" className="scroll-mt-24">
        {categories.map(({ id, number, title, description, cases, icon: CategoryIcon }, categoryIndex) => (
          <section
            key={id}
            id={id}
            className={`scroll-mt-24 border-b border-border ${categoryIndex === 1 ? "bg-white" : ""}`}
          >
            <div className="site-container grid gap-10 py-16 md:py-24 lg:grid-cols-[.34fr_1fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3">
                  <CategoryIcon className="h-6 w-6 text-[hsl(var(--joe-green-dark))]" />
                  <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">{number}</span>
                </div>
                <h2 className="mt-5 text-4xl font-extrabold leading-none md:text-5xl">{title}</h2>
                <p className="mt-5 max-w-sm leading-7 text-muted-foreground">{description}</p>
              </div>

              <div className="border-t border-border">
                {cases.map((useCase, index) => {
                  const Icon = useCase.icon;
                  return (
                    <Link
                      key={useCase.slug}
                      href={`/casos-de-uso/${useCase.slug}`}
                      className="group grid gap-5 border-b border-border py-7 md:grid-cols-[64px_1fr] md:gap-7 md:py-9"
                    >
                      <div className="flex items-center justify-between md:block">
                        <div className="grid h-12 w-12 place-items-center bg-[hsl(var(--joe-green-soft))] text-[hsl(var(--joe-green-dark))] transition-colors group-hover:bg-primary group-hover:text-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground md:hidden">
                          {number}.{index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">
                              Caso {number}.{index + 1}
                            </p>
                            <h3 className="mt-2 text-2xl font-extrabold transition-colors group-hover:text-[hsl(var(--joe-green-dark))] md:text-3xl">
                              {useCase.title}
                            </h3>
                          </div>
                          <ArrowRight className="mt-2 hidden h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 sm:block" />
                        </div>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                          {useCase.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {useCase.systems.map((system) => (
                            <span key={system} className="border border-border bg-[hsl(var(--joe-paper))] px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                              {system}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[hsl(var(--joe-green-dark))]">
                          <Check className="h-4 w-4" />
                          {useCase.outcomes[0]}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>

      <section className="border-b border-border bg-[hsl(var(--joe-green-soft))]">
        <div className="site-container flex flex-col gap-5 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <MessagesSquare className="mt-1 h-6 w-6 shrink-0 text-[hsl(var(--joe-green-dark))]" />
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">No encuentras tu flujo</p>
              <h2 className="mt-2 text-2xl font-extrabold">Mapeamos contigo dónde empezar.</h2>
            </div>
          </div>
          <Link href="/recursos/calculadora-roi" className="inline-flex items-center gap-2 font-bold hover:text-[hsl(var(--joe-green-dark))]">
            Calcula el potencial
            <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FinalCta title="Encuentra el flujo con mayor potencial." />
    </>
  );
}
