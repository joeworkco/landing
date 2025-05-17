"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

function FooterSection() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <footer className="relative border-t bg-gray-100 dark:bg-black text-neutral-800 dark:text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Mantente Conectado
            </h2>
            <p className="mb-6 text-neutral-600 dark:text-muted-foreground">
              Únete a nuestro boletín para recibir las últimas actualizaciones y
              ofertas exclusivas.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="pr-12 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Suscribirse</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
              >
                Nosotros
              </Link>
              <Link
                href="/agency"
                className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
              >
                Servicios de Agencia
              </Link>
              <Link
                href="/pricing"
                className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
              >
                Precios
              </Link>
              <Link
                href="/contact"
                className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Contáctanos
            </h3>
            <address className="space-y-2 text-sm not-italic text-neutral-600 dark:text-neutral-300">
              <p>Calle Ficticia 123, Lima, Perú</p>
              <p>Teléfono: (+51) 987 654 321</p>
              <p>Email: hola@joework.co</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Síguenos
            </h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      asChild
                    >
                      <a href="#" aria-label="Facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      asChild
                    >
                      <a href="#" aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      asChild
                    >
                      <a href="#" aria-label="Instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      asChild
                    >
                      <a
                        href="https://linkedin.com/company/joeworkco"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conéctate en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={handleThemeChange}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-700"
              />
              <Moon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              <Label htmlFor="dark-mode" className="sr-only">
                Cambiar tema
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 dark:border-neutral-700 pt-8 text-center md:flex-row">
          <p className="text-sm text-neutral-500 dark:text-muted-foreground">
            © 2025 JoeWork.co. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms-of-service"
              className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
            >
              Términos de Servicio
            </Link>
            <Link
              href="#"
              className="block text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary dark:hover:text-primary"
            >
              Configuración de Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { FooterSection };
