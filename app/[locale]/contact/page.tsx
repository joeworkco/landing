// © 2025 JoeWork.co
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Phone } from "lucide-react"; // Using Phone for WhatsApp icon
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // TODO: Add translations
  return constructMetadata({
    title: "Contact Us - JoeWork.co",
    description: "Schedule a demo or get in touch with the JoeWork.co team.",
    locale: locale as Locale,
    path: "/contact",
  });
}

// Placeholder values - replace with actual links
const CALENDLY_URL = "https://calendly.com/your-link/demo"; // REPLACE THIS
const WHATSAPP_NUMBER = "51999888777"; // REPLACE THIS with international format number (e.g., Peru)
const WHATSAPP_MESSAGE = "Hola! Quisiera agendar una demo de JoeWork.co";

export default async function ContactPage({ params: { locale } }: Props) {
  // TODO: Add translations
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hablemos de Automatización
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Agenda una demostración personalizada o contáctanos directamente para
          resolver tus dudas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Calendly Embed */}
        <div className="aspect-[4/3] md:aspect-auto md:min-h-[600px] rounded-lg overflow-hidden border border-border shadow-lg">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a Demo with JoeWork.co"
            className="min-h-[600px]"
          ></iframe>
        </div>

        {/* Contact Info & WhatsApp */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Prefieres WhatsApp?</h2>
          <p className="text-muted-foreground mb-6">
            Haz clic en el botón para iniciar una conversación directamente con
            nuestro equipo.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-3 text-base font-medium text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            <Phone className="h-5 w-5" />
            Chatea por WhatsApp
          </Link>

          <div className="mt-12 pt-8 border-t border-border w-full">
            <h3 className="text-xl font-semibold mb-3">
              Información Adicional
            </h3>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:hello@joework.co"
                className="text-primary hover:underline"
              >
                hello@joework.co
              </a>
            </p>
            {/* Add Address or other info if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
