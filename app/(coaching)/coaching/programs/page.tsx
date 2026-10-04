/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Footer, MobileQuizBar, Nav, QuizButton } from "../../_components/Chrome";
import { Check, Hook } from "../../_components/Icons";
import { paths, testimonials } from "../content";

export const metadata: Metadata = { title: "Compare the ACC and PCC paths" };

const rows: { label: string; key: keyof (typeof paths)["acc"] }[] = [
  { label: "Credential", key: "credential" },
  { label: "ICF education", key: "level" },
  { label: "Training", key: "trainingHours" },
  { label: "Mentor coaching", key: "mentorHours" },
  { label: "To apply to ICF", key: "experience" },
  { label: "Typical timeline", key: "timeline" },
  { label: "Best for", key: "bestFor" },
  { label: "Investment", key: "price" },
];

export default function ProgramsPage() {
  const story = testimonials[0];
  return (
    <>
      <Nav />
      <main className="page">
        <section className="hero" style={{ paddingBottom: 48 }}>
          <span className="eyebrow">
            <Hook /> Path to ICF Certification
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
            <span className="line">ACC Or PCC?</span>
            <span className="line grey">Compare The Paths.</span>
          </h1>
          <p className="hero-sub">Both paths are ICF-accredited and include mentor coaching and exam prep. Here&apos;s how they differ.</p>
          <div className="hero-actions">
            <QuizButton />
          </div>
        </section>

        <div className="compare-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Detail</span>
                </th>
                <th scope="col">
                  <small>{paths.acc.level}</small>
                  {paths.acc.name}
                </th>
                <th scope="col" className="pcc">
                  <small>{paths.pcc.level}</small>
                  {paths.pcc.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key}>
                  <th scope="row">{r.label}</th>
                  <td>
                    {String(paths.acc[r.key])}
                    {r.key === "price" && <div style={{ color: "var(--muted)", fontSize: 14 }}>{paths.acc.plan}</div>}
                  </td>
                  <td>
                    {String(paths.pcc[r.key])}
                    {r.key === "price" && <div style={{ color: "var(--muted)", fontSize: 14 }}>{paths.pcc.plan}</div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="paths-note">ICF requirements summarized from ICF credentialing rules. Check coachingfederation.org for the latest details.</p>

        <section className="section detail-grid">
          {(["acc", "pcc"] as const).map((id) => {
            const p = paths[id];
            return (
              <article className={`detail${id === "pcc" ? " featured" : ""}`} id={id} key={id}>
                <span className="level">{p.level}</span>
                <h2>{p.name}</h2>
                <p className="best">{p.bestFor}</p>
                <ul className="ticks">
                  {p.includes.map((i) => (
                    <li key={i}>
                      <Check /> {i}
                    </li>
                  ))}
                </ul>
                <div className="price">
                  <b>{p.price}</b>
                  <span>{p.plan}</span>
                </div>
                <div style={{ marginTop: 24 }}>
                  <QuizButton label="See if it fits me" variant={id === "pcc" ? "gold" : "dark"} />
                </div>
              </article>
            );
          })}
        </section>

        <section className="cohort" id="stories">
          <img src="/coaching/cohort.jpg" alt="A Halden cohort celebrating during a practice lab" loading="lazy" />
          <div className="cohort-card">
            <p>&ldquo;{story.quote}&rdquo;</p>
            <span>
              {story.name} · {story.role}
            </span>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="final">
            <h2>
              Still Deciding?
              <br />
              <span className="grey">Let The Quiz Pick.</span>
            </h2>
            <p>Six questions, an instant recommendation and a free call with an advisor if you want one.</p>
            <QuizButton label="Take the 2-minute quiz" />
          </div>
        </section>
      </main>
      <Footer />
      <MobileQuizBar />
    </>
  );
}
