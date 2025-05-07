// © 2025 JoeWork.co
import CaseHero from "@/components/sections/CaseHero";
import { constructMetadata } from "@/lib/metadata";
import { FileText } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Automatización SUNAT - JoeWork.co",
    description:
      "Simplifica tus declaraciones fiscales con la IA de JoeWork.co.",
    path: "/use-cases/sunat",
  });
}

export default async function SunatUseCasePage() {
  // TODO: Add translations and specific content for this use case
  return (
    <div className="w-full">
      <CaseHero
        icon={FileText}
        title="Automatización de Declaraciones SUNAT"
        subtitle="Cumple con tus obligaciones fiscales sin esfuerzo. JoeWork.co prepara y presenta tus declaraciones SUNAT, minimizando errores y ahorrándote tiempo valioso."
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="prose dark:prose-invert max-w-none">
          <h2>¿Cómo Funciona?</h2>
          <p>Placeholder content explaining the SUNAT automation process...</p>
          <ul>
            <li>Recolección automática de datos de facturas.</li>
            <li>Validación inteligente contra normativas vigentes.</li>
            <li>Generación de borradores para revisión.</li>
            <li>Presentación segura a través de la plataforma SUNAT.</li>
          </ul>

          <h2>Beneficios Clave</h2>
          <p>Placeholder content detailing benefits...</p>

          {/* Add more sections: Case studies, technical details, CTA etc. */}
        </div>
      </div>
    </div>
  );
}
