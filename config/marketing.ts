import {
  BarChart3,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  Headphones,
  MessagesSquare,
  ReceiptText,
  RefreshCcw,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3s8zM9S_5FSCobJFVfQjijKHzCKivWKEK-Etuqoc-sXNRfMJobq4dygOb7uafwEAnw-Ts26ibo?gv=true";

export type Worker = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  idealFor: string;
  outcome: string;
  icon: LucideIcon;
};

export const workers: Worker[] = [
  {
    slug: "ventas-whatsapp-shopify",
    name: "Agente de ventas por WhatsApp + Shopify",
    shortName: "Ventas por WhatsApp",
    description:
      "Atiende, recomienda productos, valida intención, genera pedidos y mantiene el seguimiento.",
    idealFor: "Ecommerce, retail, moda, tecnología y alimentos.",
    outcome: "Más conversaciones convertidas y menos oportunidades perdidas.",
    icon: ShoppingBag,
  },
  {
    slug: "generacion-reuniones",
    name: "Agente de generación de reuniones",
    shortName: "Generación de reuniones",
    description:
      "Califica oportunidades, explica el servicio, maneja objeciones y agenda al equipo comercial.",
    idealFor: "Servicios B2B, consultoras, real estate, educación y software.",
    outcome: "Más reuniones calificadas y menor tiempo de respuesta.",
    icon: MessagesSquare,
  },
  {
    slug: "cotizador",
    name: "Agente cotizador",
    shortName: "Cotizaciones",
    description:
      "Entiende solicitudes, consulta reglas comerciales, genera propuestas y sigue cada oportunidad.",
    idealFor: "Manufactura, logística, construcción y distribución.",
    outcome: "Solicitudes respondidas con mayor velocidad y consistencia.",
    icon: ReceiptText,
  },
  {
    slug: "ordenes-compra",
    name: "Agente de órdenes de compra",
    shortName: "Órdenes de compra",
    description:
      "Lee correos y adjuntos, normaliza datos y registra órdenes en hojas o sistemas internos.",
    idealFor: "Empresas B2B, textil, distribución y manufactura.",
    outcome: "Menos errores y ciclos operativos más cortos.",
    icon: FileSpreadsheet,
  },
  {
    slug: "validacion-pagos",
    name: "Agente de validación de pagos",
    shortName: "Validación de pagos",
    description:
      "Cruza pagos, valida compras, actualiza pedidos y activa el flujo de despacho.",
    idealFor: "Ecommerce y retail con pagos manuales.",
    outcome: "Menor fricción post-compra y menos carga para finanzas.",
    icon: ClipboardCheck,
  },
  {
    slug: "recuperacion-leads",
    name: "Agente de atención y recuperación de leads",
    shortName: "Recuperación de leads",
    description:
      "Retoma conversaciones, resuelve dudas y escala oportunidades calientes a una persona.",
    idealFor: "Educación, turismo, salud, ecommerce y servicios.",
    outcome: "Más oportunidades recuperadas sin saturar al equipo.",
    icon: RefreshCcw,
  },
  {
    slug: "postventa-reviews",
    name: "Agente de postventa y reviews",
    shortName: "Postventa y reviews",
    description:
      "Acompaña al cliente, detecta problemas, solicita reseñas y genera alertas de satisfacción.",
    idealFor: "Ecommerce, turismo, educación, clínicas y servicios.",
    outcome: "Mejor experiencia, más reseñas y mayor recompra.",
    icon: Headphones,
  },
  {
    slug: "reportes-comerciales",
    name: "Agente de reportes comerciales",
    shortName: "Reportes comerciales",
    description:
      "Consolida CRM, WhatsApp, Sheets, email o Shopify en reportes ejecutivos accionables.",
    idealFor: "CEOs, gerencias comerciales y equipos de ventas.",
    outcome: "Más visibilidad y decisiones comerciales más rápidas.",
    icon: BarChart3,
  },
  {
    slug: "backoffice",
    name: "Agente de backoffice operativo",
    shortName: "Backoffice operativo",
    description:
      "Actualiza sistemas, llena formularios, mueve datos y ejecuta tareas repetitivas en interfaces web.",
    idealFor: "Operaciones, administración, finanzas y ventas internas.",
    outcome: "Horas recuperadas y menor tasa de errores manuales.",
    icon: Bot,
  },
  {
    slug: "onboarding-comercial",
    name: "Agente de onboarding comercial",
    shortName: "Onboarding comercial",
    description:
      "Entrena vendedores con pitch, objeciones, casos, políticas y conversaciones reales.",
    idealFor: "Empresas con equipos comerciales en crecimiento.",
    outcome: "Menor tiempo de ramp-up y ejecución más consistente.",
    icon: GraduationCap,
  },
];

