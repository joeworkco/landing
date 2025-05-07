// © 2025 JoeWork.co
// import { useTranslations } from 'next-intl';

// Placeholder: Replace with actual SVG components or Image components if using raster images
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-16 w-32 p-2 bg-muted/50 rounded-lg border border-border">
    <span className="text-sm text-muted-foreground">{name}</span>
  </div>
);

const logos = [
  { name: "EmpresaSME 1", component: PlaceholderLogo },
  { name: "MiNegocio LATAM", component: PlaceholderLogo },
  { name: "SolucionesPyME", component: PlaceholderLogo },
  { name: "TuTiendaDigital", component: PlaceholderLogo },
  { name: "Servicios Rápidos", component: PlaceholderLogo },
  { name: "Consultores Asociados", component: PlaceholderLogo },
  // Add more logos. You might want a more structured way to import/manage these, perhaps from a config file.
];

const LogoWall = () => {
  // const t = useTranslations('Page.Home.LogoWall');
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground sm:text-3xl mb-10">
          {/* {t('sectionTitle')} Example: */}
          Con la Confianza de PyMEs en Toda Latinoamérica
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
          {logos.map((logo) => (
            <logo.component key={logo.name} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
