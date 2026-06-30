import LegacyBridge from "@/components/marketing/legacy-bridge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Documentación",
  description: "Explora los recursos comerciales y técnicos disponibles de JoeWork.",
  path: "/docs",
  noIndex: true,
});

export default function DocsBridgePage() {
  return <LegacyBridge title="Los recursos de JoeWork tienen una nueva casa." copy="Encuentra herramientas para evaluar oportunidades, medir potencial y diseñar tu primer trabajador IA." destination="/recursos" destinationLabel="Ir a Recursos" />;
}
