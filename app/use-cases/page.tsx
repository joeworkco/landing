import LegacyBridge from "@/components/marketing/legacy-bridge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Use cases",
  description: "Los casos de uso de JoeWork ahora están disponibles en español.",
  path: "/use-cases",
  noIndex: true,
});

export default function OldUseCasesBridgePage() {
  return <LegacyBridge title="Nuestros casos de uso se mudaron." copy="Explora trabajadores IA para ventas, ecommerce, operaciones, atención y conocimiento organizacional." destination="/casos-de-uso" destinationLabel="Ver casos de uso" />;
}
