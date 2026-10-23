/* eslint-disable @next/next/no-img-element */
import { Check, CtaButton, Footer, reveal } from "../_components/Parts";
import { brand, hero, principals, problem, streams, students, testimonials, valli } from "./content";

export default function HomePage() {
  const [principal, psychologist] = testimonials;
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow load" style={{ "--d": "100ms" } as React.CSSProperties}>
                {brand.line}
              </span>
              <h1>
                <span className="load" style={{ "--d": "200ms" } as React.CSSProperties}>
                  {hero.title}
                </span>
                <em className="load" style={{ "--d": "380ms" } as React.CSSProperties}>
                  {hero.titleAccent}
                </em>
              </h1>
              <p className="hero-sub load" style={{ "--d": "520ms" } as React.CSSProperties}>
                {hero.sub}
              </p>
              <div className="hero-actions load" style={{ "--d": "640ms" } as React.CSSProperties}>
                <CtaButton variant="mint" />
              </div>
            </div>
            <div className="hero-media">
              <div className="zoom hero-img">
                <img src="/safe-school-valli/classroom.jpg" alt="A quiet classroom in afternoon light" />
              </div>
              <div className="hero-cards load" style={{ "--d": "900ms" } as React.CSSProperties}>
                <div className="quote-card">
                  <p>{streams.sub.split(".")[0]}.</p>
                  <span>{streams.title}</span>
                </div>
                <div className="belong-card">
                  <small>
                    {brand.name}
                    {brand.mark}
                  </small>
                  <b>{brand.line}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ============ 2. THE PRINCIPAL PROBLEM ============ */}
        <section className="section" id="problem">
          <div className="wrap problem">
            <div className="problem-copy" {...reveal()}>
              <span className="eyebrow">{problem.eyebrow}</span>
              <h2>{problem.title}</h2>
              {problem.body.map((p, i) => (
                <p key={p} className={i === problem.body.length - 1 ? "strong" : undefined}>
                  {p}
                </p>
              ))}
            </div>
            <div className="measures">
              {problem.measures.map((m, i) => (
                <div className="measure" key={m} {...reveal(i * 120)}>
                  <span>0{i + 1}</span>
                  <b>{m}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3. SOCIAL PROOF ============ */}
        <section className="section band">
          <div className="wrap">
            <span className="eyebrow" {...reveal()}>
              What schools say
            </span>
            <div className="band-grid">
              <figure className="big-quote" {...reveal(80)}>
                <span className="mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>{principal.quote}</blockquote>
                <figcaption className="cite">
                  <b>{principal.who}</b>
                  {principal.where}
                </figcaption>
              </figure>
              <div className="side-quote">
                <figure className="small-quote" {...reveal(200)}>
                  <blockquote>&ldquo;{psychologist.quote}&rdquo;</blockquote>
                  <figcaption className="cite">
                    <b>{psychologist.who}</b>
                    {psychologist.where}
                  </figcaption>
                </figure>
                <div className="zoom" {...reveal(320)}>
                  <img src="/safe-school-valli/desk.jpg" alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 4. WHO IS VALLI JONES ============ */}
        <section className="section" id="valli">
          <div className="wrap valli">
            <div className="valli-copy" {...reveal()}>
              <span className="eyebrow">{valli.eyebrow}</span>
              <h2>
                {valli.title}
                <em>{valli.titleAccent}</em>
              </h2>
              <p>{valli.intro}</p>
              <ul className="checks">
                {valli.angles.map((a) => (
                  <li key={a}>
                    <Check />
                    {a}
                  </li>
                ))}
              </ul>
              {valli.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <CtaButton variant="slate" />
            </div>
            <div className="valli-cards">
              <div className="v-card tall" {...reveal(100)}>
                <small>{brand.person}</small>
                <b>Autistic. Clinical psychologist. Both things matter.</b>
                <p>{valli.body[0]}</p>
              </div>
              {valli.facts.slice(0, 2).map((f, i) => (
                <div className={`v-card ${i === 0 ? "mint" : "sand"}`} key={f.label} {...reveal(220 + i * 120)}>
                  <small>{f.label}</small>
                  <span className="val">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. FOUR STREAMS ============ */}
        <section className="section mist" id="streams">
          <div className="wrap">
            <div className="streams-head" {...reveal()}>
              <div>
                <span className="eyebrow">{streams.eyebrow}</span>
                <h2>{streams.title}</h2>
              </div>
              <p className="lede">{streams.sub}</p>
            </div>
            <div className="timeline" aria-hidden="true" {...reveal(100)}>
              <span style={{ left: "12.5%" }} />
              <span style={{ left: "37.5%" }} />
              <span style={{ left: "62.5%" }} />
              <span style={{ left: "87.5%" }} />
            </div>
            <div className="stream-cards">
              {streams.items.map((s, i) => (
                <article className="stream" key={s.name} {...reveal(150 + i * 110)}>
                  <span className="num">0{i + 1}</span>
                  <h3>{s.name}</h3>
                  <p>{s.builtFor}</p>
                  <div className="tags">
                    {s.focus.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="center-cta" {...reveal()}>
              <CtaButton />
            </div>
          </div>
        </section>

        {/* ============ 6. WHAT PRINCIPALS GET ============ */}
        <section className="section" id="outcomes">
          <div className="wrap principals">
            <div className="zoom principals-img" {...reveal()}>
              <img src="/safe-school-valli/hallway.jpg" alt="A long, sunlit school corridor" loading="lazy" />
            </div>
            <div {...reveal(150)}>
              <span className="eyebrow">{principals.eyebrow}</span>
              <h2>{principals.title}</h2>
              <ul className="points">
                {principals.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="close-line">{principals.close}</p>
              <CtaButton variant="slate" />
            </div>
          </div>
        </section>

        {/* ============ 7. WHAT CHANGES FOR STUDENTS ============ */}
        <section className="section mist">
          <div className="wrap">
            <div className="students-head" {...reveal()}>
              <span className="eyebrow">{students.eyebrow}</span>
              <p className="lead">{students.lead}</p>
              <p className="intro">{students.intro}</p>
            </div>
            <div className="student-cards">
              {students.points.map((s, i) => (
                <div className="s-card" key={s.title} {...reveal(i * 90)}>
                  <span className="dot">0{i + 1}</span>
                  <div>
                    <b>{s.title}</b>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="safe-line" {...reveal()}>
              {students.close}
            </p>
          </div>
        </section>
      </main>

      {/* ============ 8. FINAL CTA + FOOTER ============ */}
      <Footer />
    </>
  );
}
