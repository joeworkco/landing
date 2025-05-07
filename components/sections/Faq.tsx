// © 2025 JoeWork.co
import FaqItem from "@/components/ui/FaqItem";
// import { useTranslations } from 'next-intl';

const faqData = [
  {
    // id: 'q1', // For translation keys
    question: "¿Qué tipo de tareas puede automatizar JoeWork.co?",
    answer:
      "JoeWork.co puede automatizar una amplia gama de tareas repetitivas en el navegador, como ingreso de datos, procesamiento de facturas (incluyendo SUNAT), gestión de inventarios en plataformas de ecommerce, generación de reportes, y mucho más. ¡Si lo haces en un navegador, probablemente podemos automatizarlo!",
  },
  {
    // id: 'q2',
    question: "¿Es seguro usar JoeWork.co con mis datos sensibles?",
    answer:
      "Absolutamente. La seguridad es nuestra máxima prioridad. JoeWork.co opera con un enfoque local-primero (local-first) siempre que es posible, y para tareas que requieren acceso a la nube, utilizamos encriptación de nivel bancario y seguimos las mejores prácticas de seguridad de datos. Tus credenciales y datos sensibles están protegidos.",
  },
  {
    // id: 'q3',
    question: "¿Necesito conocimientos técnicos para usar JoeWork.co?",
    answer:
      "No. Diseñamos JoeWork.co para que sea fácil de usar por cualquier persona en tu PyME. La configuración inicial es guiada por nuestro equipo, y la operación diaria es tan simple como asignar una tarea a un asistente virtual.",
  },
  {
    // id: 'q4',
    question:
      "¿Cómo se diferencia JoeWork.co de otras herramientas de RPA o macros?",
    answer:
      "JoeWork.co combina la robustez de RPA con la inteligencia de la IA moderna, específicamente entrenada para el contexto de LATAM. Ofrecemos una solución como servicio (AI Staff as a Service), lo que significa que no solo te damos una herramienta, sino asistentes listos para trabajar y soporte continuo.",
  },
  // Add more FAQs
];

const Faq = () => {
  // const t = useTranslations('Page.Home.Faq');
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {/* {t('sectionTitle')} Example: */}
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {/* {t('sectionSubtitle')} Example: */}
            Resolvemos tus dudas para que empieces a automatizar hoy mismo.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            // If using translation keys: question={t(item.id + '.question')} answer={t(item.id + '.answer')}
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
