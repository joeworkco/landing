// © 2025 JoeWork.co
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // TODO: Add translations
  return constructMetadata({
    title: "Documentation - JoeWork.co",
    description: "Find guides and documentation for JoeWork.co.",
    locale: locale as Locale,
    path: "/docs",
  });
}

export default async function DocsPage({ params: { locale } }: Props) {
  // TODO: Add translations and actual content (likely using MDX)
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
        Documentación
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2>Inicio Rápido</h2>
        <p>
          ¡Bienvenido a la documentación de JoeWork.co! Estamos trabajando para
          crear guías detalladas que te ayudarán a sacar el máximo provecho de
          nuestros asistentes IA.
        </p>
        <p>
          Pronto encontrarás aquí tutoriales paso a paso, ejemplos de
          configuración y mejores prácticas para automatizar tus tareas.
        </p>
        {/* Placeholder for MDX content or links to specific docs */}
      </div>
    </div>
  );
}
