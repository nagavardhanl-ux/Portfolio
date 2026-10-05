"use client";

import { useState, type FormEvent } from "react";
import { contact, formspreeId } from "@/lib/config";
import { Alert, ArrowRight, Check } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const validate = (data: FormData): Errors => {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errors.name = "Add your name.";
  if (!email) errors.email = "Add your email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "That email doesn't look right.";
  if (message.length < 10) errors.message = "A sentence or two is enough.";
  return errors;
};

/** Posts to Formspree. Until formspreeId is set it shows as not connected. */
export default function ContactForm() {
  const connected = Boolean(formspreeId);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!connected) return;

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const busy = status === "submitting";
  const field = (name: keyof Errors) => ({
    name,
    id: `cf-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `cf-${name}-err` : undefined,
    disabled: busy,
    className: "input",
    onInput: () => errors[name] && setErrors((x) => ({ ...x, [name]: undefined })),
  });

  if (status === "success") {
    return (
      <div className="notice" data-tone="success" role="status">
        <Check />
        <div>
          <p>Thanks. Your message is in, and I&apos;ll reply by email.</p>
          <button type="button" className="link" style={{ background: "none", border: 0, padding: 0, cursor: "pointer", marginTop: 8 }} onClick={() => setStatus("idle")}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby={connected ? undefined : "cf-offline"}>
      {!connected && (
        <p className="notice" id="cf-offline">
          <Alert />
          <span>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Form not connected yet.</strong> Email{" "}
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>{" "}
            in the meantime.
          </span>
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input {...field("name")} type="text" autoComplete="name" required />
          {errors.name && (
            <p className="field__error" id="cf-name-err">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" required />
          {errors.email && (
            <p className="field__error" id="cf-email-err">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-company">
          Company <span>(optional)</span>
        </label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" className="input" disabled={busy} />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea {...field("message")} required />
        {errors.message && (
          <p className="field__error" id="cf-message-err">
            {errors.message}
          </p>
        )}
      </div>

      {/* Spam trap for Formspree; hidden from people and assistive tech. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

      {status === "error" && (
        <p className="notice" data-tone="error" role="alert">
          <Alert />
          <span>
            That didn&apos;t send. Try again, or email{" "}
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </span>
        </p>
      )}

      <div>
        <button type="submit" className="btn btn--primary" disabled={!connected || busy} aria-busy={busy}>
          {busy ? (
            <>
              <span className="spinner" aria-hidden="true" /> Sending
            </>
          ) : (
            <>
              Send message <ArrowRight />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
