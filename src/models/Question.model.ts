import type { Answer, AnswerBase } from "./Answer.model";

export interface Question {
  code: string;
  content: string;
  codeContent?: string;
  isHtmlContent?: boolean;
  options: Answer[];
  explanation?: string;
  category?: string;
}

export interface AnsweredQuestion {
  code: string;
  answers: AnswerBase[];
  correct: boolean;
  // 1 = fully correct, 0.5 = partially correct (multi-answer), 0 = wrong.
  // Optional so older saved progress (which only had `correct`) still parses.
  score?: number;
}
