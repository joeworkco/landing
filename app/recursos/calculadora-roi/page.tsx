import RoiCalculator from "@/components/marketing/roi-calculator";
import { FinalCta } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/metadata";
import { ArrowDown, ArrowRight, Calculator, Check, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Calculadora ROI de trabajadores IA",
  description: "Estima horas y costo recuperable mensual y anual para un proceso automatizable con IA.",
  path: "/recursos/calculadora-roi",
});

export default function RoiCalculatorPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="site-container relative py-14 md:py-20">
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-primary"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Recursos
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-primary text-[hsl(var(--joe-console))]">
                  <Calculator className="h-5 w-5" />
                </span>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-primary">
                  Herramienta gratuita · Sin registro
                </p>
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-7xl">
                Convierte trabajo repetitivo en una hipótesis de ROI.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Usa volumen, tiempo, costo y porcentaje automatizable para estimar cuánta capacidad puede recuperar tu equipo.
              </p>
              <Button asChild size="lg" className="mt-9">
                <a href="#calculadora">
                  Calcular escenario
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10">
              {[
                { icon: Gauge, label: "Resultado inmediato", copy: "Actualiza cada variable y ve el impacto al instante." },
                { icon: ShieldCheck, label: "Hipótesis transparente", copy: "Fórmula visible, sin datos ocultos ni captura de contacto." },
                { icon: Check, label: "Punto de partida", copy: "Úsalo para priorizar qué proceso merece un diagnóstico." },
              ].map(({ icon: Icon, label, copy }) => (
                <div key={label} className="grid grid-cols-[40px_1fr] gap-4 bg-[hsl(var(--joe-console))] p-5 md:p-6">
                  <div className="grid h-10 w-10 place-items-center border border-primary/30 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-white/50">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div id="calculadora" className="scroll-mt-24">
        <section className="section-space">
          <div className="site-container">
            <div className="mb-9 grid gap-5 border-b border-border pb-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  Tu escenario
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                  Cuatro variables. Una primera decisión.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Usa valores mensuales y el costo efectivo de la hora del equipo que hoy ejecuta el proceso.
              </p>
            </div>

            <RoiCalculator />

            <div className="mt-6 grid gap-4 border-t border-border pt-6 md:grid-cols-3">
              {[
                ["Qué incluye", "Tiempo potencialmente recuperable y su equivalente económico."],
                ["Qué no incluye", "Implementación, herramientas, excepciones ni supervisión humana."],
                ["Cómo usarlo", "Compara procesos y prioriza el que combine volumen, valor y viabilidad."],
              ].map(([title, copy]) => (
                <div key={title} className="grid grid-cols-[20px_1fr] gap-3">
                  <Check className="mt-1 h-4 w-4 text-[hsl(var(--joe-green-dark))]" />
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <FinalCta title="Valida el ROI con tu proceso real." />
    </>
  );
}
