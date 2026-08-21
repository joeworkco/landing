import { FinalCta } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowDown,
  CalendarCheck2,
  Check,
  Clock3,
  FileCheck2,
  Laptop,
} from "lucide-react";
import { ClaudeGuide } from "./claude-guide";

export const metadata = constructMetadata({
  title: "Claude en Marcha",
  description:
    "Configura Claude Desktop en 90 minutos: contexto, conectores, proyecto y un reporte útil en horario. Guía gratuita de JoeWork.",
  path: "/claude",
});

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Claude en Marcha",
  description:
    "Guía gratuita para configurar Claude Desktop en diez pasos y tres sesiones.",
  totalTime: "PT90M",
  inLanguage: "es",
  url: `${siteConfig.url}/claude`,
  provider: {
    "@type": "Organization",
    name: "JoeWork",
    url: siteConfig.url,
  },
  step: Array.from({ length: 10 }, (_, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: [
      "Diagnóstico",
      "Primer entregable real",
      "Perfil permanente",
      "Conectar el trabajo real",
      "Dar casa al trabajo",
      "La entrevista",
      "Diseñar el reporte",
      "Elegir el destino",
      "Ponerlo en horario",
      "Cierre",
    ][index],
    url: `${siteConfig.url}/claude#paso-${index + 1}`,
  })),
};

export default function ClaudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      <header className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="site-container relative grid min-h-[680px] gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-primary">
              Guía gratuita por JoeWork
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.3rem,7vw,6.8rem)] font-extrabold leading-[.88] tracking-[-.065em]">
              Claude en marcha.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              En tres sesiones cortas, Claude aprende cómo trabajas, se conecta a tu negocio y deja un reporte útil funcionando en horario.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-white/45">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />90 minutos</span>
              <span className="inline-flex items-center gap-2"><Laptop className="h-4 w-4 text-primary" />Mac o Windows</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Sin registro</span>
            </div>
            <Button asChild size="lg" className="mt-9">
              <a href="#sesion-1">
                Empezar con el diagnóstico
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-5 text-sm text-white/50">
              Si escribes “estoy trabado”, pasa al modo rescate y resuelve una sola cosa a la vez.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl border border-white/15 bg-white/[.035] p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/40">Al terminar</p>
                <p className="mt-1 font-bold">Tres cosas son verdad</p>
              </div>
              <span className="font-mono text-xs font-bold text-primary">01 → 10</span>
            </div>
            <div className="divide-y divide-white/10">
              {[
                ["01", "Claude sabe quién eres", "Contexto y forma de trabajar", FileCheck2],
                ["02", "Está conectado a tu trabajo", "Calendario, correo o archivos", CalendarCheck2],
                ["03", "Algo útil pasa en horario", "Reporte automático o disparo manual", Clock3],
              ].map(([number, title, copy, Icon]) => (
                <div key={String(number)} className="grid grid-cols-[42px_1fr_28px] items-center gap-4 py-6">
                  <span className="font-mono text-sm font-bold text-primary">{String(number)}</span>
                  <div>
                    <p className="font-bold">{String(title)}</p>
                    <p className="mt-1 text-sm text-white/45">{String(copy)}</p>
                  </div>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-5 text-sm leading-6 text-white/55">
              Un paso a la vez. No marques nada hasta tener una prueba observable.
            </div>
          </div>
        </div>
      </header>

      <ClaudeGuide />

      <FinalCta
        title="Empieza por una prueba real."
        copy="Configura tu Claude personal hoy. Cuando quieras agentificar un proceso completo, hablamos."
      />
    </>
  );
}
