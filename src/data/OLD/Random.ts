import type { Test } from "../../models/Test.model";
import Algoritmizace from "./Algoritmizace";
import JazykAutomaty from "./JazykAutomaty";
import LinearniAlgebra from "./LinearniAlgebra";
import Mix from "./Mix";
import PredikatyLogika from "./PredikatyLogika";
import Rekurze from "./Rekurze";
import TestMixAI from "../TestMixAI";
import MnozinyRelace from "./MnozinyRelace";
import type { Question } from "../../models/Question.model";
function getRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
function randomizeOrder(questions: Question[]): Question[] {
  return questions.sort(() => Math.random() - 0.5);
}

const Random: Test = {
  code: "FIT_CVUT_10",
  title: "Náhodný test ze všech témat",
  questions: randomizeOrder([
    ...getRandomQuestions(MnozinyRelace.questions, 2),
    ...getRandomQuestions(JazykAutomaty.questions, 2),
    ...getRandomQuestions(PredikatyLogika.questions, 3),
    ...getRandomQuestions(LinearniAlgebra.questions, 3),
    ...getRandomQuestions(Algoritmizace.questions, 3),
    ...getRandomQuestions(Rekurze.questions, 2),
    ...getRandomQuestions(Mix.questions, 10),
    ...getRandomQuestions(TestMixAI.questions, 10),
  ]),
};

export default Random;
