import { CheckList, FinalCta, SectionIntro } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Database,
  FileKey2,
  FileText,
  LockKeyhole,
  MessageSquareText,
  MessagesSquare,
  RefreshCw,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Company Brain",
  description: "Convierte el conocimiento disperso de tu empresa en contexto confiable para equipos humanos y trabajadores IA.",
  path: "/company-brain",
});

const layers = [
  ["Captura", "Recolecta llamadas, documentos, chats, correos, CRM, SOPs y conocimiento experto.", MessagesSquare],
  ["Recuperación", "Entrega la información correcta a cada persona o agente cuando la necesita.", Search],
  ["Fuente de verdad", "Define qué dato manda cuando documentos, sistemas o personas se contradicen.", ShieldCheck],
  ["Permisos", "Protege información financiera, comercial, legal, de RR. HH. y dirección por rol.", LockKeyhole],
  ["Feedback loops", "Convierte correcciones humanas en mejoras controladas del sistema.", RefreshCw],
  ["Ejecución", "Conecta el conocimiento con ventas, soporte, cotizaciones, onboarding y operaciones.", Workflow],
];

export default function CompanyBrainPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-primary/15 blur-3xl" />
        <div className="site-container relative grid min-h-[700px] gap-16 py-16 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-primary">Company Brain</p>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.4rem,5.5vw,5.5rem)] font-extrabold leading-[.96] tracking-[-.055em]">
              Convierte conocimiento disperso en una ventaja compuesta.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
              Company Brain hace que humanos y trabajadores IA operen con la misma información confiable, actualizada y contextual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                  Diseña tu Company Brain <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white hover:text-foreground">
                <Link href="/casos-de-uso/company-brain-ventas">Ver un caso <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[560px]">
            <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-[hsl(var(--joe-console))] shadow-[0_0_0_16px_rgba(84,204,12,.08)]">
              <BrainCircuit className="h-11 w-11 text-primary" />
              <p className="mt-3 text-sm font-extrabold">Company Brain</p>
              <span className="mt-1 text-[10px] text-white/45">Contexto confiable</span>
            </div>
            <div className="absolute inset-16 rounded-full border border-dashed border-white/20" />
            {[
              ["CRM", Database, "left-0 top-16"],
              ["Reuniones", MessagesSquare, "right-0 top-12"],
              ["Documentos", FileText, "bottom-12 left-2"],
              ["SOPs", FileKey2, "bottom-8 right-3"],
            ].map(([label, Icon, position]) => (
              <div key={String(label)} className={`absolute ${String(position)} flex w-40 items-center gap-3 rounded-xl border border-white/15 bg-white/[.06] p-4 backdrop-blur-sm`}>
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold">{String(label)}</p>
                  <p className="mt-1 text-[10px] text-white/40">Fuente conectada</p>
                </div>
              </div>
            ))}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-[10px] font-bold text-white">Permisos aplicados</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-[hsl(var(--joe-console))] px-4 py-2 text-[10px] font-bold text-primary">Listo para ejecutar</div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <SectionIntro
              title="Tu empresa sabe más de lo que puede usar"
              copy="El conocimiento existe, pero está fragmentado entre personas, canales y formatos. Eso ralentiza decisiones y vuelve frágil la ejecución."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Llamadas y reuniones", MessagesSquare],
                ["Documentos y propuestas", FileText],
                ["WhatsApp, email y CRM", MessageSquareText],
                ["SOPs y políticas", FileKey2],
              ].map(([label, Icon]) => (
                <div key={String(label)} className="delight-card flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-[hsl(var(--joe-green-dark))]"><Icon className="h-5 w-5" /></span>
                  <p className="font-bold">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[hsl(var(--joe-sunk))] section-space">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro title="Las seis capas del Company Brain" copy="No es una carpeta con búsqueda. Es una arquitectura de conocimiento, control y ejecución." />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {layers.map(([title, copy, Icon], index) => (
              <article key={String(title)} className="delight-card rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[hsl(var(--joe-green-dark))]"><Icon className="h-6 w-6" /></span>
                  <span className="font-mono text-sm font-bold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-xl font-extrabold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <SectionIntro
              title="Una interacción puede alimentar toda la organización"
              copy="Una llamada comercial bien capturada puede mejorar el pitch, entrenar al equipo, revelar objeciones y enriquecer a los trabajadores IA."
            />
            <div>
              <div className="flex items-center gap-4 rounded-2xl bg-[hsl(var(--joe-console))] p-6 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary"><MessagesSquare className="h-6 w-6" /></span>
                <div><p className="font-extrabold">Llamada comercial</p><p className="mt-1 text-sm text-white/50">Una fuente, múltiples usos</p></div>
              </div>
              <div className="ml-6 border-l-2 border-primary/30 pl-8 pt-5">
                {["Biblioteca de objeciones", "Material de entrenamiento", "Insights de posicionamiento", "Alertas para gerencia", "Respuestas para agentes IA"].map((item, index) => (
                  <div key={item} className="group flex items-center gap-4 border-b border-border py-4">
                    <span className="font-mono text-xs text-[hsl(var(--joe-green-dark))]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-bold transition-transform group-hover:translate-x-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <ShieldCheck className="h-10 w-10 text-[hsl(var(--joe-green-dark))]" />
            <SectionIntro className="mt-7" title="Seguridad antes que amplitud" copy="El conocimiento solo crea ventaja cuando conserva permisos, fuentes y trazabilidad." />
          </div>
          <CheckList items={[
            "Acceso mínimo por rol y caso de uso.",
            "Fuentes oficiales identificadas y priorizadas.",
            "Datos sensibles separados de contextos generales.",
            "Correcciones, aprobaciones y cambios trazables.",
            "Escalamiento humano para ambigüedad o conflicto.",
          ]} />
        </div>
      </section>
      <FinalCta title="Diseña el cerebro de tu empresa." copy="Empieza por un flujo de alto valor y construye una capa de conocimiento que se vuelva más útil con cada interacción." />
    </>
  );
}
