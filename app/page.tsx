import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Code2,
  Database,
  Download,
  FolderOpen,
  Mail,
  MapPin,
  Phone,
  Server,
  TerminalSquare,
  Trophy,
} from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import {
  ProjectsSection,
  type ProjectCardData,
} from "./components/ProjectsSection";

type IconType = ComponentType<{ className?: string; size?: number }>;

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contacto" },
];

const stats = [
  { value: "2+", label: "Años de experiencia" },
  { value: "7+", label: "Proyectos reales" },
  { value: "10+", label: "Tecnologías" },
];

const abilities: Array<{ title: string; icon: IconType; text: string }> = [
  {
    title: "Frontend Moderno",
    icon: Code2,
    text: "React, TypeScript, Tailwind CSS, Mobile con React Native",
  },
  {
    title: "Backend Robusto",
    icon: Server,
    text: "Node.js, Express, PHP, APIs REST, Socket.IO, WebRTC",
  },
  {
    title: "Bases de datos",
    icon: Database,
    text: "MySQL, SQL Server, MongoDB, Sequelize ORM",
  },
  {
    title: "DevOps & Cloud",
    icon: TerminalSquare,
    text: "Docker, AWS, Linux Ubuntu, Git, Amazon S3",
  },
];

const experience = [
  {
    role: "Analista y Desarrollador Programador",
    company: "Cobranzas Perú",
    status: "Actual",
    date: "Enero 2025 - Actualidad",
    bullets: [
      "Desarrollo de APIs REST con Node.js y aplicaciones web con React",
      "Integración de WebRTC en plataforma de cobranzas para llamadas desde navegador",
      "Migración y optimización de interfaces React y controladores Node.js",
      "Mantenimiento y mejora de sistemas empresariales en PHP, React y Node.js",
      "Administración de servidores Linux Ubuntu y contenedores Docker",
      "Despliegue de aplicaciones en AWS usando Docker",
      "Configuración de HTTPS con Certbot",
      "Dashboards y reportes con Power BI",
    ],
    tags: ["React", "Node.js", "WebRTC", "Docker", "AWS", "PHP", "Power BI"],
  },
  {
    role: "Desarrollador de Software",
    company: "Bymave - E.I.R.L.",
    date: "Febrero 2024 - Diciembre 2024",
    bullets: [
      "Desarrollo de aplicación móvil para monitoreo de envíos y pedidos",
      "Creación de aplicación web administrativa para e-commerce",
      "Desarrollo de plataforma web para venta de productos y servicios",
      "Implementación de sistema web de tickets",
      "Desarrollo de APIs REST con Node.js",
      "Frontend con React.js y React Native",
      "Subida de imágenes a Amazon S3",
      "Gestión de bases de datos y contenedores",
    ],
    tags: [
      "React",
      "React Native",
      "Node.js",
      "Amazon S3",
      "MySQL",
      "TypeScript",
    ],
  },
  {
    role: "Desarrollador de Software",
    company: "Bymave - E.I.R.L.",
    date: "Septiembre 2023 - Enero 2024",
    bullets: [
      "Desarrollo de página web corporativa",
      "Migración de sistema de gestión de transporte",
      "Desarrollo de APIs REST con Node.js",
      "Desarrollo frontend con React.js",
      "Administración de bases de datos y contenedores",
    ],
    tags: ["React", "Node.js", "MySQL", "Docker"],
  },
];

