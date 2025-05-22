// © 2025 JoeWork.co
import { Lightbulb } from "lucide-react"; // Example Icon
import Link from "next/link";

const QuoteSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8 flex justify-center">
          <Lightbulb className="h-12 w-12 text-primary" />{" "}
          {/* Placeholder icon, similar to Eko Framework example */}
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
          Ahorra hasta un 10-60% de horas hombre con cero errores manuales.
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl text-balance">
          Clona los clics y el teclado de un analista en cualquier interfaz
          web/legacy sin APIs sin errores.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3s8zM9S_5FSCobJFVfQjijKHzCKivWKEK-Etuqoc-sXNRfMJobq4dygOb7uafwEAnw-Ts26ibo?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            Consultoría Gratuita
          </Link>
          <Link
            href="#use-cases-section" // Assuming this ID will exist on the page
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium text-accent-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            Casos de Uso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
