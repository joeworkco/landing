// © 2025 JoeWork.co
import { Cpu, MessageSquareHeart, ShieldCheck } from "lucide-react"; // Example icons
// import { useTranslations } from 'next-intl';

const differentiatorsData = [
  {
    icon: ShieldCheck,
    // title: t('differentiator1.title'),
    title: "Seguridad Nivel Empresarial",
    // description: t('differentiator1.description'),
    description:
      "Protegemos tus datos con los más altos estándares, asegurando la confidencialidad y cumplimiento normativo en LATAM.",
  },
  {
    icon: Cpu,
    // title: t('differentiator2.title'),
    title: "IA Entrenada para LATAM",
    // description: t('differentiator2.description'),
    description:
      "Nuestros modelos entienden las particularidades del mercado latinoamericano, desde impuestos hasta jerga local.",
  },
  {
    icon: MessageSquareHeart,
    // title: t('differentiator3.title'),
    title: "Integración Transparente",
    // description: t('differentiator3.description'),
    description:
      "JoeWork.co se integra fácilmente con las herramientas que ya usas, sin interrumpir tu flujo de trabajo actual.",
  },
];

const Differentiators = () => {
  // const t = useTranslations('Page.Home.Differentiators');
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {/* {t('sectionTitle')} Example: */}
            ¿Por Qué Elegir JoeWork.co?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {/* {t('sectionSubtitle')} Example: */}
            Más que solo automatización, te ofrecemos una verdadera alianza
            estratégica para el crecimiento de tu PyME.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {differentiatorsData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="mb-4 flex items-center justify-center rounded-lg bg-primary/10 p-3">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-balance">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