const projects: ProjectCardData[] = [
  {
    key: "cyc-web",
    title: "CYC WEB - Sistema de Cobranzas y Contacto",
    accent: "cyan",
    text: "Sistema web empresarial para gestión de cobranzas, contacto con clientes y llamadas desde navegador usando WebRTC.",
    items: [
      "API REST con Node.js y Sequelize",
      "Autenticación JWT",
      "Comunicación en tiempo real con Socket.IO",
      "Integración de WebRTC con JsSIP",
      "Despliegue con Docker y AWS",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "WebRTC",
      "MySQL",
      "Docker",
      "AWS",
    ],
    privacyProtected: true,
    images: [
      {
        src: "/projects/CyCWeb1.png",
        alt: "Vista general del sistema CYC WEB",
        width: 1900,
        height: 922,
        masks: [
          { left: 1.68, top: 8.46, width: 8.05, height: 3.8 },
          { left: 15.89, top: 8.68, width: 12.26, height: 3.36 },
          { left: 1.79, top: 18.22, width: 16.11, height: 9.44 },
          { left: 22.89, top: 18.22, width: 17.11, height: 9.44 },
          { left: 52.63, top: 18.22, width: 8.68, height: 9.44 },
          { left: 66.42, top: 18.0, width: 28.84, height: 9.65 },
          { left: 1.89, top: 43.82, width: 40.0, height: 35.14 },
          { left: 66.32, top: 92.73, width: 33.05, height: 7.05 },
        ],
      },
      {
        src: "/projects/CyCWeb2.png",
        alt: "Formulario de gestión y llamada WebRTC",
        width: 1431,
        height: 945,
      },
      {
        src: "/projects/CyCWeb3.png",
        alt: "Modal de cuotas del sistema CYC WEB",
        width: 751,
        height: 329,
      },
      {
        src: "/projects/CyCWeb4.png",
        alt: "Modal de campañas del sistema CYC WEB",
        width: 754,
        height: 260,
      },
    ],
  },
  {
    key: "intranet",
    title: "Intranet Corporativa - Dashboards y Gestión",
    accent: "green",
    text: "Intranet para visualización de indicadores, control de equipos, reportes y seguimiento operativo con Power BI integrado.",
    items: [
      "Dashboards embebidos con Power BI",
      "Mapas de ubicación interactivos",
      "Reportes diarios exportables",
      "Carga de archivos",
      "Actualización en tiempo real con Socket.IO",
    ],
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Sequelize",
      "MySQL",
      "Power BI",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    images: [
      {
        src: "/projects/Intranet1.png",
        alt: "Dashboard de monitoreo de indicadores",
        width: 1898,
        height: 820,
      },
      {
        src: "/projects/Intranet2.png",
        alt: "Dashboard administrativo de permisos",
        width: 1908,
        height: 845,
      },
      {
        src: "/projects/Intranet3.png",
        alt: "Dashboard de monitoreo de uso del directorio",
        width: 1902,
        height: 927,
      },
      {
        src: "/projects/Intranet4.png",
        alt: "Flujo visual de procesos internos",
        width: 1900,
        height: 926,
      },
    ],
  },
  {
    key: "ecommerce-web",
    title: "Aplicación Web E-commerce Administrativa",
    accent: "cyan",
    text: "Sistema administrativo completo para gestión de productos, pedidos, inventario, facturación y notificaciones.",
    items: [
      "Gestión de inventario en tiempo real",
      "Pedidos con notificaciones instantáneas",
      "Facturación automatizada",
      "Almacenamiento de imágenes en Amazon S3",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
      "Amazon S3",
    ],
    images: [
      {
        src: "/projects/EcommerceWeb1.png",
        alt: "Dashboard principal del e-commerce administrativo",
        width: 1358,
        height: 926,
      },
      {
        src: "/projects/EcommerceWeb2.png",
        alt: "Formulario administrativo de recepción",
        width: 1377,
        height: 885,
      },
      {
        src: "/projects/EcommerceWeb3.png",
        alt: "Listado administrativo de productos o pedidos",
        width: 1882,
        height: 911,
      },
      {
        src: "/projects/EcommerceWeb4.png",
        alt: "Gestión de inventario del e-commerce",
        width: 1688,
        height: 815,
      },
    ],
  },
  {
    key: "ecommerce-movil",
    title: "App Móvil E-commerce Administrativa",
    accent: "violet",
    text: "Aplicación móvil para monitoreo de pedidos, productos, envíos y ubicación en tiempo real con geolocalización.",
    items: [
      "Manejo de roles de usuario",
      "Geolocalización con React Native Maps",
      "Formularios con Formik",
      "Estado global con Zustand",
      "Consumo de APIs con Axios y React Query",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MySQL",
      "UI Kitten",
      "React Query",
      "Zustand",
    ],
    images: [
      {
        src: "/projects/EcommerceMovil1.jpg",
        alt: "Catálogo móvil de productos",
        width: 720,
        height: 1280,
      },
      {
        src: "/projects/EcommerceMovil2.jpg",
        alt: "Menú lateral de la aplicación móvil",
        width: 720,
        height: 1280,
      },
      {
        src: "/projects/EcommerceMovil3.jpg",
        alt: "Vista de geolocalización móvil",
        width: 720,
        height: 1280,
      },
      {
        src: "/projects/EcommerceMovil4.jpg",
        alt: "Seguimiento de pedidos en aplicación móvil",
        width: 720,
        height: 1280,
      },
    ],
  },
  {
    key: "tickets",
    title: "Sistema Web de Tickets",
    accent: "cyan",
    text: "Aplicación para creación, atención e historial de tickets de soporte en tiempo real con WebSockets.",
    items: [
      "Creación y asignación de tickets",
      "Atención en tiempo real",
      "Historial de tickets atendidos",
      "Comunicación cliente-servidor con WebSockets",
    ],
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
    ],
    images: [
      {
        src: "/projects/Tickets1.png",
        alt: "Inicio de sesión del sistema de tickets",
        width: 959,
        height: 411,
      },
      {
        src: "/projects/Tickets2.png",
        alt: "Vista de ticket en atención",
        width: 958,
        height: 241,
      },
      {
        src: "/projects/Tickets3.png",
        alt: "Historial de tickets atendidos",
        width: 936,
        height: 762,
      },
    ],
  },
  {
    key: "control-campo",
    title: "Sistema de Control de Gestiones de Campo",
    accent: "green",
    text: "Aplicación web para gestión, monitoreo y reporte de actividades de campo con mapas y exportación de datos.",
    items: [
      "Mapa interactivo de gestiones",
      "Filtros por fecha, asesor y cartera",
      "Exportación de reportes en Excel",
      "Carga de evidencias fotográficas",
      "Despliegue con Docker y HTTPS",
    ],
    tags: [
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "Google Maps API",
    ],
    privacyProtected: true,
    images: [
      {
        src: "/projects/ControlCampo1.png",
        alt: "Mapa de rutas y marcadores de gestiones de campo",
        width: 1034,
        height: 952,
        masks: [
          { left: 18.96, top: 93.28, width: 8.8, height: 6.72 },
          { left: 77.56, top: 93.28, width: 20.89, height: 6.72 },
        ],
      },
      {
        src: "/projects/ControlCampo2.png",
        alt: "Panel de visitas de oficina",
        width: 1339,
        height: 805,
        masks: [
          { left: 11.58, top: 39.5, width: 11.28, height: 51.8 },
          { left: 24.35, top: 39.5, width: 6.42, height: 51.8 },
          { left: 34.5, top: 39.5, width: 14.04, height: 51.8 },
        ],
      },
      {
        src: "/projects/ControlCampo3.png",
        alt: "Formulario para agregar una gestión de campo",
        width: 918,
        height: 948,
        masks: [{ left: 0.54, top: 7.17, width: 14.16, height: 2.32 }],
      },
    ],
  },
  {
    key: "migracion",
    title: "Migración de Sistema de Gestión de Transporte",
    accent: "violet",
    text: "Migración y modernización de un sistema operativo para gestión de transporte, reportes, pedidos y comunicación interna.",
    items: [
      "Migración de interfaces a React",
      "Optimización de flujos administrativos",
      "Dashboards y reportes operativos",
      "Módulos de comunicación interna",
    ],
    tags: ["React", "Node.js", "MySQL", "Docker", "JavaScript"],
    images: [
      {
        src: "/projects/Migracion1.png",
        alt: "Dashboard principal del sistema migrado",
        width: 1918,
        height: 954,
      },
      {
        src: "/projects/Migracion2.png",
        alt: "Vista de pedidos y comunicación interna",
        width: 1908,
        height: 946,
      },
      {
        src: "/projects/Migracion3.png",
        alt: "Panel administrativo del sistema de transporte",
        width: 1907,
        height: 951,
      },
      {
        src: "/projects/Migracion4.png",
        alt: "Módulo de consulta y gestión del sistema migrado",
        width: 1909,
        height: 939,
      },
    ],
  },
];

