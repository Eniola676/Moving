import type { Metadata } from "next";
import { Quiz } from "../../_components/Quiz";

export const metadata: Metadata = { title: "Find your ICF path" };

export default function QuizPage() {
  return <Quiz />;
}
