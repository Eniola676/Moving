"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DemoForm, DemoSubmit } from "@/components/shared/DemoForm";
import { Check, Hook } from "./Icons";
import { readUtm } from "./UtmCapture";
import { business, paths, quiz, quizResult, type PathId } from "../coaching/content";

const LETTERS = ["A", "B", "C", "D", "E"];
const INTRO = -1;
const RESULT = quiz.questions.length;

function score(answers: Record<string, number>) {
  let acc = 0;
  let pcc = 0;
  let force = false;
  quiz.questions.forEach((q) => {
    const opt = q.options[answers[q.id]];
    if (!opt) return;
    acc += opt.acc;
    pcc += opt.pcc;
    if (opt.forcePcc) force = true;
  });
  const path: PathId = force || pcc > acc ? "pcc" : "acc";
  // Explain the result using reasons from answers that pointed the same way.
  const reasons = quiz.questions
    .map((q) => q.options[answers[q.id]])
    .filter((o) => o?.reason && (path === "pcc" ? o.pcc > o.acc || o.forcePcc : o.acc > o.pcc))
    .map((o) => o!.reason!)
    .slice(0, 3);
  return { path, reasons };
}

export function Quiz() {
  const [step, setStep] = useState(INTRO);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }, [step]);
  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  const question = step >= 0 && step < RESULT ? quiz.questions[step] : null;
  const result = useMemo(() => (step === RESULT ? score(answers) : null), [step, answers]);
  const progress = step === INTRO ? 0 : Math.min(step, RESULT) / RESULT;

  const choose = useCallback(
    (index: number) => {
      if (!question) return;
      setAnswers((a) => ({ ...a, [question.id]: index }));
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = window.setTimeout(() => setStep((s) => s + 1), 380);
    },
    [question],
  );

  const canNext = step === INTRO || (question !== null && answers[question.id] !== undefined);
  const next = useCallback(() => canNext && step < RESULT && setStep((s) => s + 1), [canNext, step]);
  const back = () => setStep((s) => Math.max(INTRO, s - 1));

  // Typeform-style keyboard: letters pick an answer, Enter continues.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select")) return;
      if (e.key === "Enter") {
        e.preventDefault();
        next();
        return;
      }
      if (!question) return;
      const i = LETTERS.indexOf(e.key.toUpperCase());
      if (i >= 0 && i < question.options.length) choose(i);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [question, choose, next]);

  return (
    <div className="quiz">
      <div className="quiz-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <header className="quiz-head">
        <Link href="/" className="wordmark" aria-label={`${business.name} home`}>
          {business.wordmark}
          <span>.</span>
        </Link>
        <span className="quiz-count">
          {question ? `Question ${step + 1} of ${RESULT}` : step === RESULT ? "Your result" : "Path to ICF Certification"}
        </span>
        <Link href="/" className="quiz-close" aria-label="Close quiz and return to the home page">
          ×
        </Link>
      </header>

      <main className="quiz-stage">
        <div className="quiz-step" key={step}>
          {step === INTRO && (
            <div className="quiz-intro">
              <span className="eyebrow">
                <Hook /> 6 questions
              </span>
              <h1 ref={headingRef} tabIndex={-1}>
                {quiz.intro.title}
              </h1>
              <p>{quiz.intro.text}</p>
              <div className="quiz-start">
                <button type="button" className="btn btn-gold btn-lg" onClick={next}>
                  Start the quiz <Hook />
                </button>
                <span className="hint">
                  press <kbd>Enter ↵</kbd>
                </span>
              </div>
              <p className="quiz-meta">{quiz.intro.meta}</p>
            </div>
          )}

          {question && (
            <div className="quiz-question">
              <p className="q-num">
                {step + 1} <Hook size={12} />
              </p>
              <h1 ref={headingRef} tabIndex={-1}>
                {question.question}
              </h1>
              {question.help && <p className="q-help">{question.help}</p>}
              <div className="options" role="radiogroup" aria-label={question.question}>
                {question.options.map((o, i) => {
                  const selected = answers[question.id] === i;
                  return (
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      key={o.label}
                      className={`option${selected ? " selected" : ""}`}
                      onClick={() => choose(i)}
                    >
                      <kbd>{LETTERS[i]}</kbd>
                      <span>{o.label}</span>
                      {selected && <Check />}
                    </button>
                  );
                })}
              </div>
              <div className="quiz-ok">
                <button type="button" className="btn btn-dark" onClick={next} disabled={!canNext}>
                  OK <Check size={14} />
                </button>
                <span className="hint">
                  press <kbd>Enter ↵</kbd>
                </span>
              </div>
            </div>
          )}

          {result && (
            <ResultView path={result.path} reasons={result.reasons} answers={answers} headingRef={headingRef} onRetake={() => { setAnswers({}); setStep(INTRO); }} />
          )}
        </div>
      </main>

      {question && (
        <div className="quiz-arrows">
          <button type="button" onClick={back} aria-label="Previous question">
            ↑
          </button>
          <button type="button" onClick={next} disabled={!canNext} aria-label="Next question">
            ↓
          </button>
        </div>
      )}
    </div>
  );
}

