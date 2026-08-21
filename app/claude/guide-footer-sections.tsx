import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import {
  CLAUDE_GUIDE_DOWNLOAD_URL,
  CLAUDE_GUIDE_START_URL,
  CLAUDE_SKILL_PROMPT,
} from "./content";
import { CopyPrompt } from "./copy-prompt";

export function SkillInstall() {
  const steps = [
    "Descarga claude-en-marcha.zip.",
    "En Claude: Configuración → Personalizar → Skills.",
    "Botón + → Crear skill → Subir un skill.",
    "Súbelo y actívalo con el interruptor.",
  ];

  return (
    <section id="skill" className="scroll-mt-28 border-b border-border bg-[hsl(var(--joe-paper))]">
      <div className="site-container grid gap-10 py-16 md:py-20 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
            Para avanzados
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            La versión skill
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
            Si prefieres no depender de descargar archivos remotos, la guía existe como skill instalable. Se instala una vez, queda en tu cuenta y funciona sin conexión a nuestro sitio. Funciona en todos los planes, incluido el gratuito.
          </p>
          <Button asChild size="lg" className="mt-7">
            <a href={CLAUDE_GUIDE_DOWNLOAD_URL} download>
              <Download className="mr-2 h-4 w-4" />
              Descargar claude-en-marcha.zip
            </a>
          </Button>
        </div>

        <div className="border border-border bg-white p-5 md:p-8 dark:bg-[hsl(220_12%_11%)]">
          <h3 className="text-xl font-extrabold">Cómo se instala</h3>
          <ol className="mt-5 border-t border-border">
            {steps.map((item, index) => (
              <li key={item} className="grid grid-cols-[28px_1fr] gap-3 border-b border-border py-4 text-sm leading-6 md:text-base">
                <span className="font-mono text-xs font-bold text-[hsl(var(--joe-green-dark))]">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Necesitas la ejecución de código activada. Después escribe:
          </p>
          <CopyPrompt label="Después de instalarlo, escribe esto" value={CLAUDE_SKILL_PROMPT} />
        </div>
      </div>
    </section>
  );
}

export function GuideTransparency() {
  return (
    <section className="border-t border-border bg-white dark:bg-[hsl(220_12%_11%)]">
      <div className="site-container py-14 md:py-16">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--joe-green-dark))]">
            Transparencia
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Puedes leerlo todo antes de correrlo
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Nunca deberías pegar un enlace en Claude sin poder leer primero qué dice. Un archivo remoto puede darle instrucciones que tú no ves. Por eso los trece archivos de esta guía están publicados en texto plano, con su historial de cambios completo, para que compruebes que nada se modificó en silencio.
          </p>
          <p className="mt-4 font-semibold">Sin registro, sin correo, sin formulario.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href="https://github.com/joeworkco/landing/tree/main/public/claude/setup">
                Ver los archivos
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={CLAUDE_GUIDE_START_URL}>Leer el conductor</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
