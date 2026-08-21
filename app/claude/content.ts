export type ClaudeGuideStep = {
  number: number;
  title: string;
  duration: string;
  objective: string;
  actions: string[];
  proof: string;
  prompt?: string;
  note?: string;
};

export type ClaudeGuideSession = {
  number: number;
  title: string;
  outcome: string;
  steps: ClaudeGuideStep[];
};

export const CLAUDE_GUIDE_START_URL =
  "https://joework.co/claude/guia/inicio.md";

export const CLAUDE_GUIDE_DOWNLOAD_URL =
  "https://joework.co/claude/descargas/claude-en-marcha.zip";

export const CLAUDE_SKILL_PROMPT =
  "Usa el skill Claude en Marcha y ponme en marcha.";

export const CLAUDE_GUIDE_MASTER_PROMPT =
  `Lee ${CLAUDE_GUIDE_START_URL} y ponme en marcha.`;

export const claudeCheckpointPrompts = {
  session1: `Lee ${CLAUDE_GUIDE_START_URL} y continúa desde el paso 4.
Ya tengo hechos el diagnóstico, el primer entregable y mi perfil.`,
  session2: `Lee ${CLAUDE_GUIDE_START_URL} y continúa desde el paso 7.
Ya tengo conectores, proyecto e instrucciones del proyecto.`,
} as const;

