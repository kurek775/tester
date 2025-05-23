export interface AnswerBase {
  code: "A" | "B" | "C" | "D" | "E" | "F";
  correct: boolean;
}

export interface Answer extends AnswerBase {
  content: string;
}
