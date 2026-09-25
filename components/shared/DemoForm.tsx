"use client";

import type { FormEvent, ReactNode } from "react";

// Shared across sites. No styling here: each site passes its own class names.
//
// Until a real form service is wired up (pass `endpoint` to DemoForm), submitting
// does nothing: no request is sent and no success message is shown. Each site
// says it is a demo in its footer.

type FormProps = {
  id?: string;
  className?: string;
  /** Form service URL (Formspree, Jotform, etc.). Leave unset on demo sites. */
  endpoint?: string;
  children: ReactNode;
};

export function DemoForm({ id, className, endpoint, children }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!endpoint) e.preventDefault();
  }

  return (
    <form
      id={id}
      className={className}
      action={endpoint}
      method={endpoint ? "post" : undefined}
      onSubmit={handleSubmit}
      data-demo={endpoint ? undefined : "not-connected"}
    >
      {children}
    </form>
  );
}

export function DemoSubmit({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
}
