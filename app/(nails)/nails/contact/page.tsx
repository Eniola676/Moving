/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { business, contactPage } from "../content";

export const metadata: Metadata = { title: "Book & Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="panel joined">
        <div className="page-head">
          <h1>{contactPage.title}</h1>
          <p>{contactPage.sub}</p>
        </div>

        <div className="contact-grid">
          <div className="visit">
            <img src="/nails/studio.jpg" alt="Inside the studio" />
            <dl className="details">
              <div className="detail">
                <dt>Phone</dt>
                <dd>
                  <a href={business.phoneHref}>{business.phone}</a>
                </dd>
              </div>
              <div className="detail">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </dd>
              </div>
              <div className="detail">
                <dt>Studio</dt>
                <dd>
                  <span>{business.address.street}</span>
                  <span>{business.address.cityLine}</span>
                </dd>
              </div>
              <div className="detail">
                <dt>Hours</dt>
                <dd>
                  {business.hours.map((h) => (
                    <span key={h.days}>
                      {h.days}, {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <DemoForm className="book-form" id="book-form">
            <h2>Request a time</h2>
            <div className="row">
              <div className="field">
                <label htmlFor="b-name">Name</label>
                <input id="b-name" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="b-phone">Phone</label>
                <input id="b-phone" name="phone" type="tel" autoComplete="tel" placeholder="(323) 555-0100" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="b-email">Email</label>
              <input id="b-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="b-service">Service</label>
                <select id="b-service" name="service" defaultValue="Gel manicure">
                  {contactPage.services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="b-tier">Technician</label>
                <select id="b-tier" name="technician" defaultValue="No preference">
                  {contactPage.tiers.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="b-date">Preferred date</label>
                <input id="b-date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="b-time">Preferred time</label>
                <select id="b-time" name="time" defaultValue={contactPage.times[1]}>
                  {contactPage.times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="b-notes">Notes</label>
              <textarea id="b-notes" name="notes" placeholder="Shape, length, a design you love, or anything we should know." />
            </div>
            <DemoSubmit className="btn">
              Book an appointment <span className="arrow">↗</span>
            </DemoSubmit>
          </DemoForm>
        </div>
      </section>
    </>
  );
}
