import { Check } from "lucide-react";
import { claudeCheckpointPrompts } from "./content";
import { CopyPrompt } from "./copy-prompt";

export function InstructionLevels() {
  const levels = [
    {
      number: "Nivel 1",
      title: "Tu perfil",
      description: "Aplica a todos tus chats, siempre. Lo que es verdad sin importar en qué estés trabajando.",
      examples: "quién eres · qué hace tu empresa · cómo quieres que te escriban",
      where: "Paso 3",
      accent: "border-l-[hsl(var(--joe-green-dark))]",
    },
    {
      number: "Nivel 2",
      title: "El proyecto",
      description: "Aplica solo dentro de ese proyecto. Lo que es verdad para un tipo de trabajo específico.",
      examples: "tu lista de precios · el formato de tus propuestas · tu propuesta ganada",
      where: "Pasos 5 y 6",
      accent: "border-l-amber-700",
    },
    {
      number: "Nivel 3",
      title: "El chat",
      description: "Aplica solo a esta conversación. Lo de hoy, lo que cambia cada vez.",
      examples: "este cliente · los números de este mes · este encargo",
      where: "Cada día",
      accent: "border-l-muted-foreground",
    },
  ];

  return (
    <section id="niveles" className="scroll-mt-40 border-t border-border py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">Cómo piensa Claude</p>
        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Los tres niveles</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          Dos minutos que te van a ahorrar meses. Meter algo en el nivel equivocado es el error más común y el más molesto de deshacer.
        </p>
      </div>

      <div className="mt-8 grid max-w-4xl gap-3">
        {levels.map((level) => (
          <article key={level.number} className={`grid gap-3 border border-l-4 border-border bg-white p-5 sm:grid-cols-[90px_1fr_auto] sm:gap-5 ${level.accent}`}>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground">{level.number}</p>
            <div>
              <h3 className="text-lg font-extrabold">{level.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground md:text-base">{level.description}</p>
              <p className="mt-3 font-mono text-xs leading-5 text-muted-foreground">{level.examples}</p>
            </div>
            <p className="self-start border border-border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-muted-foreground">{level.where}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 max-w-4xl border border-primary/35 border-l-4 border-l-primary bg-[hsl(var(--joe-green-soft))] p-5 md:p-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))]">La pregunta que decide</p>
        <p className="mt-2 text-lg font-extrabold">¿Esto va a seguir siendo verdad dentro de seis meses?</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">Si sí, va en el perfil o en el proyecto. Si no, va pegado en el chat.</p>
      </div>
    </section>
  );
}

export function SixMonthRule() {
  return (
    <section className="mt-8 border-t border-border pt-8">
      <h4 className="text-xl font-extrabold">La regla de los seis meses</h4>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
        Aquí es donde casi todo founder arruina su proyecto. Dentro de un proyecto hay dos tipos de información que no se deben mezclar.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="border border-primary/35 bg-[hsl(var(--joe-green-soft))] p-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))]">Lo permanente</p>
          <p className="mt-3 text-sm leading-6">No cambia entre un trabajo y otro. Claude lo trata como reglas que debe cumplir.</p>
          <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm leading-6 text-muted-foreground">
            <li>Tu voz y tu forma de escribir</li>
            <li>Tu lista de precios</li>
            <li>Tu propuesta ganada</li>
            <li>Tu posicionamiento</li>
          </ul>
          <p className="mt-4 border-t border-primary/25 pt-3 font-mono text-xs text-muted-foreground">Va en el proyecto</p>
        </article>
        <article className="border border-amber-700/35 bg-amber-50 p-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-amber-800">Lo de hoy</p>
          <p className="mt-3 text-sm leading-6">Cambia cada vez. Claude lo trata como material que debe procesar.</p>
          <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm leading-6 text-muted-foreground">
            <li>Las ventas de este mes</li>
            <li>Este cliente en particular</li>
            <li>Este encargo puntual</li>
            <li>Los datos de esta semana</li>
          </ul>
          <p className="mt-4 border-t border-amber-700/20 pt-3 font-mono text-xs text-muted-foreground">Va pegado en el chat</p>
        </article>
      </div>
      <p className="mt-5 text-lg font-extrabold">¿Esto va a seguir siendo verdad dentro de seis meses?</p>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
        Si subes las ventas de agosto al conocimiento del proyecto, esos números seguirán ahí en diciembre, contaminando en silencio cada conversación. Hazte la pregunta antes de subir cada archivo.
      </p>
    </section>
  );
}

type SessionCheckpointProps = {
  session: 1 | 2 | 3;
};

export function SessionCheckpoint({ session }: SessionCheckpointProps) {
  const checkpoint = {
    1: {
      tag: "Punto de guardado",
      title: "Sesión 1 completa",
      copy: "Puedes parar aquí. Lo que montaste ya funciona y no se pierde si cierras el chat.",
      items: [
        "Un archivo real, hecho por Claude con datos tuyos",
        "Un perfil que aplica a todos tus chats",
        "El criterio para saber dónde va cada instrucción",
      ],
      next: "Quedan siete pasos, unos sesenta minutos. La sesión 2 conecta Claude a tu calendario y a tus archivos.",
      prompt: claudeCheckpointPrompts.session1,
    },
    2: {
      tag: "Punto de guardado",
      title: "Sesión 2 completa",
      copy: "Segundo alto. Ya tienes la parte que la mayoría nunca llega a montar.",
      items: [
        "Claude conectado a tu trabajo real",
        "Un proyecto con tus archivos de referencia",
        "Instrucciones que salieron de una entrevista",
      ],
      next: "Quedan cuatro pasos, unos treinta minutos. La sesión 3 hace que todo funcione sin que tú estés.",
      prompt: claudeCheckpointPrompts.session2,
    },
    3: {
      tag: "Listo",
      title: "Terminaste",
      copy: "Noventa minutos bien invertidos. Esto es lo que tienes ahora y que hace una hora no existía.",
      items: [
        "Claude sabe quién eres, en todos tus chats",
        "Está conectado a tu calendario, correo o archivos",
        "Tiene un proyecto con tu contexto y tus reglas",
        "Te entrega algo útil sin que se lo pidas",
      ],
      next: "Vuelve en dos semanas y ajusta lo que no estés leyendo. Un reporte que no editas es un reporte que vas a dejar de abrir.",
      prompt: null,
    },
  }[session];

  return (
    <section className="mb-10 border border-primary/35 bg-[hsl(var(--joe-green-soft))] p-6 md:p-8">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--joe-green-dark))]">{checkpoint.tag}</p>
      <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">{checkpoint.title}</h2>
      <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{checkpoint.copy}</p>
      <ul className="mt-5 grid gap-2">
        {checkpoint.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 md:text-base">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[hsl(var(--joe-green-dark))]" />
            {item}
          </li>
        ))}
      </ul>
      {checkpoint.prompt && (
        <div className="max-w-3xl">
          <CopyPrompt label="Guarda esto para retomar otro día" value={checkpoint.prompt} />
        </div>
      )}
      <p className="mt-5 border-t border-primary/25 pt-4 text-sm leading-6 text-muted-foreground">{checkpoint.next}</p>
    </section>
  );
}
