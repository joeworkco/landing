import { FinalCta } from "@/components/marketing/shared";
import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  CircleCheckBig,
  Clock3,
  DatabaseZap,
  FileText,
  KeyRound,
  Layers3,
  MessagesSquare,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Cómo crear un Company Brain",
  description:
    "Guía práctica para ordenar fuentes, permisos, recuperación, feedback y ejecución en un Company Brain.",
  path: "/recursos/como-crear-company-brain",
});

const layers = [
  {
    number: "01",
    name: "Captura",
    label: "Recolecta la materia prima",
    description:
      "Registra automáticamente transcripciones, conversaciones, documentos, SOPs y actividad del CRM. Lo que no se captura no puede convertirse en inteligencia acumulada.",
    icon: DatabaseZap,
  },
  {
    number: "02",
    name: "Recuperación",
    label: "Entrega contexto en el momento correcto",
    description:
      "Los humanos y agentes deben encontrar fragmentos relevantes durante una tarea, sin recorrer carpetas, chats o sistemas completos.",
    icon: Search,
  },
  {
    number: "03",
    name: "Fuente de verdad",
    label: "Define qué información manda",
    description:
      "Establece una jerarquía explícita entre datos vivos, documentos oficiales, aprobaciones humanas e historial cuando existen contradicciones.",
    icon: BookOpenCheck,
  },
  {
    number: "04",
    name: "Permisos",
    label: "Protege el contexto sensible",
    description:
      "Controla el acceso a información financiera, comercial, legal y de personas según el rol, la tarea y el nivel de riesgo.",
    icon: KeyRound,
  },
  {
    number: "05",
    name: "Feedback loops",
    label: "Convierte correcciones en aprendizaje",
    description:
      "Cada ajuste humano debe alimentar reglas, ejemplos y criterios de calidad para que el sistema mejore en lugar de repetir el mismo error.",
    icon: RefreshCcw,
  },
  {
    number: "06",
    name: "Ejecución",
    label: "Conecta conocimiento con resultados",
    description:
      "Los agentes usan el contexto para operar flujos reales, con responsables, métricas, escalamiento humano y resultados observables.",
    icon: Workflow,
  },
];

const sources = [
  { label: "Conversaciones", icon: MessagesSquare },
  { label: "CRM y datos vivos", icon: DatabaseZap },
  { label: "SOPs y documentos", icon: FileText },
  { label: "Decisiones humanas", icon: ShieldCheck },
];

const outputs = [
  "Biblioteca de objeciones",
  "Material de capacitación",
  "Señales de posicionamiento",
  "Ideas de contenido",
];

const checklist = [
  "Elegir un flujo de negocio con volumen, fricción y resultado medible.",
  "Inventariar las fuentes que hoy consulta una persona para ejecutar ese flujo.",
  "Definir cuál fuente prevalece cuando dos datos se contradicen.",
  "Asignar permisos por rol y diseñar el escalamiento para casos sensibles.",
  "Registrar correcciones humanas como datos de mejora del sistema.",
  "Conectar el conocimiento a una acción real y medir calidad, tiempo e impacto.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo crear un Company Brain",
  description:
    "Guía práctica para ordenar fuentes, permisos, recuperación, feedback y ejecución en un Company Brain.",
  inLanguage: "es",
  mainEntityOfPage: `${siteConfig.url}/recursos/como-crear-company-brain`,
  author: {
    "@type": "Organization",
    name: "JoeWork",
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: "JoeWork",
    url: siteConfig.url,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Recursos",
      item: `${siteConfig.url}/recursos`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cómo crear un Company Brain",
      item: `${siteConfig.url}/recursos/como-crear-company-brain`,
    },
  ],
};

