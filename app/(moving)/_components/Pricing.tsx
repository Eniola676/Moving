"use client";

import { useState } from "react";
import Link from "next/link";
import { pricing } from "../moving/content";

type MoveType = "local" | "texas";

export function Pricing() {
  const [type, setType] = useState<MoveType>("local");
  const featured = pricing.featured[type];

  return (
    <section id="pricing" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="pricing-top">
          <div>
            <h2>{pricing.title}</h2>
            <p className="lede">{pricing.lede}</p>
          </div>
          <div className="toggle" role="group" aria-label="Move type">
            <button type="button" aria-pressed={type === "local"} onClick={() => setType("local")}>
              Local
            </button>
            <button type="button" aria-pressed={type === "texas"} onClick={() => setType("texas")}>
              Across Texas
            </button>
          </div>
        </div>

        <div className="plans">
          {pricing.plans.map((plan) => {
            const price = plan.featured ? featured.price : plan.price;
            const unit = plan.featured ? featured.unit : plan.unit;
            const note = plan.featured ? featured.note : plan.note;
            const isPhone = plan.cta.href.startsWith("tel:");
            const btnClass = `btn ${plan.featured ? "btn-light" : "btn-dark"}`;
            return (
              <div className={`plan${plan.featured ? " featured" : ""}`} key={plan.name}>
                <div className="plan-head">
                  {plan.name} {plan.tag && <span className="tag">{plan.tag}</span>}
                </div>
                <div className="plan-price">
                  <b>{price}</b>
                  <small>{unit}</small>
                </div>
                <div className="plan-note">{note}</div>
                <div className="plan-desc">{plan.desc}</div>
                <ul>
                  {plan.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {isPhone ? (
                  <a href={plan.cta.href} className={btnClass}>
                    {plan.cta.label}
                  </a>
                ) : (
                  <Link href={plan.cta.href} className={btnClass}>
                    {plan.cta.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="routes">
          <div className="routes-head">
            {pricing.routesHead.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          <div className="routes-grid">
            {pricing.routes.map((r) => (
              <div className="route" key={r.city}>
                {r.city} <span>{r.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
