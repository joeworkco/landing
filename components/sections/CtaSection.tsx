// © 2025 JoeWork.co
import Link from "next/link";
// import { useTranslations } from 'next-intl';

const CtaSection = () => {
  // const t = useTranslations('Page.Home.Cta');
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {/* {t('headline')} Example: */}
            ¿Listo para Revolucionar tu PyME con IA?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-balance text-primary-foreground/90">
            {/* {t('subheadline')} Example: */}
            No dejes que las tareas manuales frenen tu crecimiento. Descubre el
            poder de los asistentes IA de JoeWork.co.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-10 py-4 text-lg font-semibold text-background-foreground shadow-md hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-primary dark:text-primary dark:hover:bg-background/80"
            >
              {/* {t('ctaButton')} Example: */}
              Habla con un Experto Hoy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
