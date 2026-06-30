import LegacyBridge from "@/components/marketing/legacy-bridge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Precios",
  description: "Cada implementación se dimensiona según proceso, volumen, sistemas y nivel de operación.",
  path: "/pricing",
  noIndex: true,
});

export default function PricingBridgePage() {
  return <LegacyBridge title="El alcance se define alrededor del resultado." copy="Un trabajador IA no se cotiza como una licencia genérica. Evaluamos volumen, riesgo, sistemas, excepciones y métricas antes de proponer el piloto." destination="/casos-de-uso" destinationLabel="Explora casos de uso" />;
}
