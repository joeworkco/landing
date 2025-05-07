// © 2025 JoeWork.co
import Link from "next/link"; // Or from '@/i18n/routing' if locale-aware links are needed here

const Hero = () => {
  // const t = useTranslations('Page.Home.Hero'); // For i18n if text comes from locales

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {/* {t('headline')} Example: */}
          Automatiza Tareas, Potencia tu Negocio en LATAM
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl text-balance">
          {/* {t('subheadline')} Example: */}
          JoeWork.co te ofrece asistentes IA listos para optimizar tus
          operaciones diarias, desde la contabilidad hasta el marketing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact" // Or use a specific CTA link like a demo booking
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            {/* {t('ctaButton')} Example: */}
            Solicita una Demo
          </Link>
          <Link
            href="/use-cases"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium text-accent-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            {/* {t('secondaryButton')} Example: */}
            Ver Casos de Uso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
