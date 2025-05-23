import type { AnsweredQuestion, Question } from "./Question.model";

export interface TestBase {
  title: string;
  questions: Question[];
}

export interface Test extends TestBase {
  code: string;
}

export interface CompletedTest {
  code: string;
  score: number;
  index: number;
}

export interface TestInProgress extends CompletedTest {
  questions: AnsweredQuestion[];
}
