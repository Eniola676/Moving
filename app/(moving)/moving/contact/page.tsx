import type { Metadata } from "next";
import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { business, contactPage, hero } from "../content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <h1>{contactPage.title}</h1>
          <p>{contactPage.sub}</p>
        </div>
      </header>

      <section>
        <div className="wrap contact-grid">
          <div>
            <h2>Talk to a mover, not a call center.</h2>
            <p className="lede">Call for the fastest quote. We answer seven days a week.</p>
            <dl className="contact-list" style={{ marginTop: 40 }}>
              <div className="contact-row">
                <dt>Phone</dt>
                <dd>
                  <a href={business.phoneHref}>{business.phone}</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Office</dt>
                <dd>
                  <span>{business.address.street}</span>
                  <span>{business.address.cityLine}</span>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Hours</dt>
                <dd>
                  {business.hours.map((h) => (
                    <span key={h.days}>
                      {h.days}: {h.time}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="contact-row">
                <dt>Licensed</dt>
                <dd>
                  {business.licenses.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <DemoForm className="contact-form" id="contact-form">
            <h2>{contactPage.formHeading}</h2>
            <div className="row">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="(210) 555-0123" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="c-from">From ZIP</label>
                <input id="c-from" name="from" inputMode="numeric" maxLength={5} placeholder="78216" />
              </div>
              <div className="field">
                <label htmlFor="c-to">To ZIP</label>
                <input id="c-to" name="to" inputMode="numeric" maxLength={5} placeholder="78209" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="c-date">Move date</label>
                <input id="c-date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="c-size">Home size</label>
                <select id="c-size" name="size" defaultValue="2 bedroom">
                  {hero.homeSizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-notes">Anything we should know?</label>
              <textarea id="c-notes" name="notes" placeholder="Stairs, piano, storage unit, tight parking…" />
            </div>
            <DemoSubmit className="btn btn-dark">
              Get a quote <span className="arrow">→</span>
            </DemoSubmit>
          </DemoForm>
        </div>
      </section>
    </>
  );
}
