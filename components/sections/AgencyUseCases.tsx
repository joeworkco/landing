// © 2025 JoeWork.co
import { FileText, TrendingUp, Users } from "lucide-react"; // Example icons

const useCasesData = [
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Conciliación Bancaria",
    description:
      "Automatización del proceso de conciliación bancaria que anteriormente requería 40 horas mensuales de trabajo manual y era propenso a errores.",
    result:
      "Resultado: Reducción del 100% en errores y ahorro de 38 horas mensuales",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Carga de Datos CRM",
    description:
      "Optimización del proceso de carga y actualización de datos de clientes en múltiples sistemas CRM, eliminando la duplicación de esfuerzos.",
    result:
      "Resultado: Mejora de eficiencia en un 50% y actualización de datos en tiempo real",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Procesos de Facturación",
    description:
      "Automatización del ciclo completo de facturación, desde la generación hasta el envío y seguimiento, sin intervención manual.",
    result:
      "Resultado: Ahorro de 60 horas mensuales y reducción del ciclo de cobro en 5 días",
  },
];

const AgencyUseCases = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Casos de Uso
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-neutral-400 sm:mt-4">
            Conoce cómo empresas reales están ahorrando tiempo y recursos con
            nuestra solución de automatización inteligente.
          </p>
        </div>
        <div className="space-y-8">
          {useCasesData.map((useCase, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-black/20 shadow-lg rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start backdrop-blur-sm"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 dark:bg-primary/20 text-primary">
                  {useCase.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-300 mb-3">
                  {useCase.description}
                </p>
                <div className="bg-green-100 dark:bg-green-700/30 border border-green-300 dark:border-green-600/50 text-green-700 dark:text-green-300 text-sm font-medium px-4 py-2 rounded-md">
                  {useCase.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyUseCases;
