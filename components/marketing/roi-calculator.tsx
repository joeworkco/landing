"use client";

import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { calculateRoi } from "@/lib/roi-calculator";
import {
  ArrowRight,
  ArrowUpRight,
  CircleDollarSign,
  Clock3,
  ListChecks,
  Percent,
  RotateCcw,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";

const numberFormat = new Intl.NumberFormat("es-PE", {
  maximumFractionDigits: 1,
});

const moneyFormat = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const fields = [
  {
    key: "monthlyTasks",
    label: "Tareas al mes",
    hint: "Volumen total del proceso",
    min: 0,
    max: 1000000,
    step: 1,
    icon: ListChecks,
    suffix: "tareas",
  },
  {
    key: "minutesPerTask",
    label: "Minutos por tarea",
    hint: "Tiempo promedio actual",
    min: 0,
    max: 1440,
    step: 0.5,
    icon: Clock3,
    suffix: "min",
  },
  {
    key: "hourlyCost",
    label: "Costo por hora",
    hint: "Costo efectivo del equipo",
    min: 0,
    max: 10000,
    step: 0.5,
    icon: CircleDollarSign,
    suffix: "USD",
  },
  {
    key: "automatablePercentage",
    label: "Porcentaje automatizable",
    hint: "Parte viable sin intervención constante",
    min: 0,
    max: 100,
    step: 1,
    icon: Percent,
    suffix: "%",
  },
] as const;

type FormState = Record<(typeof fields)[number]["key"], number>;

const initialValues: FormState = {
  monthlyTasks: 1200,
  minutesPerTask: 5,
  hourlyCost: 12,
  automatablePercentage: 60,
};

export default function RoiCalculator() {
  const [values, setValues] = useState<FormState>(initialValues);
  const result = useMemo(() => calculateRoi(values), [values]);
  const recoveredDays = result.recoverableHours / 8;

  return (
    <div className="overflow-hidden border border-border bg-white shadow-[0_24px_70px_rgba(24,24,24,.08)] lg:grid lg:grid-cols-[.9fr_1.1fr]">
      <form
        className="border-b border-border lg:border-b-0 lg:border-r"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex items-center justify-between border-b border-border p-5 md:p-7">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
              Entrada
            </p>
            <h3 className="mt-1 text-xl font-extrabold">Datos del proceso</h3>
          </div>
          <button
            type="button"
            onClick={() => setValues(initialValues)}
            className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar
          </button>
        </div>

        <div className="divide-y divide-border">
          {fields.map((field) => {
            const Icon = field.icon;
            return (
              <label key={field.key} className="grid gap-4 p-5 md:grid-cols-[1fr_150px] md:items-center md:p-7">
                <span className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-[hsl(var(--joe-green-soft))] text-[hsl(var(--joe-green-dark))]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold">{field.label}</span>
                    <span className="mt-1 block text-sm leading-5 text-muted-foreground">{field.hint}</span>
                  </span>
                </span>
                <span className="relative block">
                  <input
                    type="number"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={values[field.key]}
                    onChange={(event) => {
                      const parsed = event.currentTarget.valueAsNumber;
                      const next = Number.isFinite(parsed)
                        ? Math.min(field.max, Math.max(field.min, parsed))
                        : 0;
                      setValues((current) => ({ ...current, [field.key]: next }));
                    }}
                    className="h-14 w-full border border-input bg-[hsl(var(--joe-paper))] px-4 pr-16 text-right text-lg font-extrabold tabular-nums focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] font-semibold uppercase text-muted-foreground">
                    {field.suffix}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </form>

      <section className="relative overflow-hidden bg-[hsl(var(--joe-console))] p-5 text-white md:p-8 lg:p-9" aria-live="polite">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[42px] border-primary/[0.06]" />
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-primary">
                Salida estimada
              </p>
              <h3 className="mt-1 text-xl font-extrabold">Capacidad recuperable</h3>
            </div>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>

          <div className="py-9">
            <p className="text-sm font-semibold text-white/45">Costo recuperable al año</p>
            <p className="mt-3 text-5xl font-extrabold leading-none text-primary tabular-nums sm:text-6xl">
              {moneyFormat.format(result.annualRecoverableCost)}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <span><strong className="text-white">{numberFormat.format(result.recoverableHours)}</strong> horas / mes</span>
              <span><strong className="text-white">{numberFormat.format(recoveredDays)}</strong> días de trabajo / mes</span>
            </div>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["Horas actuales", numberFormat.format(result.currentHours), "/ mes"],
              ["Horas recuperables", numberFormat.format(result.recoverableHours), "/ mes"],
              ["Costo recuperable", moneyFormat.format(result.monthlyRecoverableCost), "/ mes"],
            ].map(([label, value, suffix]) => (
              <div key={label} className="bg-[hsl(var(--joe-console))] p-4 md:p-5">
                <p className="text-[11px] leading-4 text-white/45">{label}</p>
                <p className="mt-3 text-2xl font-extrabold text-white tabular-nums">{value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.1em] text-white/35">{suffix}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-6">
            <div className="grid grid-cols-[1fr_auto] gap-5">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-white/35">Fórmula visible</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Tareas × minutos ÷ 60 × porcentaje automatizable × costo por hora.
                </p>
              </div>
              <ArrowRight className="mt-1 hidden h-5 w-5 text-primary sm:block" />
            </div>
            <p className="mt-3 text-xs leading-5 text-white/35">
              Estimación sin costos de implementación, excepciones ni supervisión humana.
            </p>
          </div>

          <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
            <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
              Validar este escenario
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