export type UseCase = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  workflow: string[];
  outcomes: string[];
  systems: string[];
  icon: LucideIcon;
};

export const useCases: UseCase[] = [
  {
    slug: "ventas-whatsapp",
    title: "Ventas por WhatsApp",
    summary: "Convierte conversaciones en pedidos con seguimiento constante.",
    problem: "Los mensajes llegan a toda hora, se responden tarde y muchos leads se pierden sin seguimiento.",
    workflow: ["Recibe y entiende la consulta", "Consulta catálogo y políticas", "Recomienda y resuelve objeciones", "Crea el pedido o escala a ventas"],
    outcomes: ["Mayor velocidad de respuesta", "Más conversaciones atendidas", "Seguimiento consistente"],
    systems: ["WhatsApp", "Shopify", "CRM"],
    icon: MessagesSquare,
  },
  {
    slug: "ecommerce-shopify",
    title: "Ecommerce + Shopify",
    summary: "Conecta atención, pedidos, pagos y postventa en un solo flujo.",
    problem: "La atención y la operación viven separadas, obligando al equipo a mover información manualmente.",
    workflow: ["Consulta productos y stock", "Genera o actualiza pedidos", "Valida el siguiente paso", "Activa seguimiento post-compra"],
    outcomes: ["Menos fricción de compra", "Mayor capacidad de atención", "Operación conectada"],
    systems: ["Shopify", "WhatsApp", "Email"],
    icon: ShoppingBag,
  },
  {
    slug: "cotizaciones",
    title: "Cotizaciones",
    summary: "Responde solicitudes con reglas comerciales y seguimiento trazable.",
    problem: "Cotizar depende de personas clave y la oportunidad se enfría mientras espera.",
    workflow: ["Interpreta requerimientos", "Consulta reglas y precios", "Genera la propuesta", "Envía y hace seguimiento"],
    outcomes: ["Menor tiempo de cotización", "Cobertura de solicitudes", "Más trazabilidad"],
    systems: ["Email", "Sheets", "CRM"],
    icon: ReceiptText,
  },
  {
    slug: "validacion-pagos",
    title: "Validación de pagos",
    summary: "Cruza comprobantes y activa pedidos sin revisión manual constante.",
    problem: "Finanzas revisa capturas, transferencias y estados uno por uno antes de liberar cada pedido.",
    workflow: ["Recibe comprobante", "Contrasta monto y referencia", "Actualiza el pedido", "Escala inconsistencias"],
    outcomes: ["Menor carga operativa", "Despacho más rápido", "Excepciones controladas"],
    systems: ["Yape / Plin", "Pasarela", "Shopify"],
    icon: ClipboardCheck,
  },
  {
    slug: "ordenes-compra",
    title: "Órdenes de compra",
    summary: "Extrae, normaliza y registra órdenes recibidas por correo.",
    problem: "Cada formato de cliente requiere leer adjuntos y volver a digitar información en varios sistemas.",
    workflow: ["Monitorea el correo", "Lee documentos", "Normaliza campos", "Registra y confirma la orden"],
    outcomes: ["Menos digitación", "Menos errores", "Mayor velocidad de procesamiento"],
    systems: ["Email", "PDF / Excel", "ERP"],
    icon: FileSpreadsheet,
  },
  {
    slug: "crm-reportes",
    title: "CRM y reportes",
    summary: "Mantiene datos al día y convierte actividad dispersa en decisiones.",
    problem: "El CRM queda incompleto y la gerencia depende de reportes manuales que llegan tarde.",
    workflow: ["Consolida fuentes", "Normaliza actividad", "Actualiza el CRM", "Genera el resumen ejecutivo"],
    outcomes: ["Datos más completos", "Menos trabajo administrativo", "Decisiones más rápidas"],
    systems: ["CRM", "Sheets", "Email"],
    icon: BarChart3,
  },
  {
    slug: "atencion-cliente",
    title: "Atención al cliente",
    summary: "Resuelve consultas repetitivas y escala casos sensibles con contexto.",
    problem: "El equipo repite respuestas, busca información y pierde continuidad entre canales.",
    workflow: ["Identifica intención", "Recupera información aprobada", "Resuelve o solicita datos", "Escala con resumen completo"],
    outcomes: ["Respuesta más rápida", "Mayor consistencia", "Handoff humano limpio"],
    systems: ["WhatsApp", "Email", "Base de conocimiento"],
    icon: Headphones,
  },
  {
    slug: "onboarding-comercial",
    title: "Onboarding comercial",
    summary: "Entrena vendedores con conocimiento real y práctica contextual.",
    problem: "El ramp-up depende de acompañamiento informal y conocimiento que vive en personas clave.",
    workflow: ["Organiza pitch y políticas", "Simula objeciones", "Evalúa respuestas", "Refuerza brechas"],
    outcomes: ["Ramp-up más corto", "Pitch consistente", "Coaching escalable"],
    systems: ["Company Brain", "CRM", "Llamadas"],
    icon: GraduationCap,
  },
  {
    slug: "company-brain-ventas",
    title: "Company Brain para ventas",
    summary: "Convierte conversaciones y propuestas en inteligencia comercial reutilizable.",
    problem: "Las mejores objeciones, argumentos y aprendizajes quedan enterrados en llamadas y chats.",
    workflow: ["Captura conversaciones", "Clasifica señales", "Recupera conocimiento", "Alimenta agentes y playbooks"],
    outcomes: ["Mejor preparación", "Mensajes consistentes", "Aprendizaje acumulado"],
    systems: ["Meet", "CRM", "WhatsApp"],
    icon: BrainCircuit,
  },
  {
    slug: "company-brain-operaciones",
    title: "Company Brain para operaciones",
    summary: "Hace que procedimientos y excepciones estén disponibles al ejecutar.",
    problem: "Los SOPs se desactualizan y resolver excepciones depende de memoria individual.",
    workflow: ["Captura SOPs y decisiones", "Define fuentes de verdad", "Aplica permisos", "Conecta conocimiento al flujo"],
    outcomes: ["Menos dependencia individual", "Ejecución consistente", "Mejora continua"],
    systems: ["Documentos", "SOPs", "Sistemas internos"],
    icon: BookOpenCheck,
  },
];

