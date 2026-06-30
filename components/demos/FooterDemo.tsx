import { navigation } from "@/config/marketing";
import Image from "next/image";
import Link from "next/link";

export function FooterDemo() {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/joework-lockup.png"
              alt="JoeWork"
              width={146}
              height={40}
            />
            <p className="serif-accent mt-5 max-w-sm text-xl text-muted-foreground">
              Trabajadores IA que ejecutan. Equipos humanos que deciden.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Oferta</h2>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-muted-foreground">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Contacto y legal</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@joework.co" className="hover:text-foreground">
                hello@joework.co
              </a>
              <Link href="/privacy-policy" className="hover:text-foreground">
                Política de privacidad
              </Link>
              <Link href="/terms-of-service" className="hover:text-foreground">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} JoeWork.co</span>
          <span>Hecho con cariño en LATAM.</span>
        </div>
      </div>
    </footer>
  );
}
