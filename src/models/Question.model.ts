import type { Answer, AnswerBase } from "./Answer.model";

export interface Question {
  code: string;
  content: string;
  options: Answer[];
  explanation?: string;
  category?: string;
}

export interface AnsweredQuestion {
  code: string;
  answers: AnswerBase[];
  correct: boolean;
}