const stack = [
  {
    title: "Frontend",
    icon: TerminalSquare,
    color: "text-[var(--cyan)]",
    items: [
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "PrimeReact",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-[var(--green)]",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "APIs REST",
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Sequelize",
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    color: "text-[var(--cyan)]",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "DevOps & Herramientas",
    icon: BriefcaseBusiness,
    color: "text-[var(--violet)]",
    items: [
      "Git",
      "Docker",
      "Docker Compose",
      "Linux Ubuntu",
      "AWS",
      "Amazon S3",
      "Power BI",
    ],
  },
];

function Tag({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "green" | "violet";
}) {
  const color =
    tone === "green"
      ? "bg-emerald-400"
      : tone === "violet"
        ? "bg-violet-400"
        : "bg-cyan-400";
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-[#17263d] px-3 py-1.5 text-xs text-(--muted)">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-[rgba(7,13,26,.82)] backdrop-blur-xl">
      <div className="container flex h-18 items-center justify-between gap-3 md:h-20">
        <a
          href="#inicio"
          className="flex items-center gap-4 font-bold tracking-wide"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-(--cyan) text-sm font-black text-[#04101b]">
            RA
          </span>
          <span className="hidden text-sm sm:inline md:text-base">
            reiner Alayo
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-sm font-semibold text-(--muted) lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-(--cyan)">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn-primary hidden sm:inline-flex"
          href="/cv-david-reiner-alayo.pdf"
          download
        >
          <Download size={17} />{" "}
          <span className="hidden md:inline">Descargar CV</span>
          <span className="md:hidden">CV</span>
        </a>
      </div>
    </header>
  );
}

const heroTechnologies: Array<{
  label: string;
  icon: IconType;
  tone: "cyan" | "green";
}> = [
  { label: "React.js", icon: Code2, tone: "cyan" },
  { label: "Node.js", icon: Server, tone: "green" },
  { label: "MySQL", icon: Database, tone: "cyan" },
];

function HeroGraphic() {
  return (
    <div className="card relative mx-auto w-full max-w-[760px] overflow-hidden p-3 sm:p-5">
      <div className="absolute left-5 top-12 z-10 hidden gap-3 sm:grid">
        {heroTechnologies.map(({ label, icon: Icon, tone }) => (
          <div
            key={label}
            className="badge rounded-xl bg-[#0c1627]/95 px-4 py-3 shadow-2xl"
          >
            <Icon
              className={tone === "green" ? "text-(--green)" : "text-(--cyan)"}
              size={18}
            />{" "}
            {label}
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-(--line) bg-[#111f34]">
        <div className="flex items-center gap-3 border-b border-(--line) px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded bg-[#223853] px-3 py-2 text-xs text-(--muted) sm:ml-4 sm:px-4 sm:text-sm">
            https://cyc-web.cobranzas.pe
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 p-3 pt-5 sm:gap-5 sm:p-5 sm:pt-8 md:grid-cols-4">
          {["2,041", "1,203", "476", "389"].map((num, i) => (
            <div
              key={num}
              className="rounded-xl border border-(--line) bg-[#0e1a2c] p-3 sm:p-4"
            >
              <b className="text-xl text-(--cyan) sm:text-2xl">{num}</b>
              <p className="text-sm text-(--muted)">
                {["Gestiones", "Contactos", "Pendientes", "Llamadas"][i]}
              </p>
              <small className="text-(--green)">+{[12, 8, 3, 21][i]}%</small>
            </div>
          ))}
        </div>
        <div className="grid gap-3 p-3 pt-0 sm:gap-5 sm:p-5 sm:pt-0 md:grid-cols-[2fr_1fr]">
          <div className="min-w-0 overflow-hidden rounded-xl border border-(--line) p-4">
            <p className="mb-5 text-sm text-(--muted)">Gestiones por día</p>
            <div className="mock-bars flex h-20 w-full items-end gap-1.5 sm:gap-2">
              {[31, 50, 43, 63, 54, 70, 46, 58, 66, 74, 54, 69].map((h, i) => (
                <span key={i} style={{ height: h }} />
              ))}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-xl border border-(--line) p-4">
            <p className="mb-5 text-sm text-(--muted)">Top asesores</p>
            {[
              ["Ana R.", 87],
              ["Luis M.", 79],
              ["Clara V.", 67],
            ].map(([name, val]) => (
              <div key={String(name)} className="mb-3">
                <div className="mb-1 flex justify-between text-sm text-(--muted)">
                  <span>{name}</span>
                  <span>{val}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded bg-[#223853]">
                  <div
                    className="h-1.5 rounded bg-(--cyan)"
                    style={{ width: `${val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 -right-2 hidden gap-3 lg:grid">
        <div className="badge rounded-xl px-4 py-3">
          <TerminalSquare size={18} className="text-(--cyan)" />
          Docker
        </div>
        <div className="badge rounded-xl px-4 py-3">
          <Server size={18} className="text-(--violet)" />
          AWS
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="section min-h-[calc(100vh-72px)] pt-14 sm:pt-20 lg:pt-28"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <span className="badge">
            <span className="h-2.5 w-2.5 rounded-full bg-(--green)" />{" "}
            Disponible para nuevas oportunidades
          </span>
          <h1 className="mt-8 text-4xl font-black leading-tight tracking-wide sm:text-5xl md:text-7xl">
            Hola, soy <span className="text-(--cyan)">Reiner Alayo</span>
          </h1>
          <p className="mt-6 text-lg font-bold leading-relaxed text-(--muted) sm:text-2xl">
            Desarrollador de Software especializado en aplicaciones web
            modernas, sistemas empresariales y soluciones Full Stack.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-(--muted) sm:text-lg sm:leading-8">
            Construyo interfaces limpias, APIs eficientes y plataformas
            escalables usando React, Node.js, Tailwind CSS, Docker y bases de
            datos SQL/NoSQL.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a className="btn btn-primary" href="#proyectos">
              <FolderOpen size={18} /> Ver proyectos
            </a>
            <a className="btn btn-ghost" href="#contacto">
              <Mail size={18} /> Contactarme
            </a>
            <a
              className="btn btn-ghost"
              href="/cv-david-reiner-alayo.pdf"
              download
            >
              <Download size={18} /> Descargar CV
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-14 sm:flex sm:gap-16">
            {stats.map((s) => (
              <div key={s.label}>
                <b className="text-3xl">{s.value}</b>
                <p className="text-sm text-(--muted)">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroGraphic />
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="sobre-mi"
      className="section border-t border-(--line) bg-[#091020]"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative">
          <span className="badge absolute -left-4 -top-5 z-10">
            <MapPin size={15} className="text-(--cyan)" /> Perú
          </span>
          <div className="h-[360px] overflow-hidden rounded-2xl sm:h-[520px] border border-(--line) bg-[linear-gradient(135deg,#08101e,#13365a_45%,#0b1220)] p-8">
            <div className="grid h-full place-items-center rounded-xl border border-[rgba(53,191,244,.18)] bg-[radial-gradient(circle_at_30%_20%,rgba(53,191,244,.26),transparent_22%),radial-gradient(circle_at_75%_30%,rgba(167,139,250,.16),transparent_24%),#050b15]">
              <TerminalSquare size={120} className="text-(--cyan) opacity-80" />
            </div>
          </div>
          <div className="card absolute -bottom-5 right-2 p-4 sm:-bottom-7 sm:-right-6 sm:p-6">
            <b className="text-3xl text-(--cyan)">2+</b>
            <p className="text-xs text-(--muted)">
              Años de
              <br />
              Experiencia
            </p>
          </div>
        </div>
        <div>
          <p className="kicker text-center lg:text-left">Sobre mí</p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Desarrollador Full Stack orientado a resultados
          </h2>
          <p className="mt-8 text-lg leading-8 text-(--muted)">
            Soy desarrollador de software con experiencia en desarrollo frontend
            y backend, enfocado en crear aplicaciones web modernas, funcionales
            y escalables. He trabajado en sistemas empresariales, plataformas de
            cobranzas, e-commerce, aplicaciones móviles, dashboards e
            integraciones en tiempo real.
          </p>
          <p className="mt-6 text-lg leading-8 text-(--muted)">
            Me interesa construir soluciones limpias, mantenibles y orientadas
            al rendimiento. Practico buenas prácticas de código, aprendizaje
            constante y resolución de problemas reales.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {abilities.map(({ title, icon: Icon, text }) => (
              <div key={title} className="card p-5">
                <div className="flex gap-4">
                  <Icon className="text-(--cyan)" />
                  <div>
                    <b>{title}</b>
                    <p className="mt-2 text-sm leading-6 text-(--muted)">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container max-w-5xl">
        <div className="text-center">
          <p className="kicker">Trayectoria</p>
          <h2 className="mt-4 text-4xl font-black">Experiencia Profesional</h2>
        </div>
        <div className="relative mt-14">
          <div className="timeline-line" />
          {experience.map((job) => (
            <article
              key={`${job.role}-${job.date}`}
              className="relative mb-8 pl-14 sm:pl-20"
            >
              <span className="timeline-dot" />
              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{job.role}</h3>
                    <p className="mt-1 text-sm font-bold text-(--cyan)">
                      {job.company}{" "}
                      {job.status && (
                        <span className="ml-2 rounded-md bg-(--green) px-2 py-1 text-[10px] text-[#04101b]">
                          {job.status}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="badge rounded-lg text-xs">
                    <Calendar size={13} />
                    {job.date}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-(--muted)">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--cyan)" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#17263d] px-3 py-1.5 text-xs text-(--muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return <ProjectsSection projects={projects} />;
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center">
          <p className="kicker">Tecnologías</p>
          <h2 className="mt-4 text-4xl font-black">Stack Técnico</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {stack.map(({ title, icon: Icon, items, color }) => (
            <div key={title} className="card p-8">
              <div className="mb-7 flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#17263d]">
                  <Icon className={color} size={22} />
                </span>
                <h3 className={`text-2xl font-black ${color}`}>{title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <Tag
                    key={item}
                    tone={
                      title.includes("Backend")
                        ? "green"
                        : title.includes("DevOps")
                          ? "violet"
                          : "cyan"
                    }
                  >
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const soft = [
    "Comunicación efectiva",
    "Empatía",
    "Puntualidad y compromiso",
    "Resolución de problemas",
    "Adaptabilidad",
    "Responsabilidad",
    "Trabajo en equipo",
    "Aprendizaje constante",
  ];
  return (
    <section className="section border-t border-(--line) bg-[#091020]">
      <div className="container">
        <div className="text-center">
          <p className="kicker">Formación</p>
          <h2 className="mt-4 text-4xl font-black">Educación y Certificados</h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[370px_1fr]">
          <div className="space-y-8">
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-(--muted)">
                <BriefcaseBusiness size={16} /> Educación
              </h3>
              <div className="card p-5">
                <b>Ingeniería de Sistemas</b>
                <p className="mt-2 text-sm text-(--cyan)">
                  UPC - Universidad Peruana de Ciencias Aplicadas
                </p>
                <p className="mt-2 text-sm text-(--muted)">
                  2025 II - Actualidad
                </p>
              </div>
              <div className="card mt-4 p-5">
                <b>Ingeniería de Software con Inteligencia Artificial</b>
                <p className="mt-2 text-sm text-(--cyan)">
                  SENATI - Profesional Técnico
                </p>
                <p className="mt-2 text-sm text-(--muted)">2022 - 2024</p>
              </div>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-(--muted)">
                <Trophy size={16} /> Certificados
              </h3>
              <div className="card flex gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#17263d]">
                  <Trophy className="text-(--violet)" />
                </span>
                <div>
                  <b>React: Aplicaciones en tiempo real con Socket.IO</b>
                  <p className="mt-2 text-sm text-(--cyan)">Udemy</p>
                  <p className="mt-1 text-sm text-(--muted)">Junio 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="mb-7 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-(--muted)">
              ♡ Habilidades blandas
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div className="my-8 border-t border-(--line)" />
            <p className="text-lg leading-8 text-(--muted)">
              Como desarrollador, no solo aporto conocimiento técnico — también
              me enfoco en comunicarme bien con mi equipo, cumplir plazos y
              seguir aprendiendo cada día. Busco entornos donde pueda crecer y
              aportar valor real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links: Array<{
    label: string;
    value: string;
    href: string;
    icon: IconType;
  }> = [
    {
      label: "GitHub",
      value: "github.com/reineralayo",
      href: "https://github.com/Reiner89",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/david-reiner",
      href: "https://linkedin.com/in/david-reiner-639490414",
      icon: BriefcaseBusiness,
    },
    {
      label: "Email",
      value: "reineralayolaury@gmail.com",
      href: "mailto:reineralayolaury@gmail.com",
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: "+51 986 254 732",
      href: "https://wa.me/51986254732",
      icon: Phone,
    },
  ];
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">Contacto</p>
          <h2 className="mt-4 text-4xl font-black">¿Trabajamos juntos?</h2>
          <p className="mt-4 text-lg text-(--muted)">
            Estoy abierto a nuevas oportunidades laborales como Desarrollador de
            Software, Desarrollador Web, Frontend, Backend o Full Stack.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-black">
              Información de contacto
            </h3>
            <div className="grid gap-4">
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex min-w-0 items-center justify-between gap-3 overflow-hidden p-5 hover:border-(--cyan)"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#17263d]">
                      <Icon className="text-(--cyan)" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-(--muted)">{label}</p>
                      <b className="block break-words text-sm sm:text-base">
                        {value}
                      </b>
                    </div>
                  </div>
                  <ArrowRight className="shrink-0 text-(--muted)" size={18} />
                </a>
              ))}
            </div>
            <a
              className="btn btn-primary mt-8 w-full"
              href="/cv-david-reiner-alayo.pdf"
              download
            >
              <Download size={18} /> Descargar CV en PDF
            </a>
          </div>
          <div>
            <h3 className="mb-8 text-2xl font-black">Envíame un mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-(--line) py-8">
      <div className="container flex flex-col items-center justify-between gap-6 text-sm text-(--muted) md:flex-row">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-(--cyan) font-black text-[#04101b]">
            RA
          </span>
          <div>
            <b className="text-(--text)">David Reiner Alayo Laury</b>
            <p>Desarrollador de Software & Full Stack</p>
          </div>
        </div>
        <p></p>
        <div className="flex gap-3">
          <a
            className="badge rounded-xl p-3"
            href="https://github.com/Reiner89"
          >
            <Code2 size={18} />
          </a>
          <a
            className="badge rounded-xl p-3"
            href="https://linkedin.com/in/david-reiner-639490414"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            className="badge rounded-xl p-3"
            href="mailto:reineralayolaury@gmail.com"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
