import type { Metadata } from "next";
import { Closing } from "../../_components/Closing";
import { menu, servicesPage, tiers } from "../content";

export const metadata: Metadata = { title: "Services & Prices" };

export default function ServicesPage() {
  return (
    <>
      <section className="panel joined">
        <div className="page-head">
          <h1>{servicesPage.title}</h1>
          <p>{servicesPage.sub}</p>
        </div>
        <div className="jump">
          {menu.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pill">
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <section className="panel">
        {menu.map((section) => (
          <div className="menu-section" id={section.id} key={section.id}>
            <div className="menu-intro">
              <div className="eyebrow">{section.label}</div>
              <h2>{section.title}</h2>
              {section.note && <p>{section.note}</p>}
            </div>
            <div className="price-list">
              {section.tiered && (
                <div className="price-row tiered head" aria-hidden="true">
                  <span />
                  {tiers.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
              {section.items.map((item) => (
                <div className={`price-row${section.tiered ? " tiered" : ""}`} key={item.name}>
                  <div className="price-name">
                    <b>{item.name}</b>
                    <span>{item.desc}</span>
                  </div>
                  {item.prices.map((p, i) => (
                    <span className="price" key={i}>
                      {section.tiered && <small>{tiers[i]}</small>}
                      {p}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="panel">
        <div className="guarantee">
          <b>4 weeks</b>
          <div>
            <h2>{servicesPage.guarantee.title}</h2>
            <p>{servicesPage.guarantee.text}</p>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
