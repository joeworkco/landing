import RoiCalculator from "@/components/marketing/roi-calculator";
import { FinalCta, PageHero } from "@/components/marketing/shared";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Calculadora ROI de trabajadores IA",
  description: "Estima horas y costo recuperable mensual y anual para un proceso automatizable con IA.",
  path: "/recursos/calculadora-roi",
});

export default function RoiCalculatorPage() {
  return (
    <>
      <PageHero
        title="Calcula el potencial de tu primer trabajador IA."
        copy="Usa volumen, tiempo, costo y porcentaje automatizable para construir una primera hipótesis transparente."
      />
      <section className="section-space">
        <div className="site-container">
          <RoiCalculator />
          <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">
            El resultado orienta una conversación, no reemplaza un diagnóstico. Un caso real también considera excepciones, calidad de datos, riesgo, supervisión y costo total de operación.
          </p>
        </div>
      </section>
      <FinalCta title="Valida el ROI con tu proceso real." />
    </>
  );
}
