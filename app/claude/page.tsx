import { FinalCta } from "@/components/marketing/shared";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import { ClaudeGuide } from "./claude-guide";
import { ClaudeHero } from "./claude-hero";
import { GuideTransparency, SkillInstall } from "./guide-footer-sections";
import { GuidePrimer } from "./guide-primer";

export const metadata = constructMetadata({
  title: "Claude en Marcha",
  description:
    "De la pantalla en blanco a un Claude que te conoce, trabaja con tu contexto y entrega algo útil cada mañana. Guía gratuita de JoeWork.",
  path: "/claude",
});

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Claude en Marcha",
  description:
    "Guía gratuita para configurar Claude Desktop en diez pasos y tres sesiones.",
  totalTime: "PT90M",
  inLanguage: "es",
  url: `${siteConfig.url}/claude`,
  provider: {
    "@type": "Organization",
    name: "JoeWork",
    url: siteConfig.url,
  },
  step: Array.from({ length: 10 }, (_, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: [
      "Diagnóstico",
      "Primer entregable real",
      "Perfil permanente",
      "Conectar el trabajo real",
      "Dar casa al trabajo",
      "La entrevista",
      "Diseñar el reporte",
      "Elegir el destino",
      "Ponerlo en horario",
      "Cierre",
    ][index],
    url: `${siteConfig.url}/claude#paso-${index + 1}`,
  })),
};

export default function ClaudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      <ClaudeHero />

      <GuidePrimer />

      <ClaudeGuide />

      <SkillInstall />

      <FinalCta
        title="Esto era la parte que puedes hacer solo."
        copy="Ahora tienes un Claude que te conoce y entrega algo útil. Lo siguiente son procesos completos que corren con acceso, reglas y control. Eso es lo que implementamos en JoeWork."
      />

      <GuideTransparency />
    </>
  );
}
