import Link from "next/link";
import { business, bookCta, closing } from "../nails/content";

export function Closing() {
  return (
    <section className="panel closing">
      <h2>{closing.title}</h2>
      <div>
        <p>{closing.text}</p>
        <div className="actions">
          <Link href={bookCta.href} className="btn">
            {bookCta.label} <span className="arrow">↗</span>
          </Link>
          <a href={business.phoneHref} className="btn btn-outline">
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
