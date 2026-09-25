/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { Icon } from "../../_components/Icons";
import { PageHeader } from "../../_components/Parts";
import { business, contactPage } from "../content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactPage.title} sub={contactPage.sub} crumb="Contact" />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <span className="service-icon">
                <Icon name="phone" size={22} />
              </span>
              <div>
                <h3>Call us</h3>
                <a href={business.phoneHref}>{business.phone}</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="service-icon">
                <Icon name="mail" size={22} />
              </span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="service-icon">
                <Icon name="building" size={22} />
              </span>
              <div>
                <h3>Office</h3>
                <span>{business.address.street}</span>
                <span>{business.address.cityLine}</span>
              </div>
            </div>
            <div className="contact-card">
              <span className="service-icon">
                <Icon name="compass" size={22} />
              </span>
              <div>
                <h3>Hours</h3>
                {business.hours.map((h) => (
                  <span key={h.days}>
                    {h.days}: {h.time}
                  </span>
                ))}
              </div>
            </div>
            <img className="contact-img" src="/cpa/waterfront.jpg" alt="Downtown Portland from the Eastbank Esplanade" loading="lazy" />
          </div>

          <DemoForm className="form" id="consult-form">
            <h2>Tell us what you need</h2>
            <div className="row">
              <div className="field">
                <label htmlFor="f-name">Full name</label>
                <input id="f-name" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="(503) 555-0100" />
              </div>
              <div className="field">
                <label htmlFor="f-type">I am a</label>
                <select id="f-type" name="clientType" defaultValue={contactPage.clientTypes[0]}>
                  {contactPage.clientTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-help">I need help with</label>
              <select id="f-help" name="service" defaultValue={contactPage.helpWith[0]}>
                {contactPage.helpWith.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Anything else we should know?</label>
              <textarea id="f-msg" name="message" placeholder="City or county you live and work in, business type, deadlines, notices you've received…" />
            </div>
            <DemoSubmit className="cta cta-dark">
              <span className="cta-label">Book a consultation</span>
              <span className="cta-icon" aria-hidden="true">»</span>
            </DemoSubmit>
          </DemoForm>
        </div>
      </section>
    </>
  );
}
