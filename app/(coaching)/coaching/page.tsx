/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Footer, MobileQuizBar, Nav, QuizButton } from "../_components/Chrome";
import { BadgeMark, BigIcon, Hook } from "../_components/Icons";
import { badges, business, faqs, finalCta, hero, intro, method, paths, steps, testimonials } from "./content";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main className="page">
        {/* ============ HERO ============ */}
        <section className="hero">
          <span className="eyebrow">
            <Hook /> {hero.eyebrow}
          </span>
          <h1>
            <span className="line">{hero.line1}</span>
            <span className="line">
              {hero.line2a}
              <span className="tile" aria-hidden="true">
                <Hook />
              </span>
              <span className="grey">{hero.line2b}</span>
            </span>
            <span className="line grey">{hero.line3}</span>
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <QuizButton variant="gold" />
            <Link href="#paths" className="btn btn-light">
              Compare the two paths
            </Link>
          </div>
          <p className="hero-micro">{hero.micro}</p>
        </section>

        {/* ============ INTRO SPLIT ============ */}
        <section className="split">
          <div className="dark-card">
            <span className="eyebrow">
              <Hook /> {intro.eyebrow}
            </span>
            <h2>
              {intro.title[0]}
              <br />
              <span className="grey">{intro.title[1]}</span>
            </h2>
            <p>{intro.text}</p>
            <div className="card-actions">
              <QuizButton label="Find my path" />
              <Link href="/programs" className="btn btn-light">
                See the programs <Hook />
              </Link>
            </div>
            <Link href={intro.story.href} className="story">
              <img src={intro.story.image} alt="" />
              <div>
                <b>{intro.story.title}</b>
                <span>
                  Read her story <Hook />
                </span>
              </div>
            </Link>
          </div>

          <div className="photo-card">
            <img src={business.founder.image} alt={`${business.founder.name}, ${business.founder.role}`} />
            <span className="founder-tag">
              <b>{business.founder.name}</b> · {business.founder.role}
            </span>
            <div className="photo-stats">
              {intro.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>
                    {s.value}
                    <em>{s.unit}</em>
                  </b>
                  <p>{s.label}</p>
                  <small>↑ {s.foot}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BADGES ============ */}
        <div className="badges" aria-label="Accreditations and features">
          <div className="badges-track">
            {[...badges, ...badges].map((b, i) => (
              <span className="badge" key={i} aria-hidden={i >= badges.length}>
                <BadgeMark /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* ============ THE TWO PATHS ============ */}
        <section className="section" id="paths">
          <div className="center-head">
            <span className="eyebrow">
              <Hook /> The offer
            </span>
            <h2>
              Two Paths To ICF.
              <br />
              <span className="grey">Pick The One That Fits.</span>
            </h2>
            <p>Both include ICF-accredited training, all 10 hours of mentor coaching and exam prep. The difference is depth, and where you are starting from.</p>
          </div>
          <div className="paths">
            {(["acc", "pcc"] as const).map((id) => {
              const p = paths[id];
              return (
                <article className={`path${id === "pcc" ? " featured" : ""}`} key={id}>
                  <div className="path-top">
                    <span className="level">{p.level}</span>
                    {id === "pcc" && <span className="flag">Most chosen by senior leaders</span>}
                  </div>
                  <h3>{p.name}</h3>
                  <p className="best">{p.bestFor}</p>
                  <dl>
                    <div>
                      <dt>Credential</dt>
                      <dd>{p.credential}</dd>
                    </div>
                    <div>
                      <dt>Training</dt>
                      <dd>{p.trainingHours}</dd>
                    </div>
                    <div>
                      <dt>Mentor coaching</dt>
                      <dd>{p.mentorHours}</dd>
                    </div>
                    <div>
                      <dt>Timeline</dt>
                      <dd>{p.timeline}</dd>
                    </div>
                  </dl>
                  <div className="price">
                    <b>{p.price}</b>
                    <span>{p.plan}</span>
                  </div>
                  <QuizButton label="Is this my path?" variant={id === "pcc" ? "gold" : "dark"} />
                </article>
              );
            })}
          </div>
          <p className="paths-note">Not sure which one? The 2-minute quiz recommends a path based on your experience, goals and schedule.</p>
        </section>

        {/* ============ METHOD ============ */}
        <section className="section" id="method" style={{ paddingTop: 0 }}>
          <div className="center-head">
            <span className="eyebrow">
              <Hook /> {method.eyebrow}
            </span>
            <h2>
              {method.title[0]}
              <br />
              <span className="grey">{method.title[1]}</span>
            </h2>
            <p>{method.sub}</p>
          </div>
          <div className="method">
            {method.cards.map((c) => (
              <div className="m-card" key={c.title}>
                <h3>{c.title}</h3>
                <div className="icon">
                  <BigIcon name={c.icon} />
                </div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="steps-head">
            <div>
              <span className="eyebrow">
                <Hook /> How it works
              </span>
              <h2 style={{ marginTop: 18 }}>
                From Quiz
                <br />
                <span className="grey">To Credential.</span>
              </h2>
            </div>
            <p>Four steps, one team guiding you through each of them, and every hour counted toward your ICF application.</p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <small>
                  {s.num} · {s.label}
                </small>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="center-head">
            <span className="eyebrow">
              <Hook /> Graduates
            </span>
            <h2>
              Leaders Who Now
              <br />
              <span className="grey">Coach Leaders.</span>
            </h2>
          </div>
          <div className="reviews">
            {testimonials.map((t) => (
              <figure className="review" key={t.name}>
                <span className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <img src={t.image} alt="" />
                  <span>
                    <b>{t.name}</b>
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section faq-grid" id="faq" style={{ paddingTop: 0 }}>
          <div>
            <span className="eyebrow">
              <Hook /> Questions
            </span>
            <h2>
              ICF, Explained.
              <br />
              <span className="grey">Briefly.</span>
            </h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="final">
          <h2>
            {finalCta.title[0]}
            <br />
            <span className="grey">{finalCta.title[1]}</span>
          </h2>
          <p>{finalCta.text}</p>
          <QuizButton label="Take the 2-minute quiz" />
        </section>
      </main>
      <Footer />
      <MobileQuizBar />
    </>
  );
}
