import { Check } from "lucide-react";
import { claudeCheckpointPrompts } from "./content";
import { CopyPrompt } from "./copy-prompt";

const PEDAGOGY_ADAPTER_CSS = `
.jw-block-tokens{--ink:#0F1513;--ink-2:#37433E;--muted:#66736D;--line:#D2DBD5;--surface:#fff;--surface-2:#E6ECE7;--accent:#0A6B4F;--accent-soft:#E0EEE8;--accent-line:#9CC9B7;--signal:#A8600F;--signal-soft:#F5EADA;--signal-line:#DCBF93}
.dark .jw-block-tokens{--ink:#E7EEE9;--ink-2:#B4C2BC;--muted:#87948E;--line:#26302C;--surface:#131A17;--surface-2:#1A2320;--accent:#46C193;--accent-soft:#123328;--accent-line:#1E5744;--signal:#D9903F;--signal-soft:#2E2312;--signal-line:#5A4523}
`;

const INSTRUCTION_LEVELS_CSS = `
.jw-niv{--jw-ink:var(--ink,#0F1513);--jw-dim:var(--ink-2,#37433E);--jw-mut:var(--muted,#66736D);
  --jw-line:var(--line,#D2DBD5);--jw-surf:var(--surface,#fff);--jw-acc:var(--accent,#0A6B4F);
  --jw-accs:var(--accent-soft,#E0EEE8);--jw-accl:var(--accent-line,#9CC9B7);
  --jw-sig:var(--signal,#A8600F);--jw-sigs:var(--signal-soft,#F5EADA);--jw-sigl:var(--signal-line,#DCBF93);
  --jw-mono:"IBM Plex Mono",ui-monospace,monospace}
.jw-niv-stack{display:grid;gap:10px;margin-top:28px;max-width:760px}
.jw-niv-row{display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:start;
  background:var(--jw-surf);border:1px solid var(--jw-line);border-radius:12px;padding:18px 20px;
  border-left:4px solid var(--jw-line)}
.jw-niv-row[data-n="1"]{border-left-color:var(--jw-acc)}
.jw-niv-row[data-n="2"]{border-left-color:var(--jw-sig)}
.jw-niv-row[data-n="3"]{border-left-color:var(--jw-mut)}
.jw-niv-n{font-family:var(--jw-mono);font-size:11px;font-weight:600;color:var(--jw-mut);
  letter-spacing:.1em;padding-top:4px;white-space:nowrap}
.jw-niv-t{font-weight:700;font-size:18px;color:var(--jw-ink);margin:0 0 4px;line-height:1.25}
.jw-niv-d{font-size:15.5px;color:var(--jw-dim);margin:0;line-height:1.5}
.jw-niv-eg{font-family:var(--jw-mono);font-size:12.5px;color:var(--jw-mut);margin:9px 0 0;line-height:1.5}
.jw-niv-w{font-family:var(--jw-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;
  color:var(--jw-mut);border:1px solid var(--jw-line);border-radius:99px;padding:4px 11px;white-space:nowrap;margin-top:3px}
.jw-niv-rule{display:grid;gap:6px;margin-top:26px;max-width:760px;background:var(--jw-accs);
  border:1px solid var(--jw-accl);border-left:4px solid var(--jw-acc);border-radius:0 12px 12px 0;padding:18px 22px}
.jw-niv-rule b{font-family:var(--jw-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--jw-acc)}
.jw-niv-rule p{margin:0;font-size:17px;color:var(--jw-ink);line-height:1.5}
.jw-niv-rule span{font-size:15px;color:var(--jw-dim)}
@media (max-width:640px){
  .jw-niv-row{grid-template-columns:1fr;gap:8px}
  .jw-niv-w{justify-self:start}
}
`;

const SIX_MONTH_RULE_CSS = `
.jw-6m{--jw-ink:var(--ink,#0F1513);--jw-dim:var(--ink-2,#37433E);--jw-mut:var(--muted,#66736D);
  --jw-line:var(--line,#D2DBD5);--jw-surf:var(--surface-2,#E6ECE7);--jw-acc:var(--accent,#0A6B4F);
  --jw-accs:var(--accent-soft,#E0EEE8);--jw-accl:var(--accent-line,#9CC9B7);
  --jw-sig:var(--signal,#A8600F);--jw-sigs:var(--signal-soft,#F5EADA);--jw-sigl:var(--signal-line,#DCBF93);
  --jw-mono:"IBM Plex Mono",ui-monospace,monospace;margin-top:26px}
.jw-6m-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-top:14px}
.jw-6m-card{border-radius:12px;padding:18px 20px;border:1px solid}
.jw-6m-card--keep{background:var(--jw-accs);border-color:var(--jw-accl)}
.jw-6m-card--now{background:var(--jw-sigs);border-color:var(--jw-sigl)}
.jw-6m-h{font-family:var(--jw-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;
  font-weight:600;margin:0 0 10px}
.jw-6m-card--keep .jw-6m-h{color:var(--jw-acc)}
.jw-6m-card--now .jw-6m-h{color:var(--jw-sig)}
.jw-6m-card p{margin:0 0 8px;font-size:15.5px;color:var(--jw-ink);line-height:1.5}
.jw-6m-card ul{margin:0;padding-left:17px;display:grid;gap:4px}
.jw-6m-card li{font-size:14.5px;color:var(--jw-dim);line-height:1.45}
.jw-6m-where{font-family:var(--jw-mono);font-size:12px;color:var(--jw-mut);margin-top:12px;
  padding-top:10px;border-top:1px solid var(--jw-line)}
.jw-6m-q{margin-top:16px;font-size:17px;color:var(--jw-ink);font-weight:600;line-height:1.45}
.jw-6m-why{margin-top:8px;font-size:15.5px;color:var(--jw-dim);line-height:1.55}
`;

