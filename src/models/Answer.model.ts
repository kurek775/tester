export interface AnswerBase {
  code: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J";
  correct: boolean;
}

export interface Answer extends AnswerBase {
  content: string;
}
