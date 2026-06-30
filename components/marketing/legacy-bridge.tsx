import { Button } from "@/components/ui/button";
import { APPOINTMENT_URL } from "@/config/marketing";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function LegacyBridge({
  title,
  copy,
  destination,
  destinationLabel,
}: {
  title: string;
  copy: string;
  destination: string;
  destinationLabel: string;
}) {
  return (
    <section className="site-container flex min-h-[68vh] items-center py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-xs text-[hsl(var(--joe-green-dark))]">JOEWORK ACTUALIZADO</p>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={destination}>
              {destinationLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
              Agenda diagnóstico
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
