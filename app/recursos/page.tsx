import { FinalCta, PageHero, SectionIntro } from "@/components/marketing/shared";
import { constructMetadata } from "@/lib/metadata";
import { ArrowRight, Calculator, ClipboardList, FileText, Gauge, MessagesSquare } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Recursos",
  description: "Herramientas y guías prácticas para identificar, priorizar y medir oportunidades de trabajadores IA.",
  path: "/recursos",
});

const resources = [
  {
    title: "Calculadora ROI de trabajadores IA",
    description: "Estima horas y costo recuperable con las variables reales de un proceso.",
    href: "/recursos/calculadora-roi",
    status: "Disponible",
    icon: Calculator,
  },
  {
    title: "10 procesos que puedes agentificar",
    description: "Checklist para detectar trabajo repetitivo con impacto y volumen suficiente.",
    status: "Próximamente",
    icon: ClipboardList,
  },
  {
    title: "Cómo crear un Company Brain",
    description: "Guía para ordenar fuentes, permisos, recuperación y feedback.",
    href: "/recursos/como-crear-company-brain",
    status: "Disponible",
    icon: FileText,
  },
  {
    title: "Vender más por WhatsApp",
    description: "Playbook para conectar atención, recomendación, pedidos y seguimiento.",
    status: "Próximamente",
    icon: MessagesSquare,
  },
  {
    title: "Readiness de adopción IA",
    description: "Evalúa procesos, datos, liderazgo, gobernanza y capacidad de ejecución.",
    status: "Próximamente",
    icon: Gauge,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Recursos para pasar de ideas a capacidad operativa."
        copy="Herramientas prácticas para priorizar oportunidades, estimar impacto y diseñar una adopción responsable."
      />
      <section className="section-space">
        <div className="site-container">
          <SectionIntro title="Empieza por medir el trabajo" />
          <div className="mt-12 border-t border-border">
            {resources.map((resource) => {
              const Icon = resource.icon;
              const content = (
                <>
                  <Icon className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                  <div>
                    <h2 className="text-xl font-bold">{resource.title}</h2>
                    <p className="mt-2 leading-7 text-muted-foreground">{resource.description}</p>
                  </div>
                  <span className={`text-xs font-semibold ${resource.href ? "text-[hsl(var(--joe-green-dark))]" : "text-muted-foreground"}`}>{resource.status}</span>
                  {resource.href && <ArrowRight className="hidden h-5 w-5 md:block" />}
                </>
              );
              const className = "grid gap-4 border-b border-border py-7 md:grid-cols-[36px_1fr_110px_24px] md:items-center";
              return resource.href ? (
                <Link key={resource.title} href={resource.href} className={className}>{content}</Link>
              ) : (
                <div key={resource.title} className={className}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCta title="Convierte una estimación en un caso de negocio." />
    </>
  );
}
