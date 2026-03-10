export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "badge-help"
  | "bar-chart-3"
  | "bell-ring"
  | "building-2"
  | "check"
  | "chef-hat"
  | "clock-3"
  | "layers-3"
  | "menu"
  | "moon"
  | "qr-code"
  | "receipt-text"
  | "rocket"
  | "scan-line"
  | "shield-check"
  | "shopping-cart"
  | "sparkles"
  | "store"
  | "sun"
  | "utensils-crossed"
  | "users"
  | "x";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  quickPoints: string[];
}

export interface ContentCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface FeatureItem extends ContentCard {}

export interface FeatureGroup {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface StepItem {
  title: string;
  description: string;
}

export interface PlanItem {
  name: string;
  price: string;
  frequency: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  note: string;
  benefits: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  navigation: NavigationItem[];
  hero: HeroContent;
  problems: ContentCard[];
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: ContentCard[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    groups: FeatureGroup[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: StepItem[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: ContentCard[];
    highlightTitle: string;
    highlightDescription: string;
    highlightPoints: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    plans: PlanItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    description: string;
  };
}

export const landingContent: LandingContent = {
  navigation: [
    { label: "Solución", href: "#solucion" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" }
  ],
  hero: {
    eyebrow: "FoodPlazaSaaS para plazas gastronómicas y food courts",
    title: "Pedidos por QR y operación más clara para",
    highlightedText: "toda tu plaza",
    description:
      "Centraliza la experiencia del cliente y la gestión de restaurantes desde una sola plataforma web. FoodPlazaSaaS organiza pedidos por mesa, menús y estados en tiempo real sin convertir la plaza en una operación manual difícil de escalar.",
    quickPoints: [
      "Acceso por QR o URL de mesa",
      "Seguimiento de pedidos en tiempo real",
      "Pagos presenciales en el MVP"
    ]
  },
  problems: [
    {
      icon: "scan-line",
      title: "Pedidos desorganizados entre varios locales",
      description:
        "Cuando cada restaurante resuelve pedidos de forma distinta, la plaza pierde orden, tiempos y visibilidad operativa."
    },
    {
      icon: "clock-3",
      title: "El cliente no sabe en qué estado va su orden",
      description:
        "La falta de seguimiento genera filas, consultas repetidas y una experiencia menos clara para quien está consumiendo en la plaza."
    },
    {
      icon: "users",
      title: "Operación manual con demasiada fricción",
      description:
        "Tomar pedidos, confirmar pagos presenciales y coordinar entregas sin una plataforma común retrasa al equipo y aumenta errores."
    },
    {
      icon: "building-2",
      title: "Escalar una plaza multi-restaurante se vuelve complejo",
      description:
        "Sin una herramienta pensada por plaza, es difícil operar varios restaurantes con una experiencia consistente y ordenada."
    }
  ],
  solution: {
    eyebrow: "La solución",
    title: "Una experiencia conectada para la plaza, los restaurantes y el cliente final",
    description:
      "FoodPlazaSaaS reúne el flujo esencial del MVP en una sola experiencia: el cliente entra por QR de mesa, elige restaurante, crea su pedido y sigue el estado; cada restaurante recibe la orden en cola y la plaza mantiene una operación más clara.",
    pillars: [
      {
        icon: "qr-code",
        title: "Ingreso inmediato por mesa",
        description:
          "Cada mesa puede dirigir al cliente a su sesión web con QR o URL corta, reduciendo el tiempo entre llegada y pedido."
      },
      {
        icon: "store",
        title: "Gestión centralizada por plaza",
        description:
          "La solución está preparada para operar varios restaurantes dentro de la misma plaza sin perder claridad de funcionamiento."
      },
      {
        icon: "bell-ring",
        title: "Actualización en tiempo real",
        description:
          "Los cambios de estado se reflejan en la experiencia del cliente para que la entrega sea más ordenada y predecible."
      }
    ]
  },
  features: {
    eyebrow: "Funcionalidades clave",
    title: "Todo lo necesario para vender mejor sin inflar el MVP",
    description:
      "La landing presenta capacidades reales del producto actual y separa con claridad lo que recibe cada tipo de usuario dentro de la plaza.",
    groups: [
      {
        id: "clientes",
        icon: "shopping-cart",
        title: "Para clientes",
        description:
          "Un flujo ágil para pedir desde la mesa sin descargar nada.",
        items: [
          {
            icon: "qr-code",
            title: "Ingreso por QR o URL de mesa",
            description:
              "Acceso rápido desde el móvil para entrar directamente a la plaza y a la mesa correspondiente."
          },
          {
            icon: "store",
            title: "Exploración de restaurantes y menús",
            description:
              "Visualización clara de restaurantes disponibles y sus productos dentro de la plaza."
          },
          {
            icon: "shopping-cart",
            title: "Carrito simple y creación de pedido",
            description:
              "Selección de productos, armado del carrito y envío del pedido en pocos pasos."
          },
          {
            icon: "bell-ring",
            title: "Seguimiento del estado y aviso de pedido listo",
            description:
              "El cliente puede ver el avance de la orden y recibir la confirmación cuando está lista para retirar."
          }
        ]
      },
      {
        id: "restaurantes",
        icon: "chef-hat",
        title: "Para restaurantes",
        description:
          "Herramientas concretas para administrar menú y procesar pedidos.",
        items: [
          {
            icon: "shield-check",
            title: "Inicio de sesión para cada operador",
            description:
              "Acceso controlado para el personal del restaurante dentro de la plaza."
          },
          {
            icon: "utensils-crossed",
            title: "Gestión de menú",
            description:
              "Actualización de productos y estructura del menú desde la interfaz del restaurante."
          },
          {
            icon: "layers-3",
            title: "Cola de pedidos y cambio de estados",
            description:
              "Recepción de órdenes entrantes, organización en cola y avance por estados de preparación."
          },
          {
            icon: "receipt-text",
            title: "Pagos presenciales y recibos simples",
            description:
              "Confirmación de pagos realizados en sitio y emisión de recibos sencillos dentro del alcance del MVP."
          },
          {
            icon: "bar-chart-3",
            title: "Estadísticas básicas",
            description:
              "Visión inicial del comportamiento operativo y comercial del restaurante."
          }
        ]
      },
      {
        id: "sistema",
        icon: "sparkles",
        title: "Capacidades del sistema",
        description:
          "Base técnica pensada para plazas con crecimiento real y varias marcas.",
        items: [
          {
            icon: "building-2",
            title: "Multi-tenant por plaza",
            description:
              "Cada plaza puede operar su propia configuración sin mezclar información ni experiencia con otras."
          },
          {
            icon: "bell-ring",
            title: "Realtime con SignalR",
            description:
              "Actualización continua de estados para que cliente y restaurante compartan el mismo contexto operativo."
          },
          {
            icon: "rocket",
            title: "Arquitectura preparada para crecer",
            description:
              "El producto está planteado para evolucionar sin perder simplicidad en el MVP comercial actual."
          }
        ]
      }
    ]
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Un flujo simple que conecta mesa, restaurante y plaza",
    description:
      "La experiencia está diseñada para reducir fricción desde el primer escaneo hasta la entrega del pedido.",
    steps: [
      {
        title: "La plaza implementa FoodPlazaSaaS",
        description:
          "Se configura la plaza y sus restaurantes participantes dentro de la plataforma."
      },
      {
        title: "El cliente escanea el QR de la mesa",
        description:
          "Ingresa a la experiencia web asociada a su mesa sin instalar una aplicación."
      },
      {
        title: "Selecciona restaurante y productos",
        description:
          "Explora opciones disponibles, arma su carrito y revisa los detalles del pedido."
      },
      {
        title: "Confirma el pedido",
        description:
          "La orden queda registrada y el cliente puede seguir su avance desde la misma interfaz."
      },
      {
        title: "El restaurante gestiona la orden",
        description:
          "Recibe la cola de pedidos, cambia estados y confirma el pago presencial cuando corresponde."
      },
      {
        title: "El cliente recibe aviso cuando está listo",
        description:
          "La actualización final reduce incertidumbre y ayuda a ordenar la entrega dentro de la plaza."
      }
    ]
  },
  benefits: {
    eyebrow: "Beneficios orientados a conversión",
    title: "Menos fricción operativa, mejor experiencia para quien compra y para quien vende",
    description:
      "FoodPlazaSaaS no intenta ser más grande que el MVP. Se enfoca en resolver el flujo que más impacta la percepción del cliente y el orden del día a día.",
    items: [
      {
        icon: "sparkles",
        title: "Mejora la experiencia del cliente",
        description:
          "El pedido se hace desde la mesa y el estado se entiende sin tener que preguntar constantemente."
      },
      {
        icon: "shopping-cart",
        title: "Reduce fricción al pedir",
        description:
          "Menos pasos manuales para consultar, decidir y enviar la orden."
      },
      {
        icon: "layers-3",
        title: "Agiliza la operación diaria",
        description:
          "Cada restaurante gestiona pedidos con un flujo más claro y consistente."
      },
      {
        icon: "building-2",
        title: "Centraliza la gestión de la plaza",
        description:
          "La solución está pensada para operar varios restaurantes dentro de una misma experiencia comercial."
      },
      {
        icon: "bell-ring",
        title: "Da visibilidad al estado del pedido",
        description:
          "El cliente sabe si la orden está en cola, en preparación o lista para retirar."
      },
      {
        icon: "shield-check",
        title: "Facilita la adopción",
        description:
          "Es una propuesta clara para plazas que quieren ordenar su operación sin añadir complejidad innecesaria."
      }
    ],
    highlightTitle: "Pensado para plazas con varios restaurantes, no para un solo punto aislado",
    highlightDescription:
      "El valor de FoodPlazaSaaS aparece cuando la plaza necesita una experiencia compartida, clara y profesional para todos sus operadores.",
    highlightPoints: [
      "Una entrada digital consistente para cada mesa",
      "Operación más ordenada entre restaurantes",
      "Mejor percepción de servicio para el cliente final"
    ]
  },
  pricing: {
    eyebrow: "Planes",
    title: "Estructura comercial simple para empezar, crecer y escalar por plaza",
    description:
      "Los precios se muestran como referencia comercial en USD. Mientras el checkout público se habilita, la suscripción y el onboarding se coordinan por contacto.",
    note: "Precios de referencia en USD. El MVP actual no incluye pagos online dentro de la operación de pedidos.",
    plans: [
      {
        name: "Starter",
        price: "149",
        frequency: "/mes",
        description: "Para plazas piloto o espacios con operación inicial.",
        note: "Hasta 3 restaurantes activos",
        benefits: [
          "Pedidos por QR y URL de mesa",
          "Menús por restaurante",
          "Cola de pedidos y cambio de estados",
          "Confirmación de pagos presenciales",
          "Recibos simples y estadísticas básicas"
        ]
      },
      {
        name: "Growth",
        price: "299",
        frequency: "/mes",
        description: "La opción recomendada para plazas en operación constante.",
        badge: "Más elegido",
        highlight: true,
        note: "Hasta 8 restaurantes activos",
        benefits: [
          "Todo lo incluido en Starter",
          "Mayor capacidad operativa por plaza",
          "Seguimiento en tiempo real más visible para cliente y local",
          "Onboarding guiado para la puesta en marcha",
          "Soporte comercial prioritario"
        ]
      },
      {
        name: "Pro",
        price: "549",
        frequency: "/mes",
        description: "Para plazas con mayor volumen y coordinación más exigente.",
        note: "Hasta 15 restaurantes activos",
        benefits: [
          "Todo lo incluido en Growth",
          "Acompañamiento de lanzamiento coordinado",
          "Configuración comercial para operaciones más amplias",
          "Soporte prioritario ampliado",
          "Revisión conjunta de expansión por plaza"
        ]
      }
    ]
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas claras para objeciones comunes antes de implementar",
    description:
      "La landing responde lo esencial del MVP comercial sin confundir el alcance actual del producto.",
    items: [
      {
        question: "¿Qué tipo de negocios pueden usar FoodPlazaSaaS?",
        answer:
          "Está pensado para plazas gastronómicas, food courts y plazas de foodtrucks que operan varios restaurantes dentro de una misma experiencia para el cliente."
      },
      {
        question: "¿Necesito instalar algo?",
        answer:
          "No para el cliente final. La experiencia del pedido es web y se abre desde el QR o la URL de mesa. Los restaurantes acceden desde su panel web."
      },
      {
        question: "¿Puedo usarlo en una plaza con varios restaurantes?",
        answer:
          "Sí. El producto está planteado como una solución multi-tenant por plaza para coordinar varios operadores dentro del mismo entorno."
      },
      {
        question: "¿Cómo acceden los clientes?",
        answer:
          "Escanean el QR de su mesa o entran por una URL corta asociada a esa mesa y desde ahí pueden ver restaurantes, menús y crear su pedido."
      },
      {
        question: "¿Incluye pagos online?",
        answer:
          "No en el MVP actual. La operación contempla pagos presenciales confirmados por el restaurante dentro del flujo de atención."
      },
      {
        question: "¿Puedo empezar con una prueba o demo?",
        answer:
          "Sí. La acción comercial inicial se gestiona por contacto para validar tu operación, recomendar el plan adecuado y coordinar onboarding."
      },
      {
        question: "¿Dónde se usa la aplicación principal?",
        answer:
          "La landing es el sitio comercial. La operación diaria ocurre en la aplicación principal desplegada en otro host, a la que puedes acceder desde los botones de ingreso."
      }
    ]
  },
  finalCta: {
    title: "Ordena la operación de tu plaza sin inflar el stack ni complicar al cliente",
    description:
      "Presenta una experiencia moderna para pedir por QR, centraliza el flujo entre restaurantes y convierte el interés comercial en una implementación real."
  }
};
