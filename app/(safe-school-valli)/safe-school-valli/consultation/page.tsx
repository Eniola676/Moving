import type { Metadata } from "next";
import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { Footer, reveal } from "../../_components/Parts";
import { consultation, finalCta } from "../content";

export const metadata: Metadata = { title: "Book a principal consultation" };

export default function ConsultationPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1 className="load" style={{ "--d": "120ms" } as React.CSSProperties}>
            {consultation.title}
          </h1>
          <p className="load" style={{ "--d": "300ms" } as React.CSSProperties}>
            {consultation.sub}
          </p>
        </div>
      </header>

      <main className="section">
        <div className="wrap consult">
          <div {...reveal()}>
            <span className="eyebrow">What the 30 minutes covers</span>
            <h2>A conversation about your school, not a sales pitch.</h2>
            <div className="expect">
              {consultation.expect.map((e, i) => (
                <div key={e.title}>
                  <span className="dot">0{i + 1}</span>
                  <span>
                    <b>{e.title}</b>
                    <p>{e.text}</p>
                  </span>
                </div>
              ))}
            </div>
            <p className="scarcity">{finalCta.note}</p>
          </div>

          <DemoForm className="form reveal-form" id="consultation-form">
            <h2>Your details</h2>
            <div className="row">
              <div className="field">
                <label htmlFor="c-name">Full name</label>
                <input id="c-name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="c-role">Role</label>
                <select id="c-role" name="role" defaultValue={consultation.roles[0]}>
                  {consultation.roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="c-school">School</label>
                <input id="c-school" name="school" autoComplete="organization" required />
              </div>
              <div className="field">
                <label htmlFor="c-state">State or territory</label>
                <select id="c-state" name="state" defaultValue="WA">
                  {consultation.states.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="c-setting">School setting</label>
                <select id="c-setting" name="setting" defaultValue={consultation.settings[1]}>
                  {consultation.settings.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-size">Approximate enrolment</label>
                <input id="c-size" name="enrolment" inputMode="numeric" placeholder="e.g. 450" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-msg">What’s prompting this conversation?</label>
              <textarea id="c-msg" name="message" placeholder="Escalations, staff confidence, family relationships, upcoming requirements…" />
            </div>
            <DemoSubmit className="btn btn-teal">
              Request my consultation <span className="arr" aria-hidden="true">→</span>
            </DemoSubmit>
            <small>We’ll be in touch to arrange a time that suits you.</small>
          </DemoForm>
        </div>
      </main>

      <Footer withCta={false} />
    </>
  );
}
