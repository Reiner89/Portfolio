"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  ShieldCheck,
  X,
} from "lucide-react";

type Accent = "cyan" | "green" | "violet";

type PrivacyMask = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  masks?: PrivacyMask[];
};

export type ProjectCardData = {
  key: string;
  title: string;
  accent: Accent;
  text: string;
  items: string[];
  tags: string[];
  images: ProjectImage[];
  privacyProtected?: boolean;
};

const CLOSE_ANIMATION_MS = 180;

const accentClasses: Record<Accent, string> = {
  cyan: "text-(--cyan)",
  green: "text-(--green)",
  violet: "text-(--violet)",
};

function ProjectKicker({ accent }: { accent: Accent }) {
  return (
    <p
      className={`kicker ${accentClasses[accent]} before:hidden! after:hidden!`}
    >
      Proyecto
    </p>
  );
}

export function ProjectsSection({ projects }: { projects: ProjectCardData[] }) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardData | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalImages = selectedProject?.images.length ?? 0;
  const currentImage = selectedProject?.images[activeImage];

  const clearCloseTimeout = () => {
    if (!closeTimeoutRef.current) return;
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  };

  const closeModal = useCallback(() => {
    if (!selectedProject || isClosing) return;

    setIsClosing(true);
    clearCloseTimeout();

    closeTimeoutRef.current = setTimeout(() => {
      setSelectedProject(null);
      setActiveImage(0);
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, CLOSE_ANIMATION_MS);
  }, [isClosing, selectedProject]);

  const openModal = (project: ProjectCardData) => {
    clearCloseTimeout();
    setIsClosing(false);
    setSelectedProject(project);
    setActiveImage(0);
  };

  const showPreviousImage = useCallback(() => {
    if (!totalImages) return;
    setActiveImage((current) =>
      current === 0 ? totalImages - 1 : current - 1,
    );
  }, [totalImages]);

  const showNextImage = useCallback(() => {
    if (!totalImages) return;
    setActiveImage((current) =>
      current === totalImages - 1 ? 0 : current + 1,
    );
  }, [totalImages]);

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const html = document.documentElement;
    const body = document.body;
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.classList.add("modal-open");
    body.classList.add("modal-open");
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.classList.remove("modal-open");
      body.classList.remove("modal-open");
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.paddingRight = originalBodyPaddingRight;
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, selectedProject, showNextImage, showPreviousImage]);

  return (
    <section
      id="proyectos"
      className="section border-t border-(--line) bg-[#091020]"
    >
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="kicker">Portafolio</p>
          <h2 className="mt-4 text-4xl font-black">Proyectos Destacados</h2>
          <p className="mt-4 text-(--muted)">
            Una selección de soluciones web y móviles desarrolladas para
            optimizar procesos, integrar servicios en tiempo real y mejorar la
            gestión operativa de cada proyecto.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.key} className="card flex flex-col p-6">
              <ProjectKicker accent={project.accent} />
              <h3 className="mt-3 text-xl font-black">{project.title}</h3>
              <p className="mt-4 min-h-20 text-sm leading-6 text-(--muted)">
                {project.text}
              </p>
              <ul className="mt-5 grid gap-2 text-xs text-(--muted)">
                {project.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-(--cyan)" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#17263d] px-2.5 py-1 text-xs text-(--muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto border-t border-(--line) pt-5">
                <button
                  type="button"
                  className="btn btn-ghost w-full p-2! text-xs"
                  onClick={() => openModal(project)}
                >
                  <Images size={14} /> Ver detalle
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && currentImage && (
        <div
          className={`project-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(3,7,18,.82)] px-4 py-6 backdrop-blur-md ${
            isClosing ? "is-closing" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className={`card project-modal-panel flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden ${
              isClosing ? "is-closing" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-(--line) p-4 sm:p-6">
              <div className="min-w-0">
                <p className="kicker before:hidden! after:hidden!">
                  Detalle del proyecto
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 text-xl font-black sm:text-2xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-(--muted)">
                  {selectedProject.text}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost shrink-0 p-3!"
                aria-label="Cerrar modal"
                onClick={closeModal}
              >
                <X size={18} />
              </button>
            </div>

            <div className="project-modal-scroll min-h-0 overflow-y-auto p-4 sm:p-6">
              <div className="project-image-frame mx-auto flex w-full items-center justify-center rounded-2xl border border-(--line) bg-[#050b15] p-3 sm:p-4">
                <div
                  className="project-image-box relative w-full overflow-hidden rounded-xl bg-white/5"
                  style={{
                    aspectRatio: `${currentImage.width} / ${currentImage.height}`,
                    maxWidth: `min(100%, ${((currentImage.width / currentImage.height) * 64).toFixed(2)}vh)`,
                  }}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="h-full w-full object-contain"
                    loading="eager"
                  />
                  {currentImage.masks?.map((mask, index) => (
                    <span
                      key={`${currentImage.src}-mask-${index}`}
                      className="privacy-mask"
                      style={{
                        left: `${mask.left}%`,
                        top: `${mask.top}%`,
                        width: `${mask.width}%`,
                        height: `${mask.height}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="project-carousel-controls mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-(--muted)">
                {totalImages > 1 && (
                  <button
                    type="button"
                    className="btn btn-ghost project-carousel-button p-0!"
                    aria-label="Imagen anterior"
                    onClick={showPreviousImage}
                  >
                    <ChevronLeft size={18} />
                    Anterior
                  </button>
                )}

                <span className="project-carousel-counter rounded-full border border-(--line) bg-[#0a1323] px-4 py-2 font-bold text-(--text)">
                  Imagen {activeImage + 1} de {totalImages}
                </span>

                {totalImages > 1 && (
                  <button
                    type="button"
                    className="btn btn-ghost project-carousel-button p-0!"
                    aria-label="Imagen siguiente"
                    onClick={showNextImage}
                  >
                    Siguiente
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-(--muted)">
                {currentImage.alt}
              </p>

              {totalImages > 1 && (
                <div className="project-thumbnails-scroll mt-5 flex gap-3 overflow-x-auto pb-2">
                  {selectedProject.images.map((image, index) => (
                    <button
                      type="button"
                      key={image.src}
                      className={`h-20 w-32 shrink-0 overflow-hidden rounded-xl border bg-[#050b15] p-1 transition ${
                        index === activeImage
                          ? "border-(--cyan) opacity-100"
                          : "border-(--line) opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Ver captura ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="h-full w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
