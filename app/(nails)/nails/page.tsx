/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Closing } from "../_components/Closing";
import { bookCta, business, categories, feature, hero, mission, promises, reviews } from "./content";

export default function HomePage() {
  return (
    <>
      <section className="panel joined">
        {/* ============ HERO ============ */}
        <div className="hero">
          <img className="hero-img" src="/nails/hero.jpg" alt="Hands with a soft lilac gel manicure" />
          <h1>
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <Link href={hero.offer.href} className="offer-card">
            <div className="offer-top">
              <span className="circle arrow">→</span>
              <span className="sale">{hero.offer.tag}</span>
            </div>
            <img src={hero.offer.image} alt="Nail polish bottles" />
            <b>{hero.offer.title}</b>
          </Link>

          <figure className="review-chip">
            <img src={hero.review.image} alt="" />
            <p>&ldquo;{hero.review.quote}&rdquo;</p>
          </figure>
        </div>

        {/* ============ MISSION ============ */}
        <div className="mission">
          <div className="mission-label">{mission.label}</div>
          <div>
            <p>{mission.text}</p>
            <Link href={mission.link.href} className="btn btn-outline btn-sm">
              {mission.link.label}
            </Link>
          </div>
        </div>

        {/* ============ CATEGORIES ============ */}
        <div className="tiles">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className={`tile tone-${c.tone}`}>
              <span className="tile-head">
                <span>( {c.label} )</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </span>
              <img src={c.image} alt="" loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      {/* ============ WORDMARK FEATURE ============ */}
      <section className="panel feature">
        <div className="feature-top">
          <span className="pill">{feature.chip}</span>
          <div className="feature-tags">
            {feature.tags.map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="feature-stage">
          <div className="wordmark" aria-hidden="true">
            {business.wordmark}
            <span className="dot">·</span>
          </div>
          <img className="feature-img" src={feature.image} alt="A fresh soft-pink gel manicure" loading="lazy" />
          <div className="feature-card">
            <div className="eyebrow">{feature.eyebrow}</div>
            <h3>{feature.title}</h3>
            <div className="row">
              <span className="price">{feature.price}</span>
              <Link href={bookCta.href} className="btn btn-sm">
                {bookCta.label} <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="promises">
          {promises.map((p) => (
            <div className="promise" key={p.value}>
              <b>{p.value}</b>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="panel" id="reviews">
        <div className="section-head">
          <h2>Kind words from the chair.</h2>
          <p>A few notes from clients. Book a visit and see why most of them come back every three weeks.</p>
        </div>
        <div className="reviews">
          {reviews.map((r) => (
            <figure className="review" key={r.name}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption>
                <b>{r.name}</b>
                {r.service}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Closing />
    </>
  );
}
