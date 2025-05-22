// © 2025 JoeWork.co
import Link from "next/link";

const AgencyQuoteSection = () => {
  return (
    <section className="py-20 md:py-32 bg-neutral-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8 flex justify-center">
          {/* Icon similar to the Eko Framework example - using a placeholder for now */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-12 w-12 text-purple-400"
          >
            <path
              fill="currentColor"
              d="M188.69 67.31a8 8 0 0 1 0 11.32l-72 72a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 11.32-11.32L112 134.69l67.31-67.32a8 8 0 0 1 11.38.04ZM224 128A96 96 0 1 1 128 32a96 96 0 0 1 96 96Zm-16 0a80 80 0 1 0-80 80a80 80 0 0 0 80-80Z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
          Ahorra hasta un 10-60% de horas hombre con cero errores manuales.
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-300 sm:text-xl md:text-2xl text-balance">
          Clona los clics y el teclado de un analista en cualquier interfaz
          web/legacy sin APIs sin errores.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3s8zM9S_5FSCobJFVfQjijKHzCKivWKEK-Etuqoc-sXNRfMJobq4dygOb7uafwEAnw-Ts26ibo?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Consultoría Gratuita
          </Link>
          <Link
            href="#use-cases-section" // Placeholder, update if a specific section ID is on agency page
            className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 px-8 py-3 text-base font-medium text-neutral-50 shadow-sm hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Casos de Uso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyQuoteSection;
