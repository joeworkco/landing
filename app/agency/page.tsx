import LegacyBridge from "@/components/marketing/legacy-bridge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Agencia de automatización",
  description: "La oferta de JoeWork ahora se organiza alrededor de trabajadores IA, Company Brain y consultoría IA.",
  path: "/agency",
  noIndex: true,
});

export default function AgencyBridgePage() {
  return <LegacyBridge title="La automatización ahora tiene un trabajo concreto." copy="Evolucionamos nuestra oferta hacia trabajadores IA conectados a procesos, herramientas y conocimiento real de la empresa." destination="/trabajadores-ia" destinationLabel="Conoce los trabajadores IA" />;
}
