import { FinalCta, PageHero } from "@/components/marketing/shared";
import { useCases } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Casos de uso",
  description: "Casos de uso de trabajadores IA para ventas, ecommerce, cotizaciones, pagos, operaciones, atención y Company Brain.",
  path: "/casos-de-uso",
});

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        title="Casos de uso conectados a resultados reales."
        copy="Explora procesos comerciales, operativos y de conocimiento donde un trabajador IA puede aumentar capacidad sin perder control."
      />
      <section className="section-space">
        <div className="site-container">
          <div className="border-t border-border">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Link
                  key={useCase.slug}
                  href={`/casos-de-uso/${useCase.slug}`}
                  className="group grid gap-4 border-b border-border py-7 md:grid-cols-[60px_1fr_1fr_auto] md:items-center md:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <Icon className="h-5 w-5 text-[hsl(var(--joe-green-dark))] md:hidden" />
                  </div>
                  <h2 className="text-2xl font-bold">{useCase.title}</h2>
                  <p className="leading-7 text-muted-foreground">{useCase.summary}</p>
                  <ArrowRight className="hidden h-5 w-5 transition-transform group-hover:translate-x-1 md:block" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCta title="Encuentra el flujo con mayor potencial." />
    </>
  );
}
