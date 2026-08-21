"use client";

import { Button } from "@/components/ui/button";
import {
  buildClaudeStatusCard,
  calculateClaudeProgress,
  normalizeCompletedClaudeSteps,
} from "@/lib/claude-guide";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Clipboard,
  Clock3,
  LifeBuoy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { claudeGuideSessions } from "./content";

const STORAGE_KEY = "joework-claude-en-marcha-progress-v1";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Fall through for browsers that expose Clipboard API but deny access.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard access is unavailable");
  }
}

export function ClaudeGuide() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        setCompleted(normalizeCompletedClaudeSteps(saved ? JSON.parse(saved) : []));
      } catch {
        setCompleted([]);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const progress = calculateClaudeProgress(completed);
  const statusCard = buildClaudeStatusCard(completed);

  const toggleStep = (step: number) => {
    setCompleted((current) => {
      const next = current.includes(step)
        ? current.filter((item) => item !== step)
        : [...current, step];
      const normalized = normalizeCompletedClaudeSteps(next);

      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      } catch {
        // The guide remains usable when browser storage is unavailable.
      }

      return normalized;
    });
  };

  const handleCopy = async (key: string, value: string) => {
    try {
      await copyText(value);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <>
      <nav
        aria-label="Progreso de Claude en Marcha"
        className="sticky top-[68px] z-30 border-b border-border bg-white/95 backdrop-blur"
      >
        <div className="site-container flex min-h-16 items-center gap-5 py-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-4 text-xs font-semibold">
              <span>{completed.length} de 10 pasos</span>
              <span aria-live="polite">{progress}%</span>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden bg-[hsl(var(--joe-sunk))]"
              role="progressbar"
              aria-label="Progreso de la guía"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full bg-primary transition-[width] duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <a
            href="#sesion-1"
            className="hidden text-sm font-bold text-[hsl(var(--joe-green-dark))] hover:text-foreground sm:block"
          >
            {progress === 0 ? "Empezar" : "Continuar"}
          </a>
        </div>
      </nav>

      <div className="site-container py-16 md:py-24">
        {claudeGuideSessions.map((session) => (
          <section
            id={`sesion-${session.number}`}
            key={session.number}
            className="scroll-mt-40 border-t border-border py-14 first:border-t-0 first:pt-0 md:py-20"
          >
            <div className="grid gap-8 lg:grid-cols-[.38fr_1fr] lg:gap-14">
              <header className="lg:sticky lg:top-40 lg:self-start">
                <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
                  Sesión {session.number} · 30 minutos
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  {session.title}
                </h2>
                <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                  {session.outcome}
                </p>
              </header>

              <div className="border-t border-border">
                {session.steps.map((step) => {
                  const isComplete = completed.includes(step.number);
                  const copyKey = `step-${step.number}`;

                  return (
                    <details
                      key={step.number}
                      id={`paso-${step.number}`}
                      className="group border-b border-border bg-background open:bg-white"
                      open={step.number === 1}
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-4 py-6 md:gap-6 md:py-8 [&::-webkit-details-marker]:hidden">
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center font-mono text-sm font-bold ${
                            isComplete
                              ? "bg-primary text-[hsl(var(--joe-console))]"
                              : "bg-[hsl(var(--joe-sunk))] text-muted-foreground"
                          }`}
                        >
                          {isComplete ? <Check className="h-5 w-5" /> : String(step.number).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xl font-extrabold md:text-2xl">{step.title}</span>
                          <span className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock3 className="h-3.5 w-3.5" />
                            {step.duration}
                          </span>
                        </span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                      </summary>

                      <div className="pb-8 pl-0 md:pl-16">
                        <p className="max-w-2xl text-lg font-semibold leading-8">{step.objective}</p>

                        <ol className="mt-6 border-t border-border">
                          {step.actions.map((action, index) => (
                            <li key={action} className="grid grid-cols-[28px_1fr] gap-3 border-b border-border py-4 text-sm leading-6 md:text-base">
                              <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">
                                {index + 1}
                              </span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ol>

                        {step.prompt && (
                          <div className="mt-6 bg-[hsl(var(--joe-console))] p-5 text-white md:p-6">
                            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                              <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-primary">
                                Prompt listo
                              </p>
                              <button
                                type="button"
                                onClick={() => handleCopy(copyKey, step.prompt ?? "")}
                                className="inline-flex min-h-10 items-center gap-2 border border-white/20 px-3 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
                                aria-label={`Copiar prompt del paso ${step.number}`}
                              >
                                {copied === copyKey ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                                {copied === copyKey ? "Copiado" : "Copiar"}
                              </button>
                            </div>
                            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-white/75">{step.prompt}</p>
                          </div>
                        )}

                        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                          <div>
                            <p className="flex items-center gap-2 text-sm font-extrabold">
                              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
                              Prueba antes de avanzar
                            </p>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{step.proof}</p>
                            {step.note && (
                              <p className="mt-3 max-w-2xl border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">
                                {step.note}
                              </p>
                            )}
                          </div>
                          <Button
                            type="button"
                            variant={isComplete ? "outline" : "default"}
                            onClick={() => toggleStep(step.number)}
                            aria-pressed={isComplete}
                            className="justify-self-start md:justify-self-end"
                          >
                            {isComplete ? "Completado" : "Listo, funcionó"}
                          </Button>
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section id="rescate" className="scroll-mt-28 border-y border-border bg-[hsl(var(--joe-console))] text-white">
        <div className="site-container grid gap-10 py-16 md:py-20 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <LifeBuoy className="h-9 w-9 text-primary" />
            <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">Si algo falla dos veces, cambia de modo.</h2>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              ["Mal configurado", "Vuelve a la ruta exacta de interfaz y prueba con un dato observable."],
              ["No existe en tu plan", "Usa la ruta gratuita. El resultado se conserva, cambia el mecanismo."],
              ["Bloqueado por tu empresa", "Anota qué debe habilitar sistemas y continúa por la alternativa manual."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-[hsl(var(--joe-console))] p-6">
                <h3 className="font-extrabold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="site-container grid gap-10 py-16 md:py-20 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">Para retomar</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Guarda una tarjeta de estado.</h2>
            <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
              Marca solo lo que probaste. Sirve si cierras el chat y vuelves otro día.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={() => handleCopy("status", statusCard)}
            >
              {copied === "status" ? <Check className="mr-2 h-4 w-4" /> : <Clipboard className="mr-2 h-4 w-4" />}
              {copied === "status" ? "Tarjeta copiada" : "Copiar tarjeta"}
            </Button>
          </div>
          <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap border border-border bg-[hsl(var(--joe-paper))] p-5 font-mono text-xs leading-6 md:p-7">
            {statusCard}
          </pre>
        </div>
      </section>
    </>
  );
}