export const navigation = [
  { href: "/trabajadores-ia", label: "Trabajadores IA" },
  { href: "/company-brain", label: "Company Brain" },
  { href: "/consultoria-ia", label: "Consultoría IA" },
  { href: "/casos-de-uso", label: "Casos de uso" },
  { href: "/recursos", label: "Recursos" },
];

export const integrations = ["WhatsApp", "Shopify", "CRM", "Sheets", "Email", "Sistemas internos"];

export const faqs = [
  {
    question: "¿Un trabajador IA reemplaza a mi equipo?",
    answer: "No. Aumenta la capacidad del equipo ejecutando tareas repetitivas y entregando mejor contexto. Las decisiones sensibles y las excepciones siguen bajo control humano.",
  },
  {
    question: "¿Necesito tener APIs disponibles?",
    answer: "No siempre. Podemos trabajar con APIs, documentos, correo, hojas de cálculo o interfaces web existentes, según el riesgo y la confiabilidad del proceso.",
  },
  {
    question: "¿Cuánto demora el primer trabajador IA?",
    answer: "El objetivo habitual es un PoC funcional en cuatro semanas, condicionado por el alcance, la disponibilidad de información y el acceso a los sistemas.",
  },
  {
    question: "¿Qué pasa si el agente no sabe responder?",
    answer: "Definimos límites, niveles de confianza y reglas de escalamiento para que pause y derive el caso a una persona con el contexto necesario.",
  },
  {
    question: "¿Qué es el Company Brain?",
    answer: "Es una capa de conocimiento que organiza fuentes, permisos, reglas y feedback para que humanos y trabajadores IA operen con contexto confiable.",
  },
  {
    question: "¿Cómo se mide el ROI?",
    answer: "Antes de implementar acordamos una línea base y métricas como conversión, tiempo ahorrado, errores, reuniones, pedidos o carga operativa eliminada.",
  },
];
