import { FinalCta } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Calculator,
  Check,
  ClipboardList,
  FileText,
  Gauge,
  MessagesSquare,
  MoveRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Recursos",
  description: "Herramientas y guías prácticas para identificar, priorizar y medir oportunidades de trabajadores IA.",
  path: "/recursos",
});

const upcomingResources = [
  {
    title: "10 procesos que puedes agentificar",
    description: "Checklist para detectar trabajo repetitivo con impacto y volumen suficiente.",
    type: "Checklist",
    icon: ClipboardList,
  },
  {
    title: "Vender más por WhatsApp",
    description: "Playbook para conectar atención, recomendación, pedidos y seguimiento.",
    type: "Playbook",
    icon: MessagesSquare,
  },
  {
    title: "Readiness de adopción IA",
    description: "Evalúa procesos, datos, liderazgo, gobernanza y capacidad de ejecución.",
    type: "Evaluación",
    icon: Gauge,
  },
];

const brainLayers = ["Captura", "Recuperación", "Verdad", "Permisos", "Feedback", "Ejecución"];

export default function ResourcesPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="site-container grid gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[hsl(var(--joe-green-dark))]">
              Biblioteca operativa
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-7xl">
              Menos teoría.
              <span className="block serif-accent font-normal text-[hsl(var(--joe-green-dark))]">Más capacidad.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Herramientas y guías para priorizar oportunidades, estimar impacto y diseñar sistemas IA que puedan operar de verdad.
            </p>
            <Button asChild size="lg" className="mt-9">
              <a href="#recursos-disponibles">
                Ver recursos disponibles
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-px border border-border bg-border">
              <div className="flex items-center justify-between bg-[hsl(var(--joe-console))] p-5 text-white md:p-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/40">Kit de decisión</p>
                  <p className="mt-1 font-bold">De oportunidad a primer piloto</p>
                </div>
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              {[
                { number: "01", label: "Detecta el trabajo", value: "Proceso y volumen" },
                { number: "02", label: "Calcula el potencial", value: "Horas y costo" },
                { number: "03", label: "Diseña el sistema", value: "Contexto y control" },
              ].map(({ number, label, value }) => (
                <div key={number} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 bg-white p-4 md:p-5">
                  <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">{number}</span>
                  <span className="font-semibold">{label}</span>
                  <span className="text-xs text-muted-foreground">{value}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 bg-[hsl(var(--joe-green-soft))] p-4 text-sm font-semibold md:p-5">
                <Check className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                Empieza con evidencia, no con una herramienta.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="recursos-disponibles" className="scroll-mt-24">
        <section className="section-space">
          <div className="site-container">
            <div className="flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  Disponibles ahora
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-none md:text-5xl">
                  Empieza por medir o diseñar.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-muted-foreground">
                Dos puntos de entrada según tu necesidad: cuantificar un proceso o construir la arquitectura de conocimiento.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
              <Link
                href="/recursos/calculadora-roi"
                className="group relative flex min-h-[520px] flex-col overflow-hidden bg-primary p-6 text-[hsl(var(--joe-console))] md:p-9"
              >
                <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full border-[44px] border-black/[0.05]" />
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center bg-[hsl(var(--joe-console))] text-primary">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold">
                    Herramienta
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--joe-console))]" />
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] opacity-60">Calculadora ROI</p>
                  <h3 className="mt-3 max-w-lg text-4xl font-extrabold leading-[1.02] md:text-5xl">
                    ¿Cuánto trabajo puede recuperar tu equipo?
                  </h3>
                  <p className="mt-5 max-w-lg text-lg leading-8 opacity-75">
                    Estima horas y costo recuperable con las variables reales de un proceso.
                  </p>
                </div>

                <div className="relative mt-auto pt-12">
                  <div className="grid grid-cols-2 gap-px bg-black/15">
                    {[
                      ["Tareas / mes", "1,200"],
                      ["Minutos / tarea", "8"],
                      ["Automatizable", "65%"],
                      ["Horas recuperables", "104"],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-primary p-4">
                        <p className="font-mono text-[9px] uppercase tracking-[.1em] opacity-55">{label}</p>
                        <p className="mt-2 text-xl font-extrabold">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between font-bold">
                    Abrir calculadora
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link
                href="/recursos/como-crear-company-brain"
                className="group flex min-h-[520px] flex-col bg-[hsl(var(--joe-console))] p-6 text-white md:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center border border-white/15 text-primary">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white/50">
                    Guía
                    <BookOpenCheck className="h-4 w-4 text-primary" />
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-primary">Company Brain</p>
                  <h3 className="mt-3 max-w-md text-4xl font-extrabold leading-[1.02]">
                    Crea un cerebro que trabaje para toda tu empresa.
                  </h3>
                  <p className="mt-5 max-w-md leading-7 text-white/60">
                    Ordena fuentes, permisos, recuperación y feedback para humanos y agentes IA.
                  </p>
                </div>

                <div className="mt-auto pt-10">
                  <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                    {brainLayers.map((layer, index) => (
                      <div key={layer} className="flex items-center gap-3 bg-[hsl(var(--joe-console))] p-3">
                        <span className="font-mono text-[9px] font-bold text-primary">0{index + 1}</span>
                        <span className="text-xs font-semibold text-white/65">{layer}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between font-bold">
                    Leer la guía
                    <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white">
          <div className="site-container grid gap-8 py-14 md:grid-cols-[.7fr_1.3fr] md:py-20">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                Cómo usar la biblioteca
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                Una secuencia corta para llegar a una decisión.
              </h2>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-3">
              {[
                { number: "01", title: "Observa", copy: "Elige un proceso con volumen y fricción." },
                { number: "02", title: "Mide", copy: "Calcula tiempo, costo y porcentaje automatizable." },
                { number: "03", title: "Diseña", copy: "Define contexto, permisos y resultado esperado." },
              ].map(({ number, title, copy }) => (
                <div key={number} className="bg-white p-5 md:p-6">
                  <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">{number}</span>
                  <h3 className="mt-8 text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[.36fr_1fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">
                  Próximas entregas
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  La biblioteca sigue creciendo.
                </h2>
              </div>

              <div className="border-t border-border">
                {upcomingResources.map(({ title, description, type, icon: Icon }, index) => (
                  <div key={title} className="grid gap-5 border-b border-border py-7 md:grid-cols-[52px_1fr_auto] md:items-center md:gap-6">
                    <div className="grid h-11 w-11 place-items-center bg-[hsl(var(--joe-sunk))] text-muted-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">0{index + 3} · {type}</span>
                        <span className="border border-border px-2 py-1 text-[9px] font-bold uppercase tracking-[.1em] text-muted-foreground">Próximamente</span>
                      </div>
                      <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                      <p className="mt-2 max-w-xl leading-7 text-muted-foreground">{description}</p>
                    </div>
                    <MoveRight className="hidden h-5 w-5 text-border md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="border-t border-border bg-[hsl(var(--joe-green-soft))]">
        <div className="site-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <FileText className="mt-1 h-6 w-6 shrink-0 text-[hsl(var(--joe-green-dark))]" />
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">¿Buscas un caso concreto?</p>
              <h2 className="mt-2 text-2xl font-extrabold">Explora los flujos por resultado de negocio.</h2>
            </div>
          </div>
          <Link href="/casos-de-uso" className="inline-flex items-center gap-2 font-bold hover:text-[hsl(var(--joe-green-dark))]">
            Ver casos de uso
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FinalCta title="Convierte una estimación en un caso de negocio." />
    </>
  );
}
