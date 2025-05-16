// © 2025 JoeWork.co
import { BackgroundPaths } from "@/components/ui/background-paths";
import FaqItem from "@/components/ui/FaqItem";
import { FeatureSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { AlertTriangle, FileText, Zap } from "lucide-react";
import React from "react";

const featureSectionItemsData = [
  {
    icon: <FileText className="w-6 h-6 stroke-1" />,
    title: "Flujos llenos de papel",
    description: "Envíos SUNAT eficientes en solo 3 clics.",
    lgColSpan: 1,
  },
  {
    icon: <AlertTriangle className="w-6 h-6 stroke-1" />,
    title: "Errores manuales costosos",
    description: "Operación 100% digital, minimizando errores.",
    lgColSpan: 1,
  },
  {
    icon: <Zap className="w-6 h-6 stroke-1" />,
    title: "Procesos lentos y repetitivos",
    description: "Automatización ágil implementada en 7 días.",
    lgColSpan: 1,
  },
];

const howWeWorkSteps = [
  "Auditoría (gratis)",
  "PoC (1 flujo, 6 000 PEN)",
  "Implementación (a medida)",
  "Soporte mensual",
];

const techStack = ["Rust", "Stagehand", "Gemini", "Docker"];

const miniFaq = [
  {
    question: "¿Cuánto dura la auditoría?",
    answer: "La auditoría inicial es gratuita y toma 1-2 días hábiles.",
  },
  {
    question: "¿Qué incluye el PoC?",
    answer:
      "Automatizamos un flujo crítico de tu negocio para que veas resultados reales antes de avanzar.",
  },
  {
    question: "¿Puedo escalar a más procesos?",
    answer:
      "Sí, tras el PoC, automatizamos tantos flujos como necesites, a medida.",
  },
  {
    question: "¿Ofrecen soporte continuo?",
    answer:
      "Sí, nuestro equipo brinda soporte y mantenimiento mensual para asegurar la continuidad.",
  },
];

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  className?: string;
}

const GridItem = ({ icon, title, description, className }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", className)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-1">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <div className="font-sans text-xl md:text-2xl font-bold text-emerald-600">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const generateMetadata = () =>
  constructMetadata({
    title: "Agencia de Automatización",
    description:
      "Automatizamos tus procesos críticos con IA en 7 días. Auditoría gratis, PoC rápido, soporte mensual. Descubre cómo empresas como Viajamas ahorran 40+ horas al mes.",
    path: "/agency",
    ogImageName: "og-agency.png",
  });

export default function AgencyPage() {
  return (
    <>
      {/* Hero */}
      <BackgroundPaths title="Automatizamos tus procesos críticos con IA en 7 días" />

      {/* Feature Section with Bento Grid (replaces the old pain/payoff cards) */}
      <FeatureSectionWithBentoGrid
        badgeText="Nuestra Solución"
        mainTitle="Transforma tu Operación, Sin Fricción"
        mainDescription="Digitalizamos y optimizamos tus flujos clave con IA, permitiéndote enfocarte en crecer tu negocio."
        items={featureSectionItemsData}
      />

      {/* How we work */}
      <section id="auditoria" className="py-12 md:py-20 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-neutral-100">
            ¿Cómo trabajamos?
          </h2>
          <ol className="space-y-6">
            {howWeWorkSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                  {i + 1}
                </span>
                <span className="text-lg font-medium mt-2 text-neutral-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof bar */}
      <section className="py-8 md:py-12 bg-neutral-800 border-y border-neutral-700">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-32 bg-neutral-700 rounded-lg border border-neutral-600 flex items-center justify-center">
              <span className="text-lg font-bold text-neutral-100">
                Viajamas
              </span>
            </div>
            <blockquote className="text-neutral-400 italic max-w-xs">
              Automatizamos reportes SUNAT y ahorramos 40+ horas al mes. El
              equipo de JoeWork lo resolvió en días.
            </blockquote>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <span className="text-4xl font-extrabold text-emerald-400">
              +40
            </span>
            <span className="text-lg text-neutral-400">
              horas ahorradas/mes
            </span>
          </div>
        </div>
      </section>

      {/* Tech trust row */}
      <section className="py-8 md:py-12 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl flex flex-wrap items-center justify-center gap-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-lg font-semibold bg-neutral-800 text-neutral-300 px-6 py-2 rounded-full border border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-neutral-100">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {miniFaq.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
