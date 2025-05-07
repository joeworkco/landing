// © 2025 JoeWork.co
import { constructMetadata } from "@/lib/metadata";
import { FileText, MailQuestion, ShoppingCart, Users } from "lucide-react"; // Example icons
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Use Cases - JoeWork.co",
    description: "Explore how JoeWork.co automates tasks for LATAM SMEs.",
    path: "/use-cases",
  });
}

const useCasesData = [
  {
    href: "/use-cases/sunat",
    icon: FileText,
    title: "Declaraciones SUNAT",
    description:
      "Automatiza la preparación y presentación de tus declaraciones fiscales ante SUNAT de forma rápida y sin errores.",
  },
  {
    href: "/use-cases/ecommerce",
    icon: ShoppingCart,
    title: "Gestión Ecommerce",
    description:
      "Optimiza tu inventario, procesa pedidos y gestiona devoluciones en MercadoLibre, Shopify y más.",
  },
  {
    href: "/use-cases/hr",
    icon: Users,
    title: "Procesos de RRHH",
    description:
      "Simplifica la gestión de planillas, contratos, vacaciones y otros procesos de recursos humanos.",
  },
  {
    href: "/use-cases/contact-forms",
    icon: MailQuestion,
    title: "Formularios de Contacto",
    description:
      "Procesa y responde automáticamente a las consultas de tus formularios web, mejorando tu tiempo de respuesta.",
  },
  // Add more use cases
];

export default async function UseCasesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Casos de Uso para tu PyME
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Descubre cómo JoeWork.co está transformando negocios como el tuyo en
          Latinoamérica.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {useCasesData.map((item) => (
          <Link key={item.title} href={item.href} className="block group">
            <div className="flex flex-col items-start h-full p-6 rounded-lg shadow-lg bg-card text-card-foreground border border-transparent group-hover:border-primary transition-colors duration-300">
              <div className="mb-4 flex items-center justify-center rounded-lg bg-primary/10 p-3">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-balance flex-grow">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Ver más →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
