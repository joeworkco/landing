import { FinalCta, PageHero, SectionIntro } from "@/components/marketing/shared";
import { useCases } from "@/config/marketing";
import { constructMetadata } from "@/lib/metadata";
import { ArrowRight, Check, Workflow } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const useCase = useCases.find((item) => item.slug === slug);
  if (!useCase) return {};
  return constructMetadata({
    title: useCase.title,
    description: `${useCase.summary} Descubre el flujo, los sistemas y los resultados que mediríamos con JoeWork.`,
    path: `/casos-de-uso/${useCase.slug}`,
  });
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const useCase = useCases.find((item) => item.slug === slug);
  if (!useCase) notFound();
  const Icon = useCase.icon;
  const related = useCases.filter((item) => item.slug !== slug).slice(0, 3);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: useCase.title,
    description: useCase.summary,
    provider: { "@type": "Organization", name: "JoeWork", url: "https://joework.co" },
    areaServed: ["Latin America", "United States"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHero title={useCase.title} copy={useCase.summary}>
        <div className="border border-border bg-white p-7">
          <Icon className="h-7 w-7 text-[hsl(var(--joe-green-dark))]" />
          <h2 className="mt-8 text-xl font-bold">El problema</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{useCase.problem}</p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <SectionIntro title="Cómo funciona el flujo" />
          <ol className="border-t border-border">
            {useCase.workflow.map((step, index) => (
              <li key={step} className="grid grid-cols-[42px_1fr] gap-4 border-b border-border py-5">
                <span className="font-mono text-xs text-[hsl(var(--joe-green-dark))]">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-white section-space">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Resultados a medir</h2>
            <div className="mt-8 space-y-4">
              {useCase.outcomes.map((outcome) => (
                <p key={outcome} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                  <span className="font-semibold">{outcome}</span>
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-muted-foreground">
              Son objetivos de diseño. La meta final se define contra una línea base antes del piloto.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Sistemas posibles</h2>
            <div className="mt-8 border-t border-border">
              {useCase.systems.map((system) => (
                <div key={system} className="flex items-center gap-3 border-b border-border py-4 font-semibold">
                  <Workflow className="h-4 w-4 text-muted-foreground" />
                  {system}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionIntro title="Casos relacionados" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/casos-de-uso/${item.slug}`} className="group border-t-2 border-foreground pt-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold">
                  Explorar <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title={`Evalúa ${useCase.title.toLowerCase()} en tu empresa.`} />
    </>
  );
}
