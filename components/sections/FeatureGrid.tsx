// © 2025 JoeWork.co
import FeatureCard from "@/components/ui/FeatureCard";
import RotatingWords from "@/components/ui/RotatingWords";
import { BarChartBig, Users, Zap } from "lucide-react"; // Example icons

// const t = useTranslations('Page.Home.Features'); // For i18n

const featuresData = [
  {
    icon: Zap,
    // title: t('feature1.title'),
    title: "Automatización Rápida",
    // description: t('feature1.description'),
    description:
      "Clona clics y teclado en cualquier interfaz en ≤ 4 semanas sin necesidad de APIs, adaptándose automáticamente a los cambios de interfaz.",
  },
  {
    icon: BarChartBig,
    // title: t('feature2.title'),
    title: "Ahorro Garantizado",
    // description: t('feature2.description'),
    description:
      "Ahorra del 40-60% de horas-hombre y elimina errores por completo, con una garantía de 30% de ahorro o devolución en 30 días.",
  },
  {
    icon: Users,
    // title: t('feature3.title'),
    title: "ROI en Tiempo Real",
    // description: t('feature3.description'),
    description:
      "Panel de control con métricas de ROI en tiempo real que te permite visualizar el impacto directo en tu negocio desde el primer día.",
  },
  // Add more features as needed
];

const FeatureGrid = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {/* {t('sectionTitle')} Example: */}
            Transforma tu Operación <RotatingWords /> Sin Fricción
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {/* {t('sectionSubtitle')} Example: */}
            Descubre cómo nuestra IA puede liberar a tu equipo de tareas
            repetitivas y enfocarlos en el crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
