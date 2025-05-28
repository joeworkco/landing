// © 2025 JoeWork.co
import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
// Removed Locale import
import { constructMetadata } from "@/lib/metadata";
// Removed getTranslations

// Removed Props type

export async function generateMetadata(): Promise<Metadata> {
  // Removed params
  return constructMetadata({
    title: "Pricing - JoeWork.co",
    description: "Affordable automation plans for LATAM SMEs.",
    // Removed locale
    path: "/pricing",
  });
}

const pricingTiers = [
  {
    name: "Freelancer",
    priceMonthly: "500",
    priceSuffix: "USD/mes",
    description: "Ideal para profesionales independientes y tareas puntuales.",
    features: [
      "1 Asistente IA Dedicado",
      "Hasta 20 horas de automatización/mes",
      "Soporte por Email",
    ],
    cta: "Empezar Ahora",
    ctaLink: "/contact?plan=freelancer",
  },
  {
    name: "PyME",
    priceMonthly: "1500",
    priceSuffix: "USD/mes",
    description:
      "Perfecto para equipos pequeños y medianos con flujos de trabajo regulares.",
    features: [
      "Hasta 3 Asistentes IA",
      "Hasta 100 horas de automatización/mes",
      "Integración con herramientas comunes",
      "Soporte Prioritario por WhatsApp",
    ],
    cta: "Solicitar Demo",
    ctaLink: "/contact?plan=sme",
    popular: true,
  },
  {
    name: "Empresarial",
    priceMonthly: "Custom",
    priceSuffix: "",
    description:
      "Soluciones a medida para operaciones complejas y grandes volúmenes.",
    features: [
      "Asistentes IA Ilimitados",
      "Horas de automatización personalizadas",
      "Integraciones Avanzadas y API",
      "Manager de Cuenta Dedicado",
      "SLA Personalizado",
    ],
    cta: "Contactar Ventas",
    ctaLink: "/contact?plan=enterprise",
  },
];

export default async function PricingPage() {
  // Removed params
  // Removed locale logic
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Planes Flexibles para tu Crecimiento
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Elige el plan de JoeWork.co que mejor se adapta a las necesidades y
          presupuesto de tu negocio en LATAM.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 items-stretch">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border ${
              tier.popular ? "border-primary shadow-2xl" : "border-border"
            } p-8 bg-card text-card-foreground`}
          >
            {tier.popular && (
              <div className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                Más Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold leading-7">{tier.name}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {tier.description}
            </p>
            <div className="mt-6 flex items-baseline gap-x-2">
              {tier.priceMonthly !== "Custom" ? (
                <>
                  <span className="text-4xl font-bold tracking-tight">
                    ${tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    {tier.priceSuffix}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold tracking-tight">
                  Personalizado
                </span>
              )}
            </div>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground flex-grow"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={tier.ctaLink}
              className={`mt-10 block rounded-md px-3 py-2 text-center text-base font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                tier.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary"
                  : "bg-muted text-muted-foreground hover:bg-accent focus-visible:outline-muted"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
