import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type ContactData = {
  name: string;
  email: string;
  message: string;
};

const DEFAULT_CONTACT_EMAIL = "reineralayollaury@gmail.com";
const REQUIRED_SMTP_ENV = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"] as const;

function normalizePayload(payload: ContactPayload): ContactData {
  return {
    name: String(payload.name ?? "").trim(),
    email: String(payload.email ?? "").trim(),
    message: String(payload.message ?? "").trim(),
  };
}

function hasRequiredFields(data: ContactData) {
  return Boolean(data.name && data.email && data.message);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getMissingSmtpEnv() {
  return REQUIRED_SMTP_ENV.filter((key) => !process.env[key]);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br />");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const data = normalizePayload(payload);

    if (!hasRequiredFields(data)) {
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_FIELDS",
          message: "Completa tu nombre, correo y mensaje para poder contactarte.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_EMAIL",
          message: "Ingresa un correo válido para poder responderte.",
        },
        { status: 400 },
      );
    }

    const missingEnv = getMissingSmtpEnv();

    if (missingEnv.length > 0) {
      console.error("Contact form SMTP config is incomplete:", missingEnv.join(", "));

      return NextResponse.json(
        {
          ok: false,
          code: "SMTP_CONFIG_MISSING",
          message: "El envío de correos todavía no está configurado en el servidor.",
        },
        { status: 500 },
      );
    }

    const smtpHost = process.env.SMTP_HOST!;
    const smtpUser = process.env.SMTP_USER!;
    const smtpPass = process.env.SMTP_PASS!;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const recipient = process.env.CONTACT_TO ?? DEFAULT_CONTACT_EMAIL;
    const sender = process.env.CONTACT_FROM ?? `Portafolio Web <${smtpUser}>`;
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeMessage = escapeHtml(data.message);

    await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `Nuevo contacto desde el portafolio - ${data.name}`,
      text: [
        "Nuevo mensaje desde el portafolio",
        "",
        `Nombre: ${data.name}`,
        `Correo: ${data.email}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Correo:</strong> ${safeEmail}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Listo, tu mensaje fue enviado. Te responderé pronto.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      {
        ok: false,
        code: "SEND_FAILED",
        message: "No se pudo enviar el mensaje en este momento.",
      },
      { status: 500 },
    );
  }
}
