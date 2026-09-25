import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { Features, ClosingCta } from "../_components/Sections";
import { business, hero, steps, statement, stats, audiences, faqs } from "./content";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>{hero.title}</h1>
            <p className="hero-sub">{hero.sub}</p>

            <DemoForm className="quote" id="quote">
              <div className="quote-cell quote-left">
                <div className="row">
                  <div className="field">
                    <label htmlFor="from">From ZIP</label>
                    <input id="from" name="from" inputMode="numeric" maxLength={5} placeholder="78216" />
                  </div>
                  <div className="field">
                    <label htmlFor="to">To ZIP</label>
                    <input id="to" name="to" inputMode="numeric" maxLength={5} placeholder="78209" />
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="date">Move date</label>
                    <input id="date" name="date" type="date" />
                  </div>
                  <div className="field">
                    <label htmlFor="size">Home size</label>
                    <select id="size" name="size" defaultValue="2 bedroom">
                      {hero.homeSizes.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="quote-cell quote-right">
                <div className="price">
                  Moving special
                  <b>
                    {business.hourlySpecial}
                    <span style={{ fontSize: 14, color: "var(--muted)", letterSpacing: 0 }}> /hour</span>
                  </b>
                </div>
                <div className="field">
                  <label htmlFor="phone">Your phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(210) 555-0123" />
                </div>
                <div className="foot">
                  <small>
                    No stair fees.
                    <br />
                    Blanket wrap included.
                  </small>
                  <DemoSubmit className="btn btn-dark">
                    Get a quote <span className="arrow">→</span>
                  </DemoSubmit>
                </div>
              </div>
            </DemoForm>

            <div className="hero-meta">
              <span>
                <span className="stars">{business.rating.stars}</span> {business.rating.score} · {business.rating.count}{" "}
                {business.rating.source}
              </span>
              {business.licenses.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <span>Open 7 days</span>
            </div>
          </div>

          <div className="hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/moving/hero.jpg" alt="Movers carrying furniture from a moving truck" />
            <div className="hero-badge">
              <strong>{business.yearsInBusiness} years</strong>
              moving {business.city}
            </div>
          </div>
        </div>
      </header>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how">
        <div className="wrap split">
          <div>
            <h2>How your move works in three steps.</h2>
            <p className="lede">
              The crew shows up with everything they need. You don&apos;t rent dollies, buy tape or hunt for blankets.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-visual">
                <div className="mini">
                  <div className="mini-title">
                    26 ft truck <span className="dot"></span>
                  </div>
                  <div className="mini-sub">Arriving 8:00 – 9:00 AM</div>
                  <svg className="truck-svg" viewBox="0 0 200 70" fill="none" aria-hidden="true">
                    <rect x="4" y="10" width="124" height="44" rx="3" fill="#1A1714" />
                    <path d="M128 24h34l18 16v14h-52z" fill="#3A352F" />
                    <path d="M136 29h22l11 10h-33z" fill="#D8D4CC" />
                    <circle cx="36" cy="56" r="9" fill="#1A1714" stroke="#fff" strokeWidth="3" />
                    <circle cx="156" cy="56" r="9" fill="#1A1714" stroke="#fff" strokeWidth="3" />
                    <text x="14" y="37" fill="#F2EFEA" fontFamily="var(--font-inter)" fontSize="10" fontWeight="600" letterSpacing="1">
                      SWIFT HAUL
                    </text>
                  </svg>
                  <ul>
                    <li><span className="tick">✓</span>Straps</li>
                    <li><span className="tick">✓</span>Moving blankets</li>
                    <li><span className="tick">✓</span>Dollies</li>
                  </ul>
                </div>
              </div>
              <h3>{steps[0].title}</h3>
              <p>{steps[0].text}</p>
            </div>

            <div className="step">
              <div className="step-visual dark">
                <div className="mini mini-dark">
                  <div className="mini-sub">Crew notes</div>
                  <blockquote>
                    &quot;Sofa and dresser blanket-wrapped. Load stacked heavy to light, strapped every 4 ft. Nothing shifts.&quot;
                  </blockquote>
                  <div className="bar">
                    <span>2 movers · 1 truck</span>
                    <span className="chip">Loaded</span>
                  </div>
                </div>
              </div>
              <h3>{steps[1].title}</h3>
              <p>{steps[1].text}</p>
            </div>

            <div className="step">
              <div className="step-visual photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/moving/boxes.jpg" alt="Stacked moving boxes on pallets" loading="lazy" />
                <div className="photo-card">
                  <div>
                    <b>Delivered</b>
                    <span>Beds set up · washer connected</span>
                  </div>
                  <span className="tick">✓</span>
                </div>
              </div>
              <h3>{steps[2].title}</h3>
              <p>{steps[2].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <Features
        tightTop
        title="What's included in every move."
        lede="These are included whether you book two hours or a whole day."
      />

      {/* ============ STATEMENT (video background) ============ */}
      <section className="statement">
        <video
          className="statement-video"
          src="/moving/statement.mp4"
          poster="/moving/statement-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="wrap">
          <p>
            {statement.lead} <span>{statement.rest}</span>
          </p>
        </div>
      </section>

      {/* ============ WHO ============ */}
      <section>
        <div className="wrap who-grid">
          <div>
            <h2>Who moves with us, from studio apartments to full offices.</h2>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="who-list">
            {audiences.map((a) => (
              <div className="who-item" key={a.title}>
                <div className="eyebrow">{a.eyebrow}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" style={{ paddingTop: 20 }}>
        <div className="wrap split">
          <div>
            <h2>Moving questions, answered.</h2>
            <p className="lede">Something not covered here? Call {business.phone}. We answer seven days a week.</p>
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

      <ClosingCta secondary={{ label: "See pricing", href: "/services#pricing" }} />
    </>
  );
}
