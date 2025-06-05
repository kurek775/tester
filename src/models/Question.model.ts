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
}
