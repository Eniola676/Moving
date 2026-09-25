/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Icon } from "../_components/Icons";
import { CallBlock, Closing, CtaLink, Eyebrow, Faq, OregonTaxes } from "../_components/Parts";
import { about, approach, business, hero, services, testimonials } from "./content";

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <img className="hero-img" src="/cpa/hero.jpg" alt="The Basalt & Pine team in the office" />
        <div className="wrap">
          <span className="rating">
            <b>{business.rating.score}</b>
            <Stars />
            {business.rating.count} {business.rating.source}
          </span>
          <h1>
            {hero.titleLead} <em>{hero.titleHighlight}</em>
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <CtaLink />
            <CallBlock />
          </div>
        </div>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="section cream">
        <div className="wrap">
          <div className="split-head">
            <div>
              <Eyebrow>{approach.eyebrow}</Eyebrow>
              <h2>{approach.title}</h2>
            </div>
            <p className="lede">{approach.text}</p>
          </div>
          <div className="cards">
            {approach.cards.map((c) => (
              <article className={`card card-${c.tone}`} key={c.title}>
                <Icon name={c.icon} size={44} className="card-icon" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="notch">
                  <Link href={c.href}>
                    Explore more <span aria-hidden="true">»</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section">
        <div className="wrap about">
          <div className="about-media">
            <img className="big" src="/cpa/team.jpg" alt="Basalt & Pine accountants reviewing a client's books" loading="lazy" />
            <div className="stat-card">
              <span className="tick">
                <Icon name="check" size={18} />
              </span>
              <b>{about.stat.value}</b>
              <span>{about.stat.label}</span>
            </div>
            <img className="small" src="/cpa/calc.jpg" alt="Working through a return with a calculator" loading="lazy" />
          </div>

          <div className="about-copy">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2>{about.title}</h2>
            <p className="lede">{about.text}</p>
            <div className="about-row">
              <CtaLink href="/services" label="Our services" />
              <div className="person">
                <img src={business.founder.image} alt="" />
                <div>
                  <b>{business.founder.name}</b>
                  <span>{business.founder.role}</span>
                </div>
              </div>
            </div>
            <div className="about-cards">
              <div className="mini">
                <Stars size={16} />
                <div className="score">
                  {business.rating.score}
                  <small> /5.0</small>
                </div>
                <p>Average client rating</p>
              </div>
              <div className="mini">
                <h3>{about.skillsTitle}</h3>
                <div className="chips">
                  {about.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section cream">
        <div className="wrap">
          <div className="split-head">
            <div>
              <Eyebrow>Our services</Eyebrow>
              <h2>Accounting services for Oregon, start to finish</h2>
            </div>
            <div style={{ justifySelf: "end" }}>
              <CtaLink href="/services" label="All services" />
            </div>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link href={`/services#${s.id}`} className="service" key={s.id}>
                <span className="service-icon">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="more">
                  Learn more <span aria-hidden="true">»</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OregonTaxes />

      {/* ============ TESTIMONIALS ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split-head">
            <div>
              <Eyebrow>Client stories</Eyebrow>
              <h2>Oregon clients who sleep better in April</h2>
            </div>
            <p className="lede">
              {business.rating.score} stars from {business.rating.count} {business.rating.source}.
            </p>
          </div>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure className="quote" key={t.name}>
                <Stars />
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <b>{t.name}</b>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Closing />
    </>
  );
}
