import React, { useEffect, useRef, useState } from "react";

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const fabRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string; msg?: string }>({});

  // Inert the rest of the page when dialog open
  useEffect(() => {
    const root = document.querySelector("main") || document.body;
    if (!root) return;
    if (open) {
      root.setAttribute("inert", "");
      root.setAttribute("aria-hidden", "true");
    } else {
      root.removeAttribute("inert");
      root.removeAttribute("aria-hidden");
    }
    return () => {
      root.removeAttribute("inert");
      root.removeAttribute("aria-hidden");
    };
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current!;
    const focusable = () => getFocusable(dialog);

    // focus first field
    const first = focusable()[0];
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        fabRef.current?.focus();
      } else if (e.key === "Tab") {
        const els = focusable();
        if (!els.length) return;
        const firstEl = els[0];
        const lastEl = els[els.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function getFocusable(root: HTMLElement | null) {
    if (!root) return [] as HTMLElement[];
    const sel =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea, [role="checkbox"]';
    return Array.from(root.querySelectorAll<HTMLElement>(sel)).filter(
      (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
    );
  }

  function validate() {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email.";
    if (!msg.trim()) errs.msg = "Please add a brief message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      // focus the first invalid field
      const fields = [
        { id: "chat-name", ok: !errors.name },
        { id: "chat-email", ok: !errors.email },
        { id: "chat-msg", ok: !errors.msg },
      ];
      const firstInvalid = fields.find((f) => !f.ok);
      if (firstInvalid) document.getElementById(firstInvalid.id)?.focus();
      return;
    }
    try {
      setSubmitting(true);
      // Simulate request
      await new Promise((r) => setTimeout(r, 500));
      setStatus("Thanks! We’ll get back to you shortly.");
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        ref={fabRef}
        type="button"
        aria-haspopup="dialog"
        aria-controls="support-chat-dialog"
        aria-expanded={open}
        className="fixed bottom-6 right-6 rounded-full px-4 py-3 text-white bg-blue-600 shadow focus:outline-none focus:ring"
        onClick={() => setOpen(true)}
      >
        Chat
      </button>

      {/* Modal overlay + dialog */}
      {open && (
        <div
          aria-hidden="false"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) {
              setOpen(false);
              fabRef.current?.focus();
            }
          }}
        >
          <div
            ref={dialogRef}
            id="support-chat-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-title"
            aria-describedby="chat-description chat-status"
            className="w-full max-w-md rounded-xl bg-white p-4 shadow-lg focus:outline-none focus:ring"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="chat-title" className="text-lg font-semibold">
                  Contact Support
                </h2>
                <p id="chat-description" className="text-sm text-gray-600">
                  Send us a note and we’ll reply by email.
                </p>
              </div>
              <button
                type="button"
                className="rounded-md border px-2 py-1 hover:bg-gray-50 focus:outline-none focus:ring"
                onClick={() => {
                  setOpen(false);
                  fabRef.current?.focus();
                }}
              >
                Close
              </button>
            </div>

            {/* Live status region linked via aria-describedby */}
            <div
              id="chat-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="mt-2 min-h-[1.25rem] text-sm"
            >
              {status && <p>{status}</p>}
            </div>

            <form className="mt-3 space-y-3" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="chat-name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="chat-name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "chat-name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="chat-name-error"
                    role="alert"
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="chat-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="chat-email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "chat-email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="chat-email-error"
                    role="alert"
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="chat-msg" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="chat-msg"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  aria-invalid={!!errors.msg}
                  aria-describedby={errors.msg ? "chat-msg-error" : undefined}
                />
                {errors.msg && (
                  <p id="chat-msg-error" role="alert" className="mt-1 text-sm text-red-600">
                    {errors.msg}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  className="rounded-md border px-3 py-2 hover:bg-gray-50 focus:outline-none focus:ring"
                  onClick={() => {
                    setOpen(false);
                    fabRef.current?.focus();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-md bg-blue-600 px-3 py-2 text-white disabled:opacity-60 focus:outline-none focus:ring"
                >
                  {submitting ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
