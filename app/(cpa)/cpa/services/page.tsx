import type { Metadata } from "next";
import { Icon } from "../../_components/Icons";
import { Closing, CtaLink, OregonTaxes, PageHeader } from "../../_components/Parts";
import { services, servicesPage } from "../content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title={servicesPage.title} sub={servicesPage.sub} crumb="Services" />

      <section className="section cream">
        <div className="wrap service-list">
          {services.map((s) => (
            <article className="service-row" id={s.id} key={s.id}>
              <span className="service-icon">
                <Icon name={s.icon} size={26} />
              </span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.long}</p>
              </div>
              <ul className="checks">
                {s.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={18} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="service-price">
                <b>{s.price}</b>
                <CtaLink label="Get a quote" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <OregonTaxes />
      <Closing />
    </>
  );
}
