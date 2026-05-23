import type { Test } from "../models/Test.model";
import Algoritmizace from "./Algoritmizace";
import JazykAutomaty from "./JazykAutomaty";
import LinearniAlgebra from "./LinearniAlgebra";
import Mix from "./Mix";
import PredikatyLogika from "./PredikatyLogika";
import Rekurze from "./Rekurze";
import TestMixAI from "./TestMixAI";
import MnozinyRelace from "./MnozinyRelace";
import type { Question } from "../models/Question.model";
function shuffle(array: Question[]): Question[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function getRandomQuestions(questions: Question[], count: number): Question[] {
  return shuffle(questions).slice(0, count);
}

// The source pools reuse question codes (e.g. "Q10" exists in several topics), so
// the assembled set could otherwise contain two different questions with the same
// code. Since saving/resuming matches answers by question code, re-key each picked
// question to a unique code so resume can't confuse two questions for one.
function withUniqueCodes(questions: Question[]): Question[] {
  return questions.map((q, i) => ({ ...q, code: `R${i + 1}_${q.code}` }));
}

const Random: Test = {
  code: "FIT_CVUT_10",
  title: "Náhodný test ze všech témat",
  questions: withUniqueCodes(
    shuffle([
      ...getRandomQuestions(MnozinyRelace.questions, 2),
      ...getRandomQuestions(JazykAutomaty.questions, 2),
      ...getRandomQuestions(PredikatyLogika.questions, 3),
      ...getRandomQuestions(LinearniAlgebra.questions, 3),
      ...getRandomQuestions(Algoritmizace.questions, 3),
      ...getRandomQuestions(Rekurze.questions, 2),
      ...getRandomQuestions(Mix.questions, 10),
      ...getRandomQuestions(TestMixAI.questions, 10),
    ])
  ),
};

export default Random;
