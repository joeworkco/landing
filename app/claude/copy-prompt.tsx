"use client";

import { Check, Clipboard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { copyText } from "./clipboard";

type CopyPromptProps = {
  label: string;
  value: string;
};

export function CopyPrompt({ label, value }: CopyPromptProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await copyText(value);
      setCopied(true);
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
      resetTimer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-5 overflow-hidden border border-white/15 bg-[hsl(var(--joe-console))] text-white">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-primary">
          {label}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          data-copy-prompt
          className="inline-flex min-h-10 items-center gap-2 border border-white/20 px-3 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
          aria-label={`Copiar ${label.toLowerCase()}`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <p className="whitespace-pre-line break-words p-4 font-mono text-xs leading-6 text-white/75 [overflow-wrap:anywhere] md:p-5">
        {value}
      </p>
    </div>
  );
}
