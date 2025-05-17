"use client"; // Make this a Client Component

import { FaqSection } from "@/components/ui/faq"; // Adjusted import path
import { useRouter } from "next/navigation"; // Import useRouter

// Using the Spanish FAQ data
const JOEWORK_FAQS = [
  {
    question: "¿Cuánto dura la auditoría?",
    answer: "La auditoría inicial es gratuita y toma 1-2 días hábiles.",
  },
  {
    question: "¿Qué incluye el PoC?",
    answer:
      "Automatizamos un flujo crítico de tu negocio para que veas resultados reales antes de avanzar.",
  },
  {
    question: "¿Puedo escalar a más procesos?",
    answer:
      "Sí, tras el PoC, automatizamos tantos flujos como necesites, a medida.",
  },
  {
    question: "¿Ofrecen soporte continuo?",
    answer:
      "Sí, nuestro equipo brinda soporte y mantenimiento mensual para asegurar la continuidad.",
  },
];

export function FaqSectionDemo() {
  const router = useRouter(); // Initialize useRouter

  const handleContact = () => {
    router.push("/contact"); // Navigate to /contact page
  };

  return (
    <FaqSection
      title="Preguntas Frecuentes"
      description="Todo lo que necesitas saber sobre nuestros servicios de automatización con IA"
      items={JOEWORK_FAQS}
      contactInfo={{
        title: "¿Aún tienes preguntas?",
        description: "Estamos aquí para ayudarte",
        buttonText: "Contactar a Soporte",
        onContact: handleContact, // Use the new handler
      }}
    />
  );
}
