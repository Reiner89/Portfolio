"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("success");
      setMessage("Mensaje enviado correctamente. Te responderé pronto.");
      form.reset();
      return;
    }

    setStatus("error");
    setMessage("No se pudo enviar el mensaje. Revisa tus variables SMTP o intenta más tarde.");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Nombre</label>
        <input className="input" name="name" placeholder="Tu nombre completo" required />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Email</label>
        <input className="input" name="email" type="email" placeholder="tu@email.com" required />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[var(--muted)]">Mensaje</label>
        <textarea className="input min-h-32 resize-none" name="message" placeholder="Cuéntame sobre la oportunidad o proyecto..." required />
      </div>
      <button className="btn btn-primary w-full" disabled={status === "loading"}>
        <Send size={17} /> {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {message && <p className={status === "success" ? "text-sm text-[var(--green)]" : "text-sm text-red-300"}>{message}</p>}
    </form>
  );
}
