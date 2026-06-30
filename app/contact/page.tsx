import LegacyBridge from "@/components/marketing/legacy-bridge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contacto",
  description: "Agenda un diagnóstico IA con JoeWork.",
  path: "/contact",
  noIndex: true,
});

export default function ContactBridgePage() {
  return <LegacyBridge title="Hablemos de tu primer trabajador IA." copy="Agenda un diagnóstico para identificar el proceso, la línea base y el resultado que vale la pena probar primero." destination="/trabajadores-ia" destinationLabel="Revisar trabajadores IA" />;
}
