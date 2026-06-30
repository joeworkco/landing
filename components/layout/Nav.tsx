"use client";

import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL, navigation } from "@/config/marketing";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-[68px] items-center gap-7">
        <Link href="/" aria-label="JoeWork, inicio" className="shrink-0">
          <Image
            src="/brand/joework-lockup.png"
            alt="JoeWork"
            width={128}
            height={35}
            priority
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden lg:block">
          <Button asChild size="sm">
            <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
              Agenda diagnóstico
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegación móvil" className="site-container flex flex-col py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border py-3 text-base font-semibold last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
                Agenda diagnóstico
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
