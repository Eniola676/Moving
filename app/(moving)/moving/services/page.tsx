import type { Metadata } from "next";
import { Features, ClosingCta } from "../../_components/Sections";
import { Pricing } from "../../_components/Pricing";
import { guarantees, servicesPage } from "../content";

export const metadata: Metadata = { title: "Services & Pricing" };

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <h1>{servicesPage.title}</h1>
          <p>{servicesPage.sub}</p>
        </div>
      </header>

      <Features
        id="services"
        title="What's included in every move."
        lede="These are included whether you book two hours or a whole day."
      />

      <Pricing />

      {/* ============ GUARANTEE ============ */}
      <section id="guarantee" className="guarantee">
        <div className="wrap">
          <div className="head-block">
            <div className="eyebrow">Our guarantee</div>
            <h2 style={{ marginTop: 10 }}>Two promises, in writing.</h2>
            <p className="lede">Plenty of movers say they&apos;re cheap and on time. We guarantee both, and here are the terms.</p>
          </div>
          <div className="g-cards">
            {guarantees.map((g) => (
              <div className="g-card" key={g.title}>
                <span className="num">{g.num}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <div className="big">
                  {g.big}
                  <small>{g.bigNote}</small>
                </div>
                <div className="fine">
                  {g.fine.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
