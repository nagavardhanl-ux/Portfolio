"use client";

import { useState, type FormEvent } from "react";
import { contact, web3formsAccessKey } from "@/lib/config";
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

/**
 * Web3Forms contact form integration.
 * Free plan delivers submissions directly to email via https://api.web3forms.com/submit
 */
export default function ContactForm() {
  const connected = Boolean(web3formsAccessKey);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await res.json();

      if (res.ok && result.success) {
        form.reset();
        setStatus("success");
      } else {
        setErrorMessage(result.message || "Failed to submit form.");
        setStatus("error");
      }
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
          <p>Thanks! Your message has been sent, and I&apos;ll get back to you shortly.</p>
          <button
            type="button"
            className="link"
            style={{ background: "none", border: 0, padding: 0, cursor: "pointer", marginTop: 8 }}
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby={connected ? undefined : "cf-offline"}>
      {/* Hidden Web3Forms configuration fields */}
      <input type="hidden" name="access_key" value={web3formsAccessKey} />
      <input type="hidden" name="subject" value="New Portfolio Inquiry from Nagavardhan Lella Site" />
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />

      {/* Bot detection honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {!connected && (
        <p className="notice" id="cf-offline">
          <Alert />
          <span>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Web3Forms Access Key not set.</strong> Get a free key at{" "}
            <a className="link" href="https://web3forms.com" target="_blank" rel="noopener noreferrer">
              web3forms.com
            </a>{" "}
            and paste it into <code style={{ fontSize: "0.85em", color: "var(--accent)" }}>web3formsAccessKey</code> in <code style={{ fontSize: "0.85em" }}>src/lib/config.ts</code> or directly reach out at{" "}
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input {...field("name")} type="text" autoComplete="name" placeholder="Your name" required />
          {errors.name && (
            <p className="field__error" id="cf-name-err">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" placeholder="you@domain.com" required />
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
        <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="Your company or project" className="input" disabled={busy} />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea {...field("message")} placeholder="What are you looking to build or discuss?" required />
        {errors.message && (
          <p className="field__error" id="cf-message-err">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="notice" data-tone="error" role="alert">
          <Alert />
          <span>
            {errorMessage || "That didn't send."} Try again, or email{" "}
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
              <span className="spinner" aria-hidden="true" /> Sending...
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
