import type { AnsweredQuestion, Question } from "../../models/Question.model";
import type { Record } from "../../models/Record.model";

export function saveCompletedTestResults(code: string, value: number) {
  const existing = localStorage.getItem(code);
  const data: Record[] = existing ? JSON.parse(existing) : [];
  const newRecord = { index: data.length + 1, value };
  data.push(newRecord);
  localStorage.removeItem(code + "_WIP");
  localStorage.removeItem(code + "_SET");
  localStorage.setItem(code, JSON.stringify(data));
}

export function saveInProgressTestResults(
  code: string,
  answeredQuestion: AnsweredQuestion
) {
  const existing = localStorage.getItem(code + "_WIP");
  const data: AnsweredQuestion[] = existing ? JSON.parse(existing) : [];
  // Replace any prior answer for the same question so re-answering (e.g. after
  // jumping back via the progress dots) updates the record instead of appending
  // a stale duplicate that recovery would later pick up by mistake.
  const idx = data.findIndex((d) => d.code === answeredQuestion.code);
  if (idx >= 0) {
    data[idx] = answeredQuestion;
  } else {
    data.push(answeredQuestion);
  }
  localStorage.setItem(code + "_WIP", JSON.stringify(data));
}
export function getInProgressTestResults(code: string): AnsweredQuestion[] {
  const records = localStorage.getItem(code + "_WIP");
  if (records) {
    const response = JSON.parse(records) as AnsweredQuestion[];
    return response;
  } else {
    return [];
  }
}

export function removeInProgressResults(code: string) {
  localStorage.removeItem(code + "_WIP");
  localStorage.removeItem(code + "_SET");
}

// The exact ordered set of questions a test was started with, so that refreshing
// or returning to an in-progress test always shows the same questions in the same
// order (important for Random.ts, which reshuffles on every module import).
export function saveTestQuestionSet(code: string, questions: Question[]) {
  localStorage.setItem(code + "_SET", JSON.stringify(questions));
}

export function getTestQuestionSet(code: string): Question[] | null {
  const stored = localStorage.getItem(code + "_SET");
  return stored ? (JSON.parse(stored) as Question[]) : null;
}
export function getCompletedTestResults(code: string): Record[] {
  const records = localStorage.getItem(code);
  if (records) {
    const response = JSON.parse(records) as Record[];
    return response;
  } else {
    return [];
  }
}