export const claudeGuideSessions: ClaudeGuideSession[] = [
  {
    number: 1,
    title: "El primer resultado",
    outcome: "Sales con un archivo útil y un Claude que ya entiende cómo trabajas.",
    steps: [
      {
        number: 1,
        title: "Diagnóstico",
        duration: "5 min",
        objective: "Saber desde dónde empiezas sin repetir trabajo ni asumir cómo está tu cuenta.",
        actions: [
          "Identifica tu plan: Gratis, Pro, Max, Team o Enterprise.",
          "Confirma si estás en la app de escritorio, navegador o teléfono.",
          "Revisa si ya tienes instrucciones personales, conectores o proyectos.",
          "Si estás en el teléfono, continúa desde un computador.",
        ],
        proof: "Puedes resumir en una frase tu plan, dispositivo y qué está conectado hoy.",
        prompt: `Antes de configurar nada, ayúdame a diagnosticar mi punto de partida. Pregúntame en un solo mensaje: qué plan de Claude tengo, dónde lo estoy usando, si ya escribí instrucciones personales y si ya conecté una herramienta o creé un proyecto. No avances hasta poder resumir mi estado en una frase.`,
        note: "En una cuenta corporativa, el administrador puede haber desactivado conectores, Cowork o ejecución de código. Lo descubrirás probando.",
      },
      {
        number: 2,
        title: "Primer entregable real",
        duration: "15 min",
        objective: "Ver salir un archivo completo con información de tu negocio antes de configurar nada.",
        actions: [
          "Pega como texto una lista de clientes, los gastos del mes o un proceso que repites.",
          "Pide entre dos y cuatro preguntas antes de construir.",
          "Solicita el archivo completo, no una muestra ni una explicación.",
          "Descárgalo, ábrelo en tu computador y comprueba que funciona.",
        ],
        proof: "El archivo abre fuera del chat y, si es una hoja, sus fórmulas calculan de verdad.",
        prompt: `Voy a pegar información real de mi negocio. Antes de construir, hazme entre dos y cuatro preguntas para entender qué salida necesito. Después crea el archivo completo, listo para descargar y usar. No me muestres una muestra ni una descripción de lo que harías.`,
      },
      {
        number: 3,
        title: "Perfil permanente",
        duration: "10 min",
        objective: "Evitar que tengas que explicar tu contexto y formato preferido en cada chat.",
        actions: [
          "Describe cómo trabajas, el vocabulario de tu negocio y las situaciones que se repiten.",
          "Escribe comportamientos concretos, en positivo, con el porqué y un ejemplo real.",
          "Pega el resultado en Configuración → Perfil → Instrucciones personales.",
          "Abre un chat nuevo y prueba si responde con tu formato y vocabulario.",
        ],
        proof: "Un chat nuevo responde como esperas sin que vuelvas a darle el contexto.",
        prompt: `Entrevístame una pregunta a la vez sobre mi empresa, mi rol, mis objetivos del trimestre, lo que me piden repetidamente y cómo quiero que me escribas. Cuando tengas el cuadro completo, redacta mis instrucciones personales en primera persona y en menos de 250 palabras. Incluye comportamientos concretos, el porqué y un ejemplo de tono.`,
        note: "Aquí termina la sesión 1. Puedes parar y volver después sin perder el trabajo.",
      },
    ],
  },
  {
    number: 2,
    title: "Que conozca tu negocio",
    outcome: "Claude trabaja con tu calendario, tus archivos y reglas propias del negocio.",
    steps: [
      {
        number: 4,
        title: "Conecta tu trabajo real",
        duration: "10 min",
        objective: "Dejar de trabajar a ciegas, empezando por la fuente con menor fricción.",
        actions: [
          "En la app: botón + → Conectores → Administrar conectores → +.",
          "Conecta primero el calendario. Correo y archivos pueden esperar.",
          "Activa el conector en la conversación desde el mismo botón +.",
          "Pide una lectura de tu semana y verifica que mencione reuniones reales.",
        ],
        proof: "Claude menciona por nombre una reunión real. Una respuesta general no cuenta.",
        prompt: `Mira mi calendario de esta semana y dime, sin diplomacia, en qué se me está yendo el tiempo, qué reunión no debería existir y qué bloque me falta para avanzar en lo importante.`,
        note: "Con Google puede leer correo y crear borradores, pero no enviar. Con Microsoft sí puede enviar. Si no quieres conectar correo, sigue solo con calendario.",
      },
      {
        number: 5,
        title: "Dale casa al trabajo",
        duration: "5 min",
        objective: "Crear un Proyecto para que el trabajo recurrente no empiece de cero.",
        actions: [
          "Ve a Proyectos en la barra lateral y crea uno solo.",
          "Nómbralo por el trabajo: Propuestas comerciales, Contenido, Operación o Estrategia.",
          "Sube entre dos y cinco archivos reales: precios, propuestas ganadas, SOPs o decisiones.",
          "Abre un chat dentro del Proyecto y pide algo sin repetir el contexto.",
        ],
        proof: "La respuesta usa un dato que solo existe en los archivos cargados.",
      },
      {
        number: 6,
        title: "La entrevista",
        duration: "15 min",
        objective: "Convertir lo que sabes de tu negocio en instrucciones útiles para el Proyecto.",
        actions: [
          "Pide una entrevista de máximo quince preguntas, una por una.",
          "Empieza por algo observado en calendario, archivos o el entregable del paso 2.",
          "Aterriza respuestas vagas con cifras, clientes, frenos y decisiones pendientes.",
          "Guarda las instrucciones finales también como archivo de texto dentro del Proyecto.",
        ],
        proof: "Las instrucciones incluyen una inferencia válida que salió de tus datos, no solo repiten lo que dijiste.",
        prompt: `Entrevístame para crear las instrucciones de este Proyecto. Haz una pregunta a la vez y máximo quince. Empieza por algo que observes en mis archivos o calendario. Antes de terminar cubre qué vendemos y a quién, cómo conseguimos clientes, qué trabajo odio, qué decisión tengo pendiente y qué significa una buena semana. Insiste si respondo de forma vaga.`,
        note: "Aquí termina la sesión 2. Guarda una tarjeta de estado si vas a cerrar el chat.",
      },
    ],
  },
  {
    number: 3,
    title: "Que funcione sin ti",
    outcome: "Terminas con un reporte aprobado, un destino claro y un horario o disparo manual.",
    steps: [
      {
        number: 7,
        title: "Diseña tu reporte",
        duration: "10 min",
        objective: "Definir exactamente qué necesitas leer antes de abrir cualquier otra cosa.",
        actions: [
          "Pide tres reportes completos: operativo, comercial y de foco.",
          "Usa datos reales de conectores, archivos e entrevista.",
          "Haz tres rondas de ajuste y quita al menos una sección.",
          "Aprueba la versión completa que sí leerías un martes ocupado.",
        ],
        proof: "Leíste el reporte completo y eliminaste al menos una parte que no aporta.",
        prompt: `Con lo que ya sabes de mi negocio, corre tres reportes completos con mis datos reales: uno operativo, uno comercial y uno de foco. No describas las versiones, ejecútalas. Después de cada una pregúntame qué sobra y qué falta. Itera hasta que aprobemos una versión que yo sí leería un martes ocupado.`,
      },
      {
        number: 8,
        title: "Elige dónde aterriza",
        duration: "5 min",
        objective: "Hacer que el reporte aparezca donde ya miras cada mañana.",
        actions: [
          "Claude: rápido, pero exige que recuerdes abrirlo.",
          "Google Drive: útil si quieres histórico y tendencias.",
          "Borrador de correo: suele ser el mejor destino si el correo es lo primero que abres.",
          "Corre una entrega completa hacia el destino elegido.",
        ],
        proof: "El reporte aparece en el destino elegido, fuera del chat.",
        note: "Con Google queda como borrador. Con Microsoft puede enviarse, algo relevante si también lo recibirá otra persona.",
      },
      {
        number: 9,
        title: "Ponlo en horario",
        duration: "10 min",
        objective: "Pasar de usar una herramienta a tener un sistema que trabaja con horario.",
        actions: [
          "Con Pro o superior: entra a Cowork y escribe /schedule dentro de la tarea.",
          "Elige frecuencia diaria, hábil, semanal o por hora.",
          "Sube al Proyecto o Drive cualquier archivo local que el reporte necesite.",
          "Compara la primera entrega automática con la versión aprobada.",
        ],
        proof: "Llegó una vez sin pedirlo y se parece al reporte aprobado. Este paso queda abierto hasta esa primera entrega.",
        prompt: `Cada día hábil prepara mi reporte aprobado usando las cuentas conectadas y los archivos guardados en Claude. Entrégalo en el destino que definimos, conserva el orden y el nivel de detalle aprobados, y señala con claridad cualquier fuente que no pudiste consultar.`,
        note: "Plan gratuito: guarda este prompt en el Proyecto y usa la frase “corre mi reporte”. Solo cambia el disparo, no el sistema que construiste.",
      },
      {
        number: 10,
        title: "Cierre",
        duration: "5 min",
        objective: "Dejar claro qué existe, qué sigue pendiente y cómo usarlo desde mañana.",
        actions: [
          "Resume qué sabe Claude, a qué está conectado y qué corre con qué frecuencia.",
          "Crea cinco frases de trabajo específicas para tu negocio.",
          "Declara pendientes sin esconderlos: correo, horario, permisos o pruebas.",
          "Guarda la tarjeta de estado final para retomar o auditar la configuración.",
        ],
        proof: "Puedes describir tu sistema, sus límites y el siguiente uso concreto sin depender de este chat.",
        prompt: `Cierra esta puesta en marcha en cuatro bloques: 1) qué sabe Claude de mí, a qué está conectado, qué corre y dónde aterriza; 2) cinco frases de trabajo específicas para mi negocio; 3) pendientes y límites que siguen abiertos; 4) una tarjeta de estado que pueda guardar para retomar. No ocultes nada que no haya sido probado.`,
      },
    ],
  },
];
