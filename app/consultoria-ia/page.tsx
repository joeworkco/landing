import { CheckList, FinalCta, SectionIntro } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Compass,
  GraduationCap,
  Lightbulb,
  Map,
  Play,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Consultoría IA",
  description: "Coaching, workshops y transformación organizacional para desarrollar capacidades IA reales en líderes y equipos.",
  path: "/consultoria-ia",
});

const roadmap = [
  ["Diagnosticar", "Procesos, capacidades y restricciones.", Compass],
  ["Priorizar", "Impacto, viabilidad, riesgo y aprendizaje.", Target],
  ["Pilotear", "Un flujo real con métricas y responsables.", Play],
  ["Escalar", "Playbooks, gobernanza y mejora continua.", Rocket],
];

export default function ConsultingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute -left-40 -top-56 h-[700px] w-[700px] rounded-full bg-primary/10 blur-3xl" />
        <div className="site-container relative grid min-h-[690px] gap-14 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold shadow-sm">
              <Lightbulb className="h-3.5 w-3.5 text-[hsl(var(--joe-green-dark))]" />
              De experimentos a capacidad real
            </p>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.4rem,5.5vw,5.5rem)] font-extrabold leading-[.96] tracking-[-.055em]">
              Desarrolla capacidades IA que cambian cómo trabaja tu empresa.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Acompañamos a líderes y equipos para rediseñar cómo trabajan, deciden, aprenden y ejecutan con IA.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                  Agenda una sesión estratégica <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#programas">Explorar programas <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] rounded-2xl border border-border bg-white p-6 shadow-[0_28px_70px_rgba(24,24,24,.14)]">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div><p className="font-extrabold">Roadmap de adopción</p><p className="mt-1 text-xs text-muted-foreground">De oportunidad a sistema de trabajo</p></div>
              <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-[hsl(var(--joe-green-dark))]">IA-first</span>
            </div>
            <div className="relative mt-7">
              <div className="absolute bottom-5 left-5 top-5 w-px bg-border" />
              {roadmap.map(([title, copy, Icon], index) => (
                <div key={String(title)} className="relative grid grid-cols-[42px_1fr_auto] items-center gap-4 py-4">
                  <span className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${index === 0 ? "bg-primary text-white shadow-[var(--shadow-brand)]" : "border border-border bg-white text-muted-foreground"}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div><p className="font-bold">{String(title)}</p><p className="mt-1 text-xs text-muted-foreground">{String(copy)}</p></div>
                  <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-4 gap-px overflow-hidden rounded-xl bg-border">
              {[["Líderes", GraduationCap], ["Equipos", Users], ["Procesos", Compass], ["Roadmap", Map]].map(([label, Icon]) => (
                <div key={String(label)} className="bg-background p-4 text-center">
                  <Icon className="mx-auto h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                  <p className="mt-2 text-[10px] font-bold">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programas" className="section-space">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro title="Dos caminos, una capacidad compartida" copy="Trabajamos con líderes individualmente y con organizaciones completas. Ambos caminos terminan en nuevos hábitos de ejecución." />
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[hsl(var(--joe-green))/0.35] bg-accent p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white"><GraduationCap className="h-7 w-7" /></span>
                <span className="font-mono text-sm font-bold text-[hsl(var(--joe-green-dark))]">01</span>
              </div>
              <h2 className="mt-12 text-3xl font-extrabold">Coaching individual 1:1</h2>
              <p className="mt-4 leading-7 text-foreground/65">Para CEOs, founders y líderes que quieren convertir la IA en una ventaja personal y estratégica.</p>
              <div className="mt-8">
                <CheckList items={[
                  "Sistema personal de productividad con IA.",
                  "Uso avanzado de modelos y agentes.",
                  "Playbooks personales para trabajo recurrente.",
                  "Preparación de reuniones, propuestas y decisiones.",
                  "Automatización de tareas ejecutivas.",
                ]} />
              </div>
            </article>

            <article className="rounded-2xl bg-[hsl(var(--joe-console))] p-8 text-white md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white"><Users className="h-7 w-7" /></span>
                <span className="font-mono text-sm font-bold text-primary">02</span>
              </div>
              <h2 className="mt-12 text-3xl font-extrabold">Transformación organizacional práctica</h2>
              <p className="mt-4 leading-7 text-white/60">Para pasar de usos aislados a flujos IA-first con gobernanza, métricas y responsables.</p>
              <ul className="mt-8 space-y-3">
                {["Diagnóstico y mapa de procesos.", "Priorización de oportunidades por ROI y riesgo.", "Gobernanza, permisos y reglas de uso.", "Diseño e implementación de pilotos.", "Capacitación y playbooks por área."].map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white section-space">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <SectionIntro title="Un roadmap que termina en ejecución" copy="La adopción se mide por cambios sostenidos en el trabajo, no por cantidad de herramientas conocidas." />
            <ol className="relative grid gap-8 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
              {roadmap.map(([title, copy, Icon], index) => (
                <li key={String(title)} className="relative">
                  <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${index === 0 ? "bg-primary text-white shadow-[var(--shadow-brand)]" : "border border-border bg-white text-[hsl(var(--joe-green-dark))]"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-6 block font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-extrabold">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Dirección", "Decisiones ejecutivas mejor preparadas.", GraduationCap],
              ["Equipos", "Prácticas compartidas y criterios comunes.", Users],
              ["Procesos", "Flujos priorizados por impacto y riesgo.", Compass],
              ["Aprendizaje", "Cada piloto mejora el siguiente.", BrainCircuit],
            ].map(([title, copy, Icon]) => (
              <article key={String(title)} className="bg-background p-7">
                <Icon className="h-7 w-7 text-[hsl(var(--joe-green-dark))]" />
                <h3 className="mt-8 text-lg font-extrabold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Agenda una sesión estratégica." copy="Define dónde la IA puede crear capacidad real y cuál es el primer experimento que vale la pena ejecutar." />
    </>
  );
}
