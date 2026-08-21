import { Button } from "@/components/ui/button";
import { Clock3, ExternalLink, FileText, Laptop } from "lucide-react";

const requirements: Array<{
  title: string;
  copy: string;
  icon: typeof Laptop;
  href?: string;
}> = [
  {
    title: "La app de escritorio",
    copy: "Mac o Windows. Los conectores y la automatización de la guía no se configuran desde el teléfono.",
    icon: Laptop,
    href: "https://claude.com/download",
  },
  {
    title: "30 minutos sin reuniones",
    copy: "Haz una sesión completa. Puedes parar en cada checkpoint y continuar otro día sin repetir nada.",
    icon: Clock3,
  },
  {
    title: "Algo real de tu negocio",
    copy: "Una lista de clientes, los gastos del mes o un proceso que te fastidia. Los ejemplos inventados no cuentan.",
    icon: FileText,
  },
];

export function GuidePrimer() {
  return (
    <section className="border-b border-border bg-white" aria-labelledby="antes-de-empezar">
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
              Antes de empezar
            </p>
            <h2 id="antes-de-empezar" className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Prepara poco. Pero que sea real.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              No necesitas saber de prompts. Necesitas tiempo sin interrupciones y una pieza de trabajo que te importe lo suficiente como para comprobar si el resultado sirve.
            </p>
          </div>

          <div>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {requirements.map(({ title, copy, icon: Icon, href }) => (
                <article key={title} className="bg-[hsl(var(--joe-paper))] p-5 md:p-6">
                  <Icon className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" aria-hidden="true" />
                  <h3 className="mt-5 font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                  {href && (
                    <a className="joe-link mt-4 inline-flex items-center text-sm font-semibold" href={href}>
                      Descargar la app
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-6 border border-border bg-[hsl(var(--joe-console))] p-5 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-6">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-primary">
                  Una regla de confianza
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                  Nunca pegues un enlace en Claude sin poder leer primero qué dice. Los trece archivos de esta guía son públicos y tienen historial de cambios.
                </p>
              </div>
              <div className="mt-5 flex shrink-0 flex-wrap gap-3 md:mt-0">
                <Button asChild variant="secondary">
                  <a href="https://github.com/joeworkco/landing/tree/main/public/claude/guia">
                    Revisar los archivos
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href="#transparencia">Por qué importa</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
