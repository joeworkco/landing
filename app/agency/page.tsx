// © 2025 JoeWork.co
import { Button } from "@/components/ui/button";
import FaqItem from "@/components/ui/FaqItem";
import { constructMetadata } from "@/lib/metadata";
import { Fragment } from "react";

const painPayoffCards = [
  {
    pain: "Flujos llenos de papel",
    payoff: "→ Envíos SUNAT en 3 clics",
  },
  {
    pain: "Errores manuales costosos",
    payoff: "→ 0 errores, 100% digital",
  },
  {
    pain: "Procesos lentos y repetitivos",
    payoff: "→ Automatización en 7 días",
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
    <Fragment>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
            Automatizamos tus procesos críticos con IA en 7 días
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Deja que nuestro equipo de expertos digitalice y optimice tus flujos
            clave, sin fricción ni sorpresas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-10 py-4 text-lg" asChild>
              <a href="#auditoria">Reserva tu auditoría</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain → Payoff section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPayoffCards.map((card, i) => (
              <div
                key={i}
                className="bg-background rounded-xl shadow p-8 flex flex-col items-center text-center border border-border"
              >
                <span className="text-xl font-semibold text-primary mb-2">
                  {card.pain}
                </span>
                <span className="text-2xl font-bold text-emerald-600">
                  {card.payoff}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="auditoria" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            ¿Cómo trabajamos?
          </h2>
          <ol className="space-y-6">
            {howWeWorkSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                  {i + 1}
                </span>
                <span className="text-lg font-medium mt-2">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof bar */}
      <section className="py-8 md:py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center gap-8 justify-between">
          {/* Viajamas logo + quote */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-32 bg-white rounded-lg border flex items-center justify-center">
              {/* Replace with actual logo */}
              <span className="text-lg font-bold text-primary">Viajamas</span>
            </div>
            <blockquote className="text-muted-foreground italic max-w-xs">
              "Automatizamos reportes SUNAT y ahorramos 40+ horas al mes. El
              equipo de JoeWork lo resolvió en días."
            </blockquote>
          </div>
          {/* Metrics counter */}
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <span className="text-4xl font-extrabold text-emerald-600">
              +40
            </span>
            <span className="text-lg text-muted-foreground">
              horas ahorradas/mes
            </span>
          </div>
        </div>
      </section>

      {/* Tech trust row */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl flex flex-wrap items-center justify-center gap-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-lg font-semibold bg-muted px-6 py-2 rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {miniFaq.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky footer CTA (mobile only) */}
      <div className="fixed bottom-0 left-0 w-full z-50 block md:hidden">
        <div className="bg-primary text-primary-foreground flex items-center justify-between px-4 py-3 shadow-lg">
          <span className="font-semibold text-lg">
            ¿Listo para automatizar?
          </span>
          <Button size="lg" className="ml-4 px-6 py-3 text-base" asChild>
            <a href="#auditoria">Reserva tu auditoría</a>
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
