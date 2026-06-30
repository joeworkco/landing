import { APPOINTMENT_URL, integrations } from "@/config/marketing";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  CircleUserRound,
  Clock3,
  Copy,
  FileCheck2,
  Lightbulb,
  Mail,
  MessageCircle,
  RefreshCw,
  Search,
  Settings2,
  ShoppingBag,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FaqList, FinalCta, SectionIntro } from "./shared";
import WorkerRoster from "./worker-roster";

function SystemVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto w-full max-w-[560px]" aria-label="Trabajador IA conectado a sistemas empresariales">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_28px_70px_rgba(24,24,24,0.14)]">
        <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff6259]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#29c941]" />
          <div className="ml-3 flex h-7 flex-1 items-center rounded-full border border-border bg-white px-3 font-mono text-[10px] text-muted-foreground">
            app.joework.co/trabajadores
          </div>
        </div>
        <div className="grid min-h-[370px] grid-cols-[58px_1fr] bg-background">
          <div className="flex flex-col items-center gap-5 border-r border-border bg-white py-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"><Bot className="h-4 w-4" /></span>
            {[MessageCircle, ShoppingBag, FileCheck2, RefreshCw].map((Icon, index) => (
              <span key={index} className={`flex h-8 w-8 items-center justify-center rounded-lg ${index === 0 ? "bg-accent text-[hsl(var(--joe-green-dark))]" : "text-muted-foreground"}`}>
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Tu equipo IA</p>
                <p className="mt-1 text-xs text-muted-foreground">Operación comercial</p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-white" /> Ejecutando
              </span>
            </div>
            {[
              ["Consulta recibida por WhatsApp", "08:42"],
              ["Producto recomendado con contexto", "08:43"],
              ["Pedido creado en Shopify", "08:45"],
              ["Oportunidad actualizada en CRM", "08:45"],
            ].map(([label, time]) => (
              <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-border bg-white px-4 py-3.5 first:rounded-t-xl last:rounded-b-xl">
                <span className="text-xs font-semibold md:text-sm">{label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-8 hidden w-[270px] rotate-[-2deg] rounded-2xl border-2 border-[hsl(var(--joe-green))/0.3] bg-white p-5 shadow-[0_20px_45px_rgba(24,24,24,0.16)] sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white"><CircleUserRound className="h-6 w-6" /></span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Agente comercial</p>
            <p className="truncate text-xs text-muted-foreground">WhatsApp + Shopify + CRM</p>
          </div>
          <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-bold text-[hsl(var(--joe-green-dark))]">Activo</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
          <div><p className="font-mono text-[9px] text-muted-foreground">HOY</p><p className="mt-1 text-sm font-bold">14</p></div>
          <div><p className="font-mono text-[9px] text-muted-foreground">ESTADO</p><p className="mt-1 text-sm font-bold">Live</p></div>
          <div><p className="font-mono text-[9px] text-muted-foreground">HANDOFF</p><p className="mt-1 text-sm font-bold">Listo</p></div>
        </div>
      </div>
    </div>
  );
}

export default function HomeContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute -right-40 -top-56 h-[760px] w-[760px] rounded-full bg-primary/10 blur-3xl" />
        <div className="site-container relative grid min-h-[650px] gap-12 py-16 md:grid-cols-[.95fr_1.05fr] md:items-center md:py-20 lg:gap-16">
          <div className="hero-copy-reveal">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" /> Trabajadores IA conectados a procesos reales
            </p>
            <h1 className="max-w-3xl text-[clamp(3.25rem,5.3vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
              Aumenta tu <span className="text-primary">capacidad.</span>
              <span className="block">Sin más carga operativa.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Implementamos Agentes IA para que tu empresa vendas más, sea más eficaz y mejore constantemente con tus empleados y clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[10px] bg-primary px-6 text-base font-semibold text-white shadow-[var(--shadow-brand)] transition-colors hover:bg-[hsl(var(--joe-green-dark))]"
              >
                Agenda un diagnóstico IA
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/trabajadores-ia"
                className="inline-flex h-12 items-center justify-center rounded-[10px] border border-input bg-white px-6 text-base font-semibold shadow-sm transition-colors hover:border-foreground"
              >
                Ver trabajadores IA
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {["Gobernanza", "Observabilidad", "Privacidad"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[hsl(var(--joe-green-dark))]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <SystemVisual />
        </div>
        <div className="site-container relative pb-14 pt-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Conectado a tu operación</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {integrations.map((item) => <span key={item} className="text-base font-bold text-muted-foreground/55 md:text-lg">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--joe-green-dark))]">El problema no es la ambición</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
              Un equipo &quot;ocupado&quot; no avanza y le cuesta crear valor.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">
              Muchas empresas pierden ventas, tiempo y dinero porque sus procesos dependen de tareas manuales.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Leads que esperan demasiado por una respuesta.",
                description: "Cada minuto de demora enfría la oportunidad y reduce la probabilidad de conversión.",
                icon: MessageCircle,
              },
              {
                title: "Cotizaciones que dependen de una persona clave.",
                description: "El pipeline se frena cuando solo una persona conoce precios, reglas y excepciones.",
                icon: Clock3,
              },
              {
                title: "Seguimientos comerciales que no ocurren.",
                description: "Oportunidades activas salen del radar porque el equipo prioriza lo urgente.",
                icon: RefreshCw,
              },
              {
                title: "Datos dispersos entre chats, hojas y sistemas.",
                description: "Buscar contexto consume tiempo y hace que cada respuesta empiece casi desde cero.",
                icon: Search,
              },
              {
                title: "Procesos críticos sostenidos por copiar y pegar.",
                description: "La ejecución pierde velocidad y acumula errores difíciles de detectar.",
                icon: Copy,
              },
              {
                title: "IA usada individualmente, no como capacidad empresarial.",
                description: "El aprendizaje queda aislado y no se convierte en una ventaja para toda la organización.",
                icon: Users,
              },
            ].map(({ title, description, icon: Icon }) => (
              <article key={title} className="delight-card rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[hsl(var(--joe-green-dark))]">
                  <Icon className="h-6 w-6 stroke-[2.25]" />
                </span>
                <h3 className="mt-7 text-lg font-extrabold leading-6">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background section-space">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro title="El sistema JoeWork" copy="Tres capas que convierten IA aislada en una capacidad operativa medible." />
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {[
              ["01", "Trabajadores IA", "Agentes especializados que ejecutan tareas comerciales y operativas.", Bot, "/trabajadores-ia"],
              ["02", "Company Brain", "Conocimiento confiable para que humanos y agentes compartan contexto.", BrainCircuit, "/company-brain"],
              ["03", "Adopción práctica", "Gobernanza, capacitación y nuevos flujos de trabajo para sostener el cambio.", Users, "/consultoria-ia"],
            ].map(([number, title, copy, Icon, href]) => (
              <article key={String(title)} className="delight-step rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-[hsl(var(--joe-green-dark))] shadow-sm">
                    <Icon className="h-7 w-7 stroke-[2.25]" />
                  </span>
                  <span className="font-mono text-sm font-bold text-muted-foreground">{String(number)}</span>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold">{String(title)}</h3>
                <p className="mt-3 min-h-20 leading-7 text-muted-foreground">{String(copy)}</p>
                <Link href={String(href)} className="joe-link mt-4 inline-block">Explorar</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--joe-sunk))]">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro title="Trabajadores IA listos para objetivos de negocio" copy="No son chatbots genéricos. Cada trabajador tiene un proceso, herramientas, límites y resultado esperado." />
          </div>
          <div className="mt-14"><WorkerRoster /></div>
          <div className="mt-10 text-center"><Link href="/trabajadores-ia" className="joe-link">Ver los 10 trabajadores</Link></div>
        </div>
      </section>

      <section className="border-y border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="site-container grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1fr]">
          <div>
            <BrainCircuit className="h-8 w-8 text-primary" />
            <h2 className="mt-8 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
              El conocimiento de tu empresa debe trabajar para ti.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
              Company Brain captura, organiza y conecta documentos, conversaciones, SOPs y datos para que cada interacción mejore la siguiente.
            </p>
            <Link href="/company-brain" className="mt-7 inline-flex items-center font-semibold text-primary">
              Diseñar mi Company Brain <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
            {["Captura", "Recuperación", "Fuente de verdad", "Permisos", "Feedback loops", "Ejecución"].map((layer, index) => (
              <div key={layer} className="group relative min-h-[170px] overflow-hidden bg-[hsl(var(--joe-console))] p-6 transition-colors duration-200 hover:bg-[hsl(220_11%_12%)]">
                <span className="font-mono text-2xl font-semibold tracking-[-0.05em] text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="absolute bottom-6 left-6 right-6 text-xl font-extrabold leading-tight md:text-2xl">{layer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionIntro
            title="Adopción que cambia cómo trabaja la organización"
            copy="La IA no se adopta comprando más herramientas. Se adopta rediseñando decisiones, procesos y hábitos de trabajo."
          />
          <div className="border-t border-border">
            {[
              ["Coaching individual 1:1", "Sistemas personales, playbooks y automatización para líderes."],
              ["Transformación organizacional", "Diagnóstico, priorización por ROI, gobernanza y pilotos."],
              ["Capacitación y playbooks", "Prácticas concretas por área para convertir aprendizaje en ejecución."],
            ].map(([title, copy]) => (
              <div key={title} className="border-b border-border py-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{copy}</p>
              </div>
            ))}
            <Link href="/consultoria-ia" className="joe-link mt-6 inline-block">Explorar consultoría IA</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white section-space">
        <div className="site-container">
          <SectionIntro title="Qué cambia cuando la IA entra al flujo real" />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Vende más", "Responde, recupera y hace seguimiento con consistencia.", TrendingUp],
              ["Opera mejor", "Reduce tareas manuales, errores y reprocesos.", Settings2],
              ["Aprende más rápido", "Convierte interacciones en conocimiento reutilizable.", Lightbulb],
              ["Escala con control", "Aumenta capacidad sin inflar trabajo repetitivo.", Scale],
            ].map(([title, copy, Icon]) => (
              <div key={String(title)} className="delight-card bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[hsl(var(--joe-green-dark))]">
                  <Icon className="h-6 w-6 stroke-[2.25]" />
                </span>
                <h3 className="mt-7 text-xl font-bold">{String(title)}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{String(copy)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro title="De oportunidad a trabajador IA en cuatro semanas" copy="Un objetivo de implementación sujeto a alcance, accesos y disponibilidad del equipo." />
          <ol className="border-t border-border">
            {[
              ["Semana 1", "Diagnóstico y diseño", "Proceso, datos, responsables y resultado."],
              ["Semana 2", "Prototipo funcional", "Contexto, herramientas, reglas y tareas principales."],
              ["Semana 3", "Pruebas reales", "Excepciones, handoff, calidad y métricas."],
              ["Semana 4", "Go-live controlado", "Monitoreo, aprendizaje y plan de mejora."],
            ].map(([week, title, copy]) => (
              <li key={week} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[100px_1fr]">
                <span className="font-mono text-xs text-[hsl(var(--joe-green-dark))]">{week}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[hsl(var(--joe-console))] text-white shadow-[0_24px_60px_rgba(24,24,24,0.16)]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="flex flex-col justify-between border-b border-white/15 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">ROI desde el día uno</p>
                <h2 className="mt-6 max-w-lg text-4xl font-extrabold leading-[1.05] md:text-5xl">
                  Resultados que medimos desde el primer piloto
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-7 text-white/60">
                  Referencias objetivo. La línea base y el impacto esperado se acuerdan antes de implementar.
                </p>
              </div>
              <Link href="/recursos/calculadora-roi" className="mt-10 inline-flex items-center font-bold text-primary">
                Calcula el potencial de tu proceso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-px bg-white/15 sm:grid-cols-2">
              {[["+20%", "Conversión comercial"], ["+15%", "Recuperación de leads"], ["-50%", "Carga operativa"], ["4 semanas", "PoC objetivo"]].map(([value, label], index) => (
                <div key={label} className="group min-h-[230px] bg-[hsl(var(--joe-console))] p-8 transition-colors duration-200 hover:bg-[hsl(220_11%_12%)] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Objetivo de referencia</span>
                    <span className="font-mono text-xs text-white/30">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-12 text-5xl font-extrabold tracking-[-0.06em] text-primary transition-transform duration-300 group-hover:translate-x-1 md:text-6xl">{value}</p>
                  <p className="mt-3 text-sm font-bold text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionIntro title="Tres patrones que ya estamos resolviendo" copy="Casos anonimizados. El resultado final depende del volumen, el proceso y la calidad de los datos." />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              ["Ecommerce / retail", "Conversaciones dispersas y seguimiento manual.", "Agente comercial conectado a catálogo, pedidos y postventa.", MessageCircle],
              ["Textil / B2B", "Órdenes recibidas por correo en formatos distintos.", "Lectura, normalización y registro en sistemas internos.", Mail],
              ["Educación / servicios", "Interesados que preguntan y luego se enfrían.", "Calificación, seguimiento y generación de reuniones.", Clock3],
            ].map(([industry, problem, solution, Icon]) => (
              <article key={String(industry)} className="border-t-2 border-foreground pt-5">
                <Icon className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                <h3 className="mt-6 text-xl font-bold">{String(industry)}</h3>
                <p className="mt-4 text-sm font-semibold">Problema</p>
                <p className="mt-1 leading-7 text-muted-foreground">{String(problem)}</p>
                <p className="mt-4 text-sm font-semibold">Intervención</p>
                <p className="mt-1 leading-7 text-muted-foreground">{String(solution)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionIntro title="Preguntas frecuentes" />
          <FaqList />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
