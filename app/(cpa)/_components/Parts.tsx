import Link from "next/link";
import { Icon } from "./Icons";
import { bookCta, business, closing, faqs, oregonTaxes } from "../cpa/content";

/** Pill button with an attached lime chevron circle, as in the design reference. */
export function CtaLink({
  href = bookCta.href,
  label = bookCta.label,
  variant = "light",
}: {
  href?: string;
  label?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link href={href} className={`cta cta-${variant}`}>
      <span className="cta-label">{label}</span>
      <span className="cta-icon" aria-hidden="true">»</span>
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <Icon name="mark" size={12} />
      {children}
    </span>
  );
}

export function CallBlock({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a href={business.phoneHref} className={`call call-${tone}`}>
      <span className="call-icon">
        <Icon name="phone" size={18} />
      </span>
      <span>
        <small>Call us</small>
        {business.phone}
      </span>
    </a>
  );
}

export function OregonTaxes() {
  return (
    <section className="oregon" id="oregon">
      <div className="wrap oregon-grid">
        <div>
          <Eyebrow>{oregonTaxes.eyebrow}</Eyebrow>
          <h2>{oregonTaxes.title}</h2>
          <p className="lede">{oregonTaxes.text}</p>
          <p className="note">{oregonTaxes.note}</p>
        </div>
        <dl className="tax-list">
          {oregonTaxes.rows.map((r) => (
            <div className="tax-row" key={r.name}>
              <dt>{r.name}</dt>
              <dd>{r.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section cream" id="faq">
      <div className="wrap faq-grid">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2>Oregon tax questions, answered</h2>
          <p className="lede">Still unsure? Call {business.phone} and a CPA will call you back the same day.</p>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="closing">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/cpa/hood.jpg" alt="" className="closing-img" loading="lazy" />
      <div className="wrap closing-inner">
        <h2>{closing.title}</h2>
        <div>
          <p>{closing.text}</p>
          <div className="closing-actions">
            <CtaLink />
            <CallBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ title, sub, crumb }: { title: string; sub: string; crumb: string }) {
  return (
    <header className="page-header">
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Home</Link> <span aria-hidden="true">»</span> {crumb}
        </p>
        <h1>{title}</h1>
        <p className="page-sub">{sub}</p>
      </div>
    </header>
  );
}
