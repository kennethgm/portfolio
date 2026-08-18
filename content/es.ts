import type { Content } from "./types";

export const es: Content = {
  meta: {
    title: "Kenneth Granados, ingeniero full stack",
    description:
      "Construyo y publico aplicaciones web en producción. Once años entregando plataformas para empresas de Estados Unidos en fintech, salud, e-commerce y analítica. React, Node.js, TypeScript, AWS y Azure.",
    ogTagline: "Ingeniero full stack"
  },

  nav: {
    work: "Trabajo",
    experience: "Experiencia",
    stack: "Stack",
    contact: "Contacto",
    menu: "Abrir menú",
    language: "Cambiar idioma"
  },

  hero: {
    status: "Disponible para nuevos proyectos",
    location: "Costa Rica / UTC-6",
    headlineLead: "Construyo y publico",
    headlineAccent: "software en producción.",
    lede: "Kenneth Granados, ingeniero full stack. Once años entregando plataformas para empresas de Estados Unidos en fintech, salud, e-commerce y analítica. React, Node.js, TypeScript, AWS y Azure.",
    ctaPrimary: "Empezar un proyecto",
    ctaSecondary: "Ver el trabajo"
  },

  stats: [
    { value: "11", label: "Años en producción" },
    { value: "6.000+", label: "Productos migrados" },
    { value: "~60%", label: "Menos tiempo de deploy" },
    { value: "4", label: "Industrias" }
  ],

  services: {
    eyebrow: "01 / Qué construyo",
    heading: "Capacidad de ingeniería senior, sin sumar planilla.",
    lede: "Trabajo directo con founders y product owners, incluso en proyectos donde los requerimientos todavía hay que definirlos.",
    items: [
      {
        title: "Aplicaciones web y herramientas internas",
        blurb:
          "Entrega de punta a punta en React y Next.js sobre un backend en Node.js, desde el modelo de datos hasta el producto publicado."
      },
      {
        title: "APIs e integraciones con terceros",
        blurb:
          "Servicios REST, flujos de pago con Stripe, comercio headless, e integraciones con PIM y sistemas de socios."
      },
      {
        title: "Tiendas y migraciones de e-commerce",
        blurb:
          "Desarrollo de storefronts y migraciones grandes de catálogo o datos hacia stacks de comercio modernos."
      },
      {
        title: "CI/CD y despliegue en la nube",
        blurb:
          "Pipelines con Docker en GitHub Actions o CircleCI, con despliegue y monitoreo en AWS y Azure."
      },
      {
        title: "Rescate y modernización de frontend",
        blurb:
          "Refactor de código heredado, arreglo de defectos de performance y UX, y suma de cobertura de pruebas."
      },
      {
        title: "Asesoría técnica",
        blurb:
          "Revisión de arquitectura, code review y mentoría para equipos que necesitan una voz senior part-time."
      }
    ]
  },

  work: {
    eyebrow: "02 / Trabajo destacado",
    heading: "Cosas que construí y que podés abrir ahora mismo.",
    lede: "Dos son productos propios, en producción. Los proyectos de clientes se describen por dominio: los nombres quedan confidenciales.",
    openSite: "Abrir el sitio",
    featured: [
      {
        id: "liganeta",
        name: "La Liganeta",
        wordmark: "Liganeta",
        url: "laliganeta.com",
        href: "https://laliganeta.com",
        tag: "En vivo",
        role: "Único desarrollador",
        tone: "#FF4D57",
        wash: "radial-gradient(circle at 50% 40%, #241318 0%, #0E1014 70%)",
        blurb:
          "La casa digital de una comunidad de afición al fútbol costarricense. Match center en vivo, tabla de posiciones, calculadora de clasificación y un panel de admin que su dueño usa la noche de partido. Diseñado, construido y desplegado en solitario, desde carpeta vacía hasta producción.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Netlify"],
        live: true
      },
      {
        id: "quien-pasa",
        name: "Quién Pasa",
        wordmark: "Quién Pasa",
        url: "quienpasa.kennethgm.com",
        href: "https://quienpasa.kennethgm.com",
        tag: "En vivo",
        role: "Único desarrollador",
        tone: "#5FE3B0",
        wash: "radial-gradient(circle at 50% 40%, #10231C 0%, #0E1014 70%)",
        blurb:
          "Calculadora de clasificación de la Copa Centroamericana 2026. Un solo archivo HTML, sin dependencias, sin servidor. Incluye una suite de verificación que corre una segunda implementación independiente del motor y las compara antes de publicar cualquier cambio.",
        stack: ["JS puro", "Cero dependencias", "Tooling en Node", "Netlify"],
        live: true
      },
      {
        id: "tombola",
        name: "La Tómbola CR",
        wordmark: "Tómbola CR",
        url: "latombolacr.com",
        tag: "Caso de estudio",
        role: "Único desarrollador",
        tone: "#FFB020",
        wash: "radial-gradient(circle at 50% 40%, #231B0E 0%, #0E1014 70%)",
        blurb:
          "Plataforma de manejo y envío de cartones para un negocio real de tómbola. Importa datos de cartones en bloque desde hojas de cálculo, genera cada cartón numerado como imagen, y lo envía por correo a los compradores uno por uno o en bloque. Manejo todo el stack, incluida la infraestructura en AWS: EC2 para el API, S3 y CloudFront para el frontend estático, Route 53 para el DNS, y Let's Encrypt para TLS. La instancia se apaga entre usos para ahorrar costos, así que este es un caso de estudio y no un link en vivo.",
        stack: ["React", "NestJS", "PostgreSQL", "AWS EC2", "S3 + CloudFront", "Route 53"],
        live: false
      }
    ],
    client: [
      {
        id: "lending",
        name: "Plataforma de préstamos y refinanciamiento",
        sector: "Fintech, US",
        years: "2025 a hoy",
        blurb:
          "Flujo de refinanciamiento de cara al cliente para una credit union de Estados Unidos: el frontend, los servicios en Node detrás y el modelo de datos. Reconstruí el pipeline de release con Docker y CI/CD en la nube.",
        metric: "~60%",
        metricLabel: "Releases más rápidos"
      },
      {
        id: "commerce",
        name: "E-commerce de salud y bienestar",
        sector: "Retail, US",
        years: "2023 a 2025",
        blurb:
          "Storefront directo al consumidor sobre un stack de comercio headless. Lideré la migración del catálogo con todos los medios y datos estructurados, coordinando el corte para que la tienda nunca dejara de vender.",
        metric: "6.000+",
        metricLabel: "Productos migrados"
      },
      {
        id: "analytics",
        name: "Analítica de reclutamiento y RRHH",
        sector: "HR SaaS",
        years: "2019 a 2022",
        blurb:
          "Analítica multi-tenant con datos de reclutamiento y fuerza laboral para clientes empresariales globales. Lideré el frontend de reportes y dashboards, y construí los servicios que los alimentan.",
        metric: "Global",
        metricLabel: "Clientes empresariales"
      }
    ]
  },

  experience: {
    eyebrow: "03 / Experiencia",
    heading: "Once años, una consultora, tres roles.",
    company: "10Pearls",
    companyNote: "(antes ProximityCR)",
    companyBlurb: "Consultora de software empresarial. Plataformas para clientes de Estados Unidos.",
    span: "Feb 2015 a hoy",
    roles: [
      {
        title: "Senior Software Engineer",
        span: "2020 a hoy",
        blurb:
          "Lideré arquitectura de frontend y entrega de features en plataformas en producción con React, Next.js y TypeScript. Reconstruí pipelines de build y release con Docker, GitHub Actions y CircleCI. Diseñé APIs REST en Node.js integrando pagos, comercio headless y servicios PIM, y manejé despliegues y monitoreo en AWS y Azure."
      },
      {
        title: "Full Stack Developer",
        span: "2017 a 2020",
        blurb:
          "Construí aplicaciones web full stack y herramientas internas, desarrollé y personalicé storefronts de e-commerce, y entregué librerías de componentes de UI reutilizadas en varios proyectos de clientes."
      },
      {
        title: "Web Developer",
        span: "2015 a 2017",
        blurb:
          "Entregué proyectos web de e-commerce, marketing y servicio al cliente con AngularJS, Vue.js, Magento, PHP y jQuery, cubriendo implementación y soporte post-lanzamiento."
      }
    ],
    education: {
      degree: "Bachillerato en Ingeniería en Sistemas de Información",
      school: "Universidad Nacional de Costa Rica",
      years: "2010 a 2014"
    },
    languagesLabel: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Profesional" }
    ],
    downloadsLabel: "Documentos",
    downloads: [
      { label: "Descargar CV completo", file: "/cv/kenneth-granados-cv.pdf" },
      { label: "Descargar CV one-pager", file: "/cv/kenneth-granados-one-pager.pdf" }
    ]
  },

  stack: {
    eyebrow: "05 / Stack",
    heading: "Con qué trabajo.",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Jest"]
      },
      {
        label: "Backend",
        items: ["Node.js", "APIs REST", "PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        label: "Nube y DevOps",
        items: ["AWS", "Azure", "Docker", "GitHub Actions", "CircleCI", "Netlify"]
      },
      {
        label: "Comercio",
        items: ["commercetools", "Stripe", "Magento", "Sistemas PIM"]
      }
    ]
  },

  howIWork: {
    eyebrow: "04 / Cómo trabajo",
    heading: "La mayoría de proyectos se traban en los requerimientos, no en el código.",
    items: [
      {
        num: "01",
        title: "Alcance por hitos",
        blurb:
          "Un discovery corto, y después entregables fijos con criterios de aceptación claros. Siempre sabés qué estás pagando y qué sigue."
      },
      {
        num: "02",
        title: "Requerimientos primero",
        blurb:
          "Lo que más traba un proyecto es un requerimiento mal definido. Levanto los vacíos con el product owner antes de escribir código, no a mitad del sprint."
      },
      {
        num: "03",
        title: "Avance visible",
        blurb:
          "Tu repo, tu estrategia de branches, tu proceso de revisión. Demos semanales o actualizaciones escritas, lo que realmente leas."
      },
      {
        num: "04",
        title: "Acelerado con IA, revisado por mí",
        blurb:
          "Uso Claude y herramientas similares a diario para avanzar más rápido en scaffolding, pruebas e investigación. Cada línea que sale es una que entiendo y puedo defender en revisión. Este sitio está construido igual."
      }
    ]
  },

  contact: {
    status: "Disponible para nuevos proyectos",
    headingLead: "Hablemos de",
    headingAccent: "lo que necesitás construir.",
    lede: "Contame el problema, aunque los requerimientos todavía estén difusos. Vuelvo con alcance, hitos y qué construiría primero.",
    copyIdle: "Copiar correo",
    copyDone: "Copiado",
    basedInLabel: "Ubicado en",
    basedIn: "Costa Rica, en UTC-6. Mismo horario que US Central.",
    linkLabels: {
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub"
    },
    download: {
      label: "Descargar el one-pager (PDF)",
      file: "/cv/kenneth-granados-freelance-one-pager.pdf"
    }
  },

  footer: {
    note: "Construido desde cero, sin plantilla."
  }
};
