"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ContactResponse = {
  ok?: boolean;
  code?: string;
  message?: string;
};

const FALLBACK_EMAIL = "reineralayollaury@gmail.com";

function getFriendlyError(data?: ContactResponse) {
  if (data?.code === "INVALID_FIELDS") {
    return "Revisa que tu nombre, correo y mensaje estén completos.";
  }

  if (data?.code === "INVALID_EMAIL") {
    return "El correo ingresado no parece válido.";
  }

  if (data?.code === "SMTP_CONFIG_MISSING") {
    return `El formulario todavía no tiene configurado el correo de salida. Escríbeme a ${FALLBACK_EMAIL} mientras lo dejamos listo.`;
  }

  return data?.message ?? `No se pudo enviar desde el formulario. Escríbeme a ${FALLBACK_EMAIL} mientras lo reviso.`;
}

async function readContactResponse(response: Response) {
  try {
    return (await response.json()) as ContactResponse;
  } catch {
    return undefined;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await readContactResponse(response);

      if (response.ok) {
        setStatus("success");
        setMessage(data?.message ?? "Listo, tu mensaje fue enviado. Te responderé pronto.");
        form.reset();
        return;
      }

      setStatus("error");
      setMessage(getFriendlyError(data));
    } catch {
      setStatus("error");
      setMessage(`No hubo conexión con el servidor. Inténtalo otra vez o escríbeme a ${FALLBACK_EMAIL}.`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Nombre</label>
        <input className="input" name="name" placeholder="Tu nombre completo" required />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Correo</label>
        <input className="input" name="email" type="email" placeholder="tu.correo@email.com" required />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Mensaje</label>
        <textarea className="input min-h-32 resize-none" name="message" placeholder="Cuéntame sobre la oportunidad o proyecto..." required />
      </div>
      <button className="btn btn-primary w-full" disabled={status === "loading"}>
        <Send size={17} /> {status === "loading" ? "Enviando mensaje..." : "Enviar mensaje"}
      </button>
      {message && <p className={status === "success" ? "text-sm text-[var(--green)]" : "text-sm text-red-300"}>{message}</p>}
    </form>
  );
}
