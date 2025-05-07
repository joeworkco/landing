// © 2025 JoeWork.co
import CaseHero from "@/components/sections/CaseHero";
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { ShoppingCart } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // TODO: Add translations
  return constructMetadata({
    title: "Automatización Ecommerce - JoeWork.co",
    description:
      "Gestiona tu tienda online eficientemente con la IA de JoeWork.co.",
    locale: locale as Locale,
    path: "/use-cases/ecommerce",
  });
}

export default async function EcommerceUseCasePage({
  params: { locale },
}: Props) {
  // TODO: Add translations and specific content for this use case
  return (
    <div className="w-full">
      <CaseHero
        icon={ShoppingCart}
        title="Automatización para Ecommerce"
        subtitle="Desde la gestión de inventario hasta el procesamiento de pedidos y devoluciones, optimiza tu operación en MercadoLibre, Shopify, WooCommerce y más."
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Optimización de Procesos</h2>
          <p>
            Placeholder content explaining the ecommerce automation process...
          </p>
          <ul>
            <li>Actualización automática de stock entre plataformas.</li>
            <li>Procesamiento rápido y sin errores de pedidos.</li>
            <li>Gestión eficiente de devoluciones y reembolsos.</li>
            <li>Generación de reportes de ventas personalizados.</li>
          </ul>

          <h2>Plataformas Soportadas</h2>
          <p>Placeholder listing supported platforms...</p>

          {/* Add more sections: Case studies, technical details, CTA etc. */}
        </div>
      </div>
    </div>
  );
}