export default function CompanyBrainGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="site-container relative py-14 md:py-24">
            <Link
              href="/recursos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-primary"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Recursos
            </Link>

            <div className="mt-12 grid gap-14 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-primary">
                  Guía práctica · Company Brain
                </p>
                <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-7xl">
                  Cómo crear un cerebro que trabaje para toda tu empresa.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                  Ordena fuentes, permisos, recuperación y feedback para que humanos y agentes IA operen con el mismo contexto confiable.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-white/40">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    Lectura de 6 minutos
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Layers3 className="h-4 w-4 text-primary" />
                    6 capas de arquitectura
                  </span>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href="#arquitectura">
                      Ver las seis capas
                      <ArrowDown className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white hover:text-foreground"
                  >
                    <Link href="/company-brain">
                      Conocer el servicio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-x-12 inset-y-0 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative border border-white/15 bg-white/[0.04] p-5 md:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/45">Sistema central</p>
                      <p className="mt-1 font-bold">Inteligencia organizacional</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Aprendiendo
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-5">
                    {sources.map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-2 border border-white/10 bg-black/15 p-3 text-xs text-white/65">
                        <Icon className="h-4 w-4 text-primary" />
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="relative flex items-center justify-center py-6">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                    <div className="relative grid h-32 w-32 place-items-center rounded-full border border-primary/50 bg-[hsl(var(--joe-console))] shadow-[0_0_60px_rgba(84,204,12,.16)]">
                      <div className="grid h-20 w-20 place-items-center rounded-full bg-primary text-[hsl(var(--joe-console))]">
                        <BrainCircuit className="h-9 w-9" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 text-center">
                    {["Contexto", "Control", "Ejecución"].map((item) => (
                      <div key={item} className="bg-[hsl(var(--joe-console))] px-2 py-3 text-[11px] font-semibold text-white/60">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav
          aria-label="Contenido de la guía"
          className="border-b border-border bg-white/95 md:sticky md:top-[68px] md:z-30"
        >
          <div className="site-container overflow-x-auto">
            <div className="flex min-w-max items-center gap-1 py-3">
              <span className="mr-4 hidden font-mono text-[9px] font-semibold uppercase tracking-[.14em] text-muted-foreground md:inline">
                En esta guía
              </span>
              {[
                ["Principios", "#principios"],
                ["6 capas", "#arquitectura"],
                ["Compounding", "#compounding"],
                ["Coordinación", "#coordinacion"],
                ["Implementación", "#implementacion"],
              ].map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex min-h-10 items-center gap-2 px-3 text-xs font-bold transition-colors hover:bg-[hsl(var(--joe-green-soft))] hover:text-[hsl(var(--joe-green-dark))]"
                >
                  <span className="font-mono text-[9px] text-[hsl(var(--joe-green-dark))]">0{index + 1}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section id="principios" className="scroll-mt-36 border-b border-border">
          <div className="site-container py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  01 · Cerebro único
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                  De herramientas aisladas a inteligencia conectada.
                </h2>
              </div>
              <div className="max-w-3xl lg:pt-8">
                <p className="text-xl leading-9 text-foreground">
                  Una empresa nativa de IA no acumula copilotos y agentes independientes. Construye un sistema central que conecta conversaciones, CRM, documentos, código y decisiones para alimentar resultados coherentes.
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  El valor no está en almacenar más información. Está en hacer que el contexto correcto aparezca durante una tarea y permita actuar con criterio, permisos y trazabilidad.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Centraliza",
                  copy: "Conecta fuentes y herramientas alrededor de un contexto compartido.",
                  icon: BrainCircuit,
                },
                {
                  number: "02",
                  title: "Capitaliza",
                  copy: "Convierte cada interacción y corrección en conocimiento reutilizable.",
                  icon: Sparkles,
                },
                {
                  number: "03",
                  title: "Coordina",
                  copy: "Entrega contexto a humanos y agentes según tarea, permisos y riesgo.",
                  icon: Network,
                },
              ].map(({ number, title, copy, icon: Icon }) => (
                <div key={number} className="bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[hsl(var(--joe-green-dark))]" />
                    <span className="font-mono text-xs font-bold text-muted-foreground">{number}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="arquitectura" className="section-space scroll-mt-36 bg-white">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  02 · Arquitectura de ejecución
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] md:text-6xl">
                  Seis capas. En este orden.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
                Cada nivel depende del anterior. Saltar directamente a agentes que ejecutan sin captura, verdad o permisos produce demos vistosas y sistemas frágiles.
              </p>
            </div>

            <div className="mt-14 border-t border-border">
              {layers.map(({ number, name, label, description, icon: Icon }) => (
                <section
                  key={number}
                  className="group grid gap-5 border-b border-border py-8 md:grid-cols-[72px_64px_.7fr_1.3fr] md:items-start md:gap-7 md:py-10"
                >
                  <span className="font-mono text-xl font-bold text-[hsl(var(--joe-green-dark))]">{number}</span>
                  <div className="grid h-12 w-12 place-items-center bg-[hsl(var(--joe-green-soft))] text-[hsl(var(--joe-green-dark))] transition-colors group-hover:bg-primary group-hover:text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold">{name}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">{description}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="compounding" className="section-space scroll-mt-36 bg-[hsl(var(--joe-paper))]">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  03 · Interés compuesto
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] md:text-6xl">
                  El conocimiento gana valor cuando se reutiliza.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                  Capturar y normalizar desde el primer día crea un efecto acumulativo: cada conversación, decisión y corrección mejora el contexto disponible para el siguiente flujo.
                </p>
              </div>

              <div className="border border-border bg-white p-5 md:p-8">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">Una entrada</p>
                    <p className="mt-1 font-bold">Transcripción de llamada comercial</p>
                  </div>
                  <MessagesSquare className="h-6 w-6 text-[hsl(var(--joe-green-dark))]" />
                </div>
                <div className="flex justify-center py-4">
                  <ArrowDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {outputs.map((output, index) => (
                    <div key={output} className="flex min-h-24 items-start gap-3 bg-[hsl(var(--joe-paper))] p-4">
                      <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">0{index + 1}</span>
                      <span className="text-sm font-bold leading-6">{output}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                  <Sparkles className="h-5 w-5 shrink-0 text-[hsl(var(--joe-green-dark))]" />
                  <p><strong className="text-foreground">Principio 4:1:</strong> diseñar cada entrada para producir múltiples activos útiles, no prometer un retorno financiero fijo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coordinacion" className="section-space scroll-mt-36 bg-[hsl(var(--joe-console))] text-white">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-primary">
                  04 · Coordinación
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] md:text-6xl">
                  El cerebro coordina. Humanos y agentes deciden y ejecutan.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                  La inteligencia interna conecta decisiones entre equipos y automatiza flujos diarios sin sacar a las personas del control.
                </p>
              </div>

              <div className="grid content-start gap-px bg-white/10 sm:grid-cols-2">
                {[
                  { label: "Entrada", value: "Señal del cliente", icon: MessagesSquare },
                  { label: "Contexto", value: "Company Brain recupera reglas y datos", icon: BrainCircuit },
                  { label: "Decisión", value: "Agente propone o actúa según permisos", icon: Target },
                  { label: "Control", value: "Humano revisa excepciones y mejora reglas", icon: ShieldCheck },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="min-h-44 bg-[hsl(var(--joe-console))] p-6 md:p-8">
                    <Icon className="h-6 w-6 text-primary" />
                    <p className="mt-8 font-mono text-[10px] uppercase tracking-[.16em] text-white/40">{label}</p>
                    <p className="mt-2 max-w-xs font-bold leading-6">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="implementacion" className="section-space scroll-mt-36">
          <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                05 · Primera implementación
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] md:text-5xl">
                Empieza por un flujo, no por toda la empresa.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                El camino más rápido es demostrar valor en un proceso concreto y usar lo aprendido para ampliar el sistema.
              </p>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3 bg-[hsl(var(--joe-green-soft))] p-4 text-sm font-semibold">
                <CircleCheckBig className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                Resultado: un primer flujo medible, gobernado y listo para mejorar.
              </div>
              <ol className="border-t border-border">
              {checklist.map((item, index) => (
                <li key={item} className="grid grid-cols-[36px_1fr] gap-4 border-b border-border py-5 md:py-6">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[hsl(var(--joe-green-soft))] text-[hsl(var(--joe-green-dark))]">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">Paso {index + 1}</p>
                    <p className="mt-1 text-base font-semibold leading-7 md:text-lg">{item}</p>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white">
          <div className="site-container grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex gap-4">
              <Network className="mt-1 h-7 w-7 shrink-0 text-[hsl(var(--joe-green-dark))]" />
              <div>
                <h2 className="text-2xl font-extrabold">¿Quieres diseñar la arquitectura para tu empresa?</h2>
                <p className="mt-2 leading-7 text-muted-foreground">
                  Mapeamos fuentes, reglas, permisos, agentes y el primer flujo medible.
                </p>
              </div>
            </div>
            <Button asChild size="lg">
              <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                Agenda un diagnóstico
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </article>

      <FinalCta
        title="Convierte conocimiento disperso en capacidad acumulada."
        copy="Diseña un Company Brain que conecte contexto, control y ejecución en un primer flujo de negocio."
      />
    </>
  );
}