function ResultView({
  path,
  reasons,
  answers,
  headingRef,
  onRetake,
}: {
  path: PathId;
  reasons: string[];
  answers: Record<string, number>;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRetake: () => void;
}) {
  // Only rendered after the visitor answers, so reading the browser here is safe.
  const [utm] = useState(readUtm);
  const p = paths[path];
  const other = paths[path === "acc" ? "pcc" : "acc"];
  const facts = [
    { k: "Credential", v: p.credential },
    { k: "Training", v: p.trainingHours },
    { k: "Mentor coaching", v: p.mentorHours },
    { k: "To apply", v: p.experience },
    { k: "Timeline", v: p.timeline },
    { k: "Investment", v: `${p.price} ${p.plan}` },
  ];

  return (
    <div className="result">
      <div className="result-main">
        <span className="eyebrow">
          <Hook /> {quizResult.eyebrow}
        </span>
        <h1 ref={headingRef} tabIndex={-1}>
          {p.name.replace("The ", "")}
          <span className="tile" aria-hidden="true">
            <Hook size={30} />
          </span>
        </h1>
        <p className="result-best">{p.bestFor}</p>
        {reasons.length > 0 && (
          <ul className="reasons">
            {reasons.map((r) => (
              <li key={r}>
                <Check /> {r}
              </li>
            ))}
          </ul>
        )}
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
        <p className="result-links">
          <Link href={`/programs#${p.id}`}>See everything in {p.name}</Link>
          <span aria-hidden="true">·</span>
          <Link href={`/programs#${other.id}`}>Compare with {other.name}</Link>
          <span aria-hidden="true">·</span>
          <button type="button" onClick={onRetake}>
            Retake the quiz
          </button>
        </p>
      </div>

      <DemoForm className="result-form" id="path-call">
        <h2>{quizResult.formTitle}</h2>
        <p>{quizResult.formText}</p>
        <input type="hidden" name="recommended_path" value={p.id} />
        {quiz.questions.map((q) => (
          <input key={q.id} type="hidden" name={`q_${q.id}`} value={q.options[answers[q.id]]?.label ?? ""} />
        ))}
        {Object.entries(utm).map(([k, v]) => (
          <input key={k} type="hidden" name={k} value={v} />
        ))}
        <div className="field">
          <label htmlFor="r-name">First name</label>
          <input id="r-name" name="first_name" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label htmlFor="r-email">Work email</label>
          <input id="r-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="r-phone">Phone (optional)</label>
          <input id="r-phone" name="phone" type="tel" autoComplete="tel" placeholder="(312) 555-0100" />
        </div>
        <DemoSubmit className="btn btn-gold btn-lg">
          Book my free call <Hook />
        </DemoSubmit>
        <small>{quizResult.consent}</small>
      </DemoForm>
    </div>
  );
}
