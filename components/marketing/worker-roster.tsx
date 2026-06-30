"use client";

import { workers } from "@/config/marketing";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const rosterMeta = [
  {
    initials: "VW",
    avatar: "bg-[#f0a400]",
    status: "Ejecutando",
    statusClass: "bg-accent text-[hsl(var(--joe-green-dark))]",
    dot: "bg-primary",
    lastSignal: "Ahora",
    mode: "Siempre activo",
    useCase: "/casos-de-uso/ventas-whatsapp",
  },
  {
    initials: "GR",
    avatar: "bg-[#ef5762]",
    status: "Programado",
    statusClass: "bg-[#fff1d8] text-[#9a6200]",
    dot: "bg-[#e8920a]",
    lastSignal: "Hace 8 min",
    mode: "On demand",
    useCase: "/casos-de-uso/atencion-cliente",
  },
  {
    initials: "CO",
    avatar: "bg-[#54cc0c]",
    status: "Listo",
    statusClass: "bg-[#e8efff] text-[#275fc7]",
    dot: "bg-[#2f6fed]",
    lastSignal: "Hoy 09:15",
    mode: "Por solicitud",
    useCase: "/casos-de-uso/cotizaciones",
  },
  {
    initials: "OC",
    avatar: "bg-[#7c5ce7]",
    status: "Disponible",
    statusClass: "bg-muted text-muted-foreground",
    dot: "bg-[#8c8c84]",
    lastSignal: "Ayer 17:40",
    mode: "Con cada email",
    useCase: "/casos-de-uso/ordenes-compra",
  },
] as const;

export default function WorkerRoster() {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * Math.min(420, railRef.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Ver trabajadores anteriores"
          className="roster-control"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Ver más trabajadores"
          className="roster-control"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={railRef}
        className="roster-rail -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 pt-1 md:mx-0 md:px-1"
        aria-label="Roster de trabajadores IA"
      >
        {workers.slice(0, 4).map((worker, index) => {
          const meta = rosterMeta[index];
          return (
            <article
              key={worker.slug}
              className={`agent-roster-card group w-[86vw] max-w-[390px] shrink-0 snap-center rounded-2xl bg-white p-6 md:w-[360px] ${
                index === 0
                  ? "border-2 border-[hsl(var(--joe-green))/0.3] ring-2 ring-primary/10"
                  : "border border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-extrabold text-white ring-2 ring-primary ring-offset-2 ring-offset-white ${meta.avatar}`}>
                  {meta.initials}
                  <span className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${meta.dot} ${index === 0 ? "status-pulse" : ""}`} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold leading-6">{worker.shortName}</h3>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{worker.idealFor}</p>
                </div>
                <span className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${meta.statusClass}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  {meta.status}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-4">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">Última señal</span>
                  <strong className="mt-1 block text-xs">{meta.lastSignal}</strong>
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">Modo</span>
                  <strong className="mt-1 block text-xs">{meta.mode}</strong>
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">Handoff</span>
                  <strong className="mt-1 block text-xs">Humano</strong>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                <Link href={meta.useCase} className="agent-primary-action">
                  Ver flujo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/trabajadores-ia" className="agent-secondary-action">
                  Conocer agente
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
