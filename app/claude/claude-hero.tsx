import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  CalendarCheck2,
  Check,
  Clock3,
  FileCheck2,
  Laptop,
} from "lucide-react";
import { CLAUDE_GUIDE_MASTER_PROMPT } from "./content";
import { CopyPrompt } from "./copy-prompt";

function ExampleReport() {
  return (
    <div className="min-w-0 max-w-3xl" data-example-report>
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[.16em] text-white/45">
        Esto es lo que te llega el martes a las 7 de la mañana
      </p>
      <div className="overflow-hidden border border-white/15 bg-white text-[hsl(var(--joe-ink))] shadow-[0_18px_50px_rgba(0,0,0,.2)] dark:bg-[hsl(220_12%_11%)] dark:text-white">
        <div className="flex items-center gap-3 border-b border-border bg-[hsl(var(--joe-sunk))] px-5 py-3 dark:border-white/10 dark:bg-white/[.04]">
          <span className="flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <i key={dot} className="h-2 w-2 rounded-full bg-border dark:bg-white/20" />
            ))}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground dark:text-white/45">
            Borrador · tu bandeja de entrada
          </span>
        </div>
        <div className="p-5 md:p-7">
          <p className="text-lg font-extrabold">Tu día · martes 12 de agosto</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))] dark:text-primary">
                Lo único que importa hoy
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-white/65">
                La propuesta de <strong className="text-foreground dark:text-white">Andina Logística</strong> lleva nueve días sin respuesta. Es la más grande del trimestre.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))] dark:text-primary">
                Tu calendario
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-white/65">
                <strong className="text-foreground dark:text-white">09:00</strong> Demo con Grupo Sierra. No has abierto el brief.
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-white/65">
                <strong className="text-foreground dark:text-white">16:00</strong> Tu único bloque libre de dos horas esta semana.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))] dark:text-primary">
                Correo que no puede esperar
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-white/65">
                Carolina preguntó por los plazos el viernes. Sigue sin respuesta. La factura de Meridiano rebotó por segunda vez.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))] dark:text-primary">
                Lo que puedes ignorar
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-white/65">
                Los otros veintitrés correos. Ninguno tiene fecha límite esta semana.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
        No es un resumen. Es criterio: qué mirar primero y qué dejar pasar. Sale de tu calendario y tu correo reales, y en el paso 7 lo diseñas tú.
      </p>
    </div>
  );
}

export function ClaudeHero() {
  return (
    <header className="relative overflow-hidden border-b border-border bg-[hsl(var(--joe-console))] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="site-container relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-primary">
              Guía gratuita por JoeWork · actualizada agosto 2026
            </p>
            <h1 className="mt-6 max-w-4xl break-words text-[clamp(2.9rem,7vw,6.8rem)] font-extrabold leading-[.88] tracking-[-.065em]">
              Claude en marcha.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 md:text-base">
              Escrita por <a className="underline decoration-white/30 underline-offset-4 hover:text-primary" href="https://joework.co">JoeWork</a>, que implementa agentes IA en empresas de Latinoamérica y Estados Unidos.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              En tres sesiones cortas, Claude aprende cómo trabajas, se conecta a tu negocio y deja un reporte útil funcionando en horario.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-white/45">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />90 minutos</span>
              <span className="inline-flex items-center gap-2"><Laptop className="h-4 w-4 text-primary" />Mac o Windows</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />10 pasos</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />9 de 10 gratis</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Sin registro</span>
            </div>
          </div>

          <div className="mx-auto min-w-0 w-full max-w-xl overflow-hidden border border-white/15 bg-white/[.035] p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-white/40">Al terminar</p>
                <p className="mt-1 font-bold">Tres cosas son verdad</p>
              </div>
              <span className="font-mono text-xs font-bold text-primary">01 → 10</span>
            </div>
            <div className="divide-y divide-white/10">
              {[
                ["01", "Claude sabe quién eres", "Contexto y forma de trabajar", FileCheck2],
                ["02", "Está conectado a tu trabajo", "Calendario, correo o archivos", CalendarCheck2],
                ["03", "Algo útil pasa en horario", "Reporte automático o disparo manual", Clock3],
              ].map(([number, title, copy, Icon]) => (
                <div key={String(number)} className="grid grid-cols-[42px_1fr_28px] items-center gap-4 py-6">
                  <span className="font-mono text-sm font-bold text-primary">{String(number)}</span>
                  <div className="min-w-0">
                    <p className="font-bold">{String(title)}</p>
                    <p className="mt-1 text-sm text-white/45">{String(copy)}</p>
                  </div>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-5 text-sm leading-6 text-white/55">
              Un paso a la vez. No marques nada hasta tener una prueba observable.
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <ExampleReport />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="min-w-0 border border-primary/45 bg-white/[.04] p-5 md:p-7">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-primary">Recomendado</p>
            <h2 className="mt-3 text-2xl font-extrabold">Camino guiado</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:text-base">
              Claude conduce. Te hace una pregunta a la vez y no avanza hasta que cada paso funcione de verdad. Noventa minutos, en tres sesiones que puedes separar.
            </p>
            <CopyPrompt label="Pega esto en un chat nuevo" value={CLAUDE_GUIDE_MASTER_PROMPT} />
          </article>

          <article className="flex min-w-0 flex-col border border-white/15 bg-white/[.025] p-5 md:p-7">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-white/40">Alternativa</p>
            <h2 className="mt-3 text-2xl font-extrabold">Camino manual</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:text-base">
              Lees y ejecutas tú, a tu ritmo, en el orden que quieras. Cada paso trae su prompt listo para copiar y una forma concreta de comprobar que funcionó. Sirve si prefieres entender antes de hacer.
            </p>
            <Button asChild size="lg" className="mt-8 self-start">
              <a href="#paso-1" data-manual-start>
                Empezar por el paso 1
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </article>
        </div>
      </div>
    </header>
  );
}
