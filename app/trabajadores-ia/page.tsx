import { FaqList, FinalCta, SectionIntro } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL, workers } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Eye,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Trabajadores IA",
  description: "Trabajadores IA especializados en ventas, atención, cotizaciones, pedidos, pagos, CRM, reportes y operaciones.",
  path: "/trabajadores-ia",
});

const foundations = [
  ["Objetivo", "Una métrica de negocio y un resultado observable.", Target],
  ["Contexto", "Conocimiento aprobado, datos vivos y reglas comerciales.", Bot],
  ["Herramientas", "Canales, sistemas, documentos, APIs o interfaces.", Wrench],
  ["Guardrails", "Permisos, límites, validaciones y escalamiento humano.", ShieldCheck],
  ["Observabilidad", "Registro de decisiones, errores y resultados.", Eye],
  ["Mejora", "Correcciones humanas convertidas en cambios trazables.", Activity],
];

export default function WorkersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute -right-40 -top-56 h-[720px] w-[720px] rounded-full bg-primary/10 blur-3xl" />
        <div className="site-container relative grid min-h-[680px] gap-14 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold shadow-sm">
              <span className="status-pulse h-2 w-2 rounded-full bg-primary" />
              Equipo IA disponible
            </p>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.4rem,5.5vw,5.5rem)] font-extrabold leading-[.96] tracking-[-.055em]">
              Trabajadores IA listos para entrar en operación.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Implementamos agentes con un objetivo, herramientas, límites, métricas y reglas de escalamiento definidas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                  Encuentra tu primer agente <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/casos-de-uso">Ver casos de uso <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(var(--joe-console))] text-white shadow-[0_28px_70px_rgba(24,24,24,.18)]">
            <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
              <div>
                <p className="font-bold">Roster operativo</p>
                <p className="mt-1 text-xs text-white/45">Ventas · Operaciones · Atención</p>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold">3 ejecutando</span>
            </div>
            <div className="p-4">
              {workers.slice(0, 4).map((worker, index) => {
                const Icon = worker.icon;
                return (
                  <div key={worker.slug} className="group grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/10 px-2 py-4 last:border-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{worker.shortName}</p>
                      <p className="mt-1 text-xs text-white/45">{worker.description}</p>
                    </div>
                    <span className={`flex items-center gap-1.5 text-[10px] font-bold ${index === 0 ? "text-primary" : "text-white/55"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "status-pulse bg-primary" : "bg-white/35"}`} />
                      {index === 0 ? "Activo" : "Listo"}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-4 gap-px bg-white/15">
              {[["10", "roles"], ["4 sem.", "PoC"], ["APIs + UI", "conexión"], ["Humano", "al mando"]].map(([value, label]) => (
                <div key={label} className="bg-[hsl(var(--joe-console))] p-4">
                  <p className="text-sm font-extrabold text-primary">{value}</p>
                  <p className="mt-1 text-[10px] text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro
              title="Un roster diseñado alrededor del trabajo real"
              copy="Cada implementación se adapta a tus políticas, datos, sistemas y volumen. Los resultados descritos son objetivos de diseño, no garantías universales."
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {workers.map((worker, index) => {
              const Icon = worker.icon;
              return (
                <article key={worker.slug} className="delight-card group rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-[hsl(var(--joe-green-dark))]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--joe-green-dark))]">Disponible</span>
                      </div>
                      <h2 className="mt-3 text-xl font-extrabold">{worker.name}</h2>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-muted-foreground">{worker.description}</p>
                  <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold">Ideal para</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{worker.idealFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold">Objetivo</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{worker.outcome}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[hsl(var(--joe-sunk))] section-space">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <SectionIntro title="Qué define a un trabajador IA de JoeWork" copy="No basta con conversar. Un trabajador necesita objetivo, contexto, herramientas y control." />
            <div className="grid gap-4 sm:grid-cols-2">
              {foundations.map(([title, copy, Icon]) => (
                <article key={String(title)} className="rounded-2xl border border-border bg-white p-6">
                  <Icon className="h-7 w-7 text-[hsl(var(--joe-green-dark))]" />
                  <h3 className="mt-8 text-lg font-extrabold">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionIntro title="Preguntas frecuentes" />
          <FaqList />
        </div>
      </section>
      <FinalCta title="Encuentra tu primer trabajador IA." />
    </>
  );
}
