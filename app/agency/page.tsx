// © 2025 JoeWork.co
import { FaqSectionDemo } from "@/components/demos/FaqSectionDemo";
import { Features8Demo } from "@/components/demos/Features8Demo";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { FeatureSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { AlertTriangle, FileText, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const featureSectionItemsData = [
  {
    icon: <FileText className="w-6 h-6 stroke-1" />,
    title: "Automatización Rápida",
    description:
      "Clona clics y teclado en cualquier interfaz en ≤ 4 semanas sin necesidad de APIs, adaptándose automáticamente a los cambios de interfaz.",
    lgColSpan: 1,
  },
  {
    icon: <AlertTriangle className="w-6 h-6 stroke-1" />,
    title: "Ahorro Garantizado",
    description:
      "Ahorra del 40-60% de horas-hombre y elimina errores por completo, con una garantía de 30% de ahorro o devolución en 30 días.",
    lgColSpan: 1,
  },
  {
    icon: <Zap className="w-6 h-6 stroke-1" />,
    title: "ROI en Tiempo Real",
    description:
      "Panel de control con métricas de ROI en tiempo real que te permite visualizar el impacto directo en tu negocio desde el primer día.",
    lgColSpan: 1,
  },
];

const howWeWorkStepsRaw = [
  "Auditoría (gratis)",
  "PoC (1 flujo, 6 000 PEN)",
  "Implementación (a medida)",
  "Soporte mensual",
];

const timelineData = howWeWorkStepsRaw.map((step, index) => {
  let contentText = "";
  switch (index) {
    case 0:
      contentText =
        "Analizamos tus procesos actuales para identificar cuellos de botella y oportunidades de automatización. Sin costo alguno.";
      break;
    case 1:
      contentText =
        "Desarrollamos una Prueba de Concepto (PoC) enfocada en un flujo crítico para demostrar el valor y la viabilidad rápidamente.";
      break;
    case 2:
      contentText =
        "Una vez validado el PoC, procedemos con la implementación completa, adaptando la solución a todas tus necesidades específicas.";
      break;
    case 3:
      contentText =
        "Ofrecemos soporte continuo y mantenimiento para asegurar que tus procesos automatizados sigan funcionando de manera óptima.";
      break;
    default:
      contentText = "Detalles del paso.";
  }
  return {
    title: `Paso ${index + 1}: ${step.split(" (")[0]}`,
    content: (
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        {contentText}
      </p>
    ),
    media: (
      <Image
        src="/path/to/your/image.jpg"
        alt={`Visual for ${step.split(" (")[0]}`}
        width={500}
        height={300}
        className="rounded-md object-cover"
      />
    ),
  };
});

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

const agencyTestimonials = [
  {
    id: 1,
    name: "Gerente General",
    role: "Viajamas",
    company: "Agencia de Viajes",
    content:
      "Automatizamos reportes SUNAT y ahorramos 40+ horas al mes. El equipo de JoeWork lo resolvió en días.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop", // Placeholder for Viajamas
  },
  {
    id: 2,
    name: "Ana Pérez",
    role: "Jefa de Operaciones",
    company: "Logística Eficaz",
    content:
      "La automatización de nuestros procesos de facturación ha sido un cambio radical. Más rápido, menos errores y el equipo está más contento.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29170?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "Consultores Tech",
    content:
      "Implementar IA en nuestros flujos de trabajo parecía complicado, pero JoeWork lo hizo sencillo y los resultados superaron nuestras expectativas.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
  },
];

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

      {/* Feature Section with Bento Grid */}
      <FeatureSectionWithBentoGrid
        badgeText="Nuestra Solución"
        mainTitle="Transforma tu Operación, Sin Fricción"
        mainDescription="Digitalizamos y optimizamos tus flujos clave con IA, permitiéndote enfocarte en crecer tu negocio."
        items={featureSectionItemsData}
      />

      {/* How we work - REPLACED with Timeline */}
      <Timeline
        data={timelineData}
        sectionTitle="Nuestro Proceso Simplificado"
        sectionDescription="Así es como llevamos tus operaciones al siguiente nivel, paso a paso."
      />

      {/* Proof bar - REPLACED with AnimatedTestimonials */}
      <AnimatedTestimonials
        title="Empresas que Confían en JoeWork.co"
        subtitle="Descubre cómo hemos ayudado a negocios como el tuyo a ahorrar tiempo y optimizar procesos con IA."
        badgeText="Resultados Comprobados"
        testimonials={agencyTestimonials}
        trustedCompanies={["Viajamas", "PWC", "EY", "Deloitte", "KPMG"]}
        trustedCompaniesTitle="Usado por equipos en"
        className="bg-neutral-900 dark:bg-neutral-950 border-y border-neutral-800 dark:border-neutral-700"
      />

      {/* Tech trust row - REPLACED with Features8Demo */}
      <Features8Demo />

      {/* Mini FAQ - REPLACED with FaqSectionDemo */}
      <FaqSectionDemo />

      {/* Footer */}
      {/* <FooterDemo /> */}
    </>
  );
}
