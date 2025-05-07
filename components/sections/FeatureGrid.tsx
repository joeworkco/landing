// © 2025 JoeWork.co
import FeatureCard from "@/components/ui/FeatureCard";
import { BarChartBig, Users, Zap } from "lucide-react"; // Example icons

// const t = useTranslations('Page.Home.Features'); // For i18n

const featuresData = [
  {
    icon: Zap,
    // title: t('feature1.title'),
    title: "Automatización Rápida",
    // description: t('feature1.description'),
    description:
      "Implementa soluciones de IA en días, no meses, y ve resultados inmediatos en tu flujo de trabajo.",
  },
  {
    icon: BarChartBig,
    // title: t('feature2.title'),
    title: "Optimización Continua",
    // description: t('feature2.description'),
    description:
      "Nuestros asistentes IA aprenden y se adaptan, mejorando la eficiencia de tus procesos constantemente.",
  },
  {
    icon: Users,
    // title: t('feature3.title'),
    title: "Soporte Dedicado en LATAM",
    // description: t('feature3.description'),
    description:
      "Equipo local listo para ayudarte a integrar y maximizar el potencial de la IA en tu PyME.",
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
            Transforma tu Operación con JoeWork.co
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
