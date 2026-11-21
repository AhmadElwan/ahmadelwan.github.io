"use client";

import { useState, type FormEvent } from "react";

type Status = { message: string; kind: "" | "ok" | "error" };

type ContactFormProps = {
  endpoint: string;
  accessKey: string;
  to: string;
};

const SENT = "Thanks, your message is in. I will reply by email.";

export function ContactForm({ endpoint, accessKey, to }: ContactFormProps) {
  const [status, setStatus] = useState<Status>({ message: "", kind: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      setStatus({ message: SENT, kind: "ok" });
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus({ message: "Please fill in all fields.", kind: "error" });
      return;
    }

    const subject = `Portfolio message from ${name}`;

    if (!endpoint) {
      const body = `${message}\n\n${name} (${email})`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ message: "Opening your email app…", kind: "" });
      return;
    }

    setSending(true);
    setStatus({ message: "Sending…", kind: "" });
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          subject,
          from_name: "Portfolio contact form",
          ...(accessKey ? { access_key: accessKey } : {}),
        }),
      });
      const result: { success?: boolean } = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error("Request failed");
      setStatus({ message: SENT, kind: "ok" });
      form.reset();
    } catch {
      setStatus({ message: `Something went wrong. Please email me directly at ${to}.`, kind: "error" });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="contact-form" className="s-form" onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={4} required maxLength={4000} />
      </label>
      <label className="hp" aria-hidden="true">
        <span>Leave this empty</span>
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={sending}>
        Send message
      </button>
      <p id="form-status" className="s-status" role="status" aria-live="polite" data-kind={status.kind}>
        {status.message}
      </p>
    </form>
  );
}
