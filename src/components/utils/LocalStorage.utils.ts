import type { AnsweredQuestion } from "../../models/Question.model";
import type { Record } from "../../models/Record.model";

export function saveCompletedTestResults(code: string, value: number) {
  const existing = localStorage.getItem(code);
  const data: Record[] = existing ? JSON.parse(existing) : [];
  const newRecord = { index: data.length + 1, value };
  data.push(newRecord);
  localStorage.removeItem(code + "_WIP");
  localStorage.setItem(code, JSON.stringify(data));
}

export function saveInProgressTestResults(
  code: string,
  answeredQuestion: AnsweredQuestion
) {
  const existing = localStorage.getItem(code + "_WIP");
  const data: AnsweredQuestion[] = existing ? JSON.parse(existing) : [];
  data.push(answeredQuestion);
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
