"use client";

import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { calculateRoi } from "@/lib/roi-calculator";
import { ArrowUpRight, Calculator } from "lucide-react";
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
  { key: "monthlyTasks", label: "Tareas al mes", min: 0, max: 1000000, step: 1 },
  { key: "minutesPerTask", label: "Minutos por tarea", min: 0, max: 1440, step: 0.5 },
  { key: "hourlyCost", label: "Costo por hora (USD)", min: 0, max: 10000, step: 0.5 },
  { key: "automatablePercentage", label: "Porcentaje automatizable", min: 0, max: 100, step: 1 },
] as const;

type FormState = Record<(typeof fields)[number]["key"], number>;

export default function RoiCalculator() {
  const [values, setValues] = useState<FormState>({
    monthlyTasks: 1200,
    minutesPerTask: 5,
    hourlyCost: 12,
    automatablePercentage: 60,
  });
  const result = useMemo(() => calculateRoi(values), [values]);

  return (
    <div className="grid border border-border bg-white lg:grid-cols-[.9fr_1.1fr]">
      <form className="border-b border-border p-6 lg:border-b-0 lg:border-r lg:p-8" onSubmit={(event) => event.preventDefault()}>
        <div className="flex items-center gap-3">
          <Calculator className="h-5 w-5 text-[hsl(var(--joe-green-dark))]" />
          <h2 className="text-xl font-bold">Datos del proceso</h2>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="text-sm font-semibold">{field.label}</span>
              <input
                type="number"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.key]}
                onChange={(event) => {
                  const parsed = event.currentTarget.valueAsNumber;
                  const next = Number.isFinite(parsed) ? Math.min(field.max, Math.max(field.min, parsed)) : 0;
                  setValues((current) => ({ ...current, [field.key]: next }));
                }}
                className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
          ))}
        </div>
      </form>

      <div className="bg-[hsl(var(--joe-console))] p-6 text-white lg:p-8" aria-live="polite">
        <h2 className="text-xl font-bold">Potencial estimado</h2>
        <div className="mt-7 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
          {[
            ["Horas actuales / mes", numberFormat.format(result.currentHours)],
            ["Horas recuperables / mes", numberFormat.format(result.recoverableHours)],
            ["Costo recuperable / mes", moneyFormat.format(result.monthlyRecoverableCost)],
            ["Costo recuperable / año", moneyFormat.format(result.annualRecoverableCost)],
          ].map(([label, value]) => (
            <div key={label} className="bg-[hsl(var(--joe-console))] p-5">
              <p className="text-xs text-white/55">{label}</p>
              <p className="mt-3 text-2xl font-extrabold text-primary">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">
          <p><strong className="text-white/75">Fórmula:</strong> tareas × minutos ÷ 60 × porcentaje automatizable × costo por hora.</p>
          <p className="mt-2">Esta estimación no incluye costos de implementación, excepciones ni supervisión humana.</p>
        </div>
        <Button asChild className="mt-6">
          <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
            Validar este escenario
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
