import type { Test } from "../models/Test.model";

const Testovatko: Test = {
  code: "TEST002",
  title: "NVM - Basic 70 Questions",
  questions: Array.from({ length: 70 }).map((_, index) => {
    const i = index + 1;
    return {
      code: `Q${i}`,
      content: `Question ${i}: What is ${i} + ${i}?`,
      options: [
        { code: "A", content: `${i + i + 1}`, correct: false },
        { code: "B", content: `${i + i}`, correct: true },
        { code: "C", content: `${i * i}`, correct: false },
        { code: "D", content: `${i}`, correct: false },
      ],
      category: "Math",
    };
  }),
};

export default Testovatko;
