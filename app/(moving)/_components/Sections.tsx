import Link from "next/link";
import { business, cta, features } from "../moving/content";

type FeaturesProps = { id?: string; title: string; lede: string; tightTop?: boolean };

export function Features({ id, title, lede, tightTop }: FeaturesProps) {
  return (
    <section id={id} style={tightTop ? { paddingTop: 20 } : undefined}>
      <div className="wrap">
        <div className="head-block">
          <h2>{title}</h2>
          <p className="lede">{lede}</p>
        </div>
        <div className="features">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta({ secondary }: { secondary?: { label: string; href: string } }) {
  return (
    <section className="cta">
      <div className="wrap cta-grid">
        <h2>{cta.title}</h2>
        <div>
          <p>{cta.text}</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-light">
              Get a free quote <span className="arrow">→</span>
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="btn btn-ghost-dark">
                {secondary.label}
              </Link>
            ) : (
              <a href={business.phoneHref} className="btn btn-ghost-dark">
                Call {business.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
