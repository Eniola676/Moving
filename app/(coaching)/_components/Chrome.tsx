import Link from "next/link";
import { Hook } from "./Icons";
import { business, footer, nav, quizCta } from "../coaching/content";

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label={`${business.name} home`}>
      {business.wordmark}
      <span>.</span>
    </Link>
  );
}

export function QuizButton({ label = quizCta.label, variant = "gold" }: { label?: string; variant?: "gold" | "light" | "dark" }) {
  return (
    <Link href={quizCta.href} className={`btn btn-${variant}`}>
      {label} <Hook />
    </Link>
  );
}

export function Nav() {
  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <Wordmark />
        <span className="nav-divider" aria-hidden="true" />
        <div className="nav-links">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <QuizButton label={quizCta.short} />
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Wordmark />
          <p>{footer.about}</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Programs</h4>
            <Link href="/programs#acc">The ACC Path</Link>
            <Link href="/programs#pcc">The PCC Path</Link>
            <Link href="/quiz">Find my path</Link>
          </div>
          <div>
            <h4>Admissions</h4>
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>{business.address.street}</span>
            <span>{business.address.cityLine}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {business.name}
        </span>
        <span>{footer.demoNote}</span>
      </div>
    </footer>
  );
}

/** Fixed bottom bar on phones so the quiz is always one tap away (ad traffic is mostly mobile). */
export function MobileQuizBar() {
  return (
    <div className="mobile-bar">
      <QuizButton />
    </div>
  );
}