export function InstructionLevels() {
  return (
    <section id="niveles" className="sec wrap jw-niv jw-block-tokens scroll-mt-40 border-t border-border py-14 md:py-20">
      <style>{PEDAGOGY_ADAPTER_CSS}</style>
      <style>{INSTRUCTION_LEVELS_CSS}</style>
      <div className="col max-w-3xl">
        <p className="eyebrow font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">Cómo piensa Claude</p>
        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Los tres niveles</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">Antes de seguir, dos minutos que te van a ahorrar meses. Claude recibe instrucciones en tres niveles distintos, y meter algo en el nivel equivocado es el error más común y el más molesto de deshacer.</p>
      </div>

      <div className="jw-niv-stack">
        <div className="jw-niv-row" data-n="1">
          <div className="jw-niv-n">NIVEL 1</div>
          <div>
            <p className="jw-niv-t">Tu perfil</p>
            <p className="jw-niv-d">Aplica a todos tus chats, siempre. Lo que es verdad sin importar en qué estés trabajando.</p>
            <p className="jw-niv-eg">quién eres · qué hace tu empresa · cómo quieres que te escriban</p>
          </div>
          <div className="jw-niv-w">Paso 3</div>
        </div>

        <div className="jw-niv-row" data-n="2">
          <div className="jw-niv-n">NIVEL 2</div>
          <div>
            <p className="jw-niv-t">El proyecto</p>
            <p className="jw-niv-d">Aplica solo dentro de ese proyecto. Lo que es verdad para un tipo de trabajo específico.</p>
            <p className="jw-niv-eg">tu lista de precios · el formato de tus propuestas · tu propuesta ganada</p>
          </div>
          <div className="jw-niv-w">Pasos 5 y 6</div>
        </div>

        <div className="jw-niv-row" data-n="3">
          <div className="jw-niv-n">NIVEL 3</div>
          <div>
            <p className="jw-niv-t">El chat</p>
            <p className="jw-niv-d">Aplica solo a esta conversación. Lo de hoy, lo que cambia cada vez.</p>
            <p className="jw-niv-eg">este cliente · los números de este mes · este encargo</p>
          </div>
          <div className="jw-niv-w">Cada día</div>
        </div>
      </div>

      <div className="jw-niv-rule">
        <b>La pregunta que decide</b>
        <p>¿Esto va a seguir siendo verdad dentro de seis meses?</p>
        <span>Si sí, va en el perfil o en el proyecto. Si no, va pegado en el chat.</span>
      </div>
    </section>
  );
}

export function SixMonthRule() {
  return (
    <div className="jw-6m jw-block-tokens">
      <style>{SIX_MONTH_RULE_CSS}</style>
      <h4>La regla de los seis meses</h4>
      <p style={{ fontSize: "16.5px", lineHeight: 1.6 }}>Aquí es donde casi todo founder arruina su proyecto. Dentro de un proyecto hay dos tipos de información que no se deben mezclar.</p>

      <div className="jw-6m-grid">
        <div className="jw-6m-card jw-6m-card--keep">
          <p className="jw-6m-h">Lo permanente</p>
          <p>No cambia entre un trabajo y otro. Claude lo trata como reglas que debe cumplir.</p>
          <ul>
            <li>Tu voz y tu forma de escribir</li>
            <li>Tu lista de precios</li>
            <li>Tu propuesta ganada</li>
            <li>Tu posicionamiento</li>
          </ul>
          <p className="jw-6m-where">Va en el proyecto</p>
        </div>
        <div className="jw-6m-card jw-6m-card--now">
          <p className="jw-6m-h">Lo de hoy</p>
          <p>Cambia cada vez. Claude lo trata como material que debe procesar.</p>
          <ul>
            <li>Las ventas de este mes</li>
            <li>Este cliente en particular</li>
            <li>Este encargo puntual</li>
            <li>Los datos de esta semana</li>
          </ul>
          <p className="jw-6m-where">Va pegado en el chat</p>
        </div>
      </div>

      <p className="jw-6m-q">¿Esto va a seguir siendo verdad dentro de seis meses?</p>
      <p className="jw-6m-why">Si subes las ventas de agosto al conocimiento del proyecto, esos números van a seguir ahí en diciembre, contaminando en silencio cada conversación que abras. Vas a recibir respuestas basadas en datos viejos sin entender por qué. Hazte la pregunta antes de subir cada archivo.</p>
    </div>
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
