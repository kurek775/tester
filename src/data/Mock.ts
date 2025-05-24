import type { Test } from "../models/Test.model";

const Mock: Test = {
  code: "TEST001",
  title: "Sample Logic & Reasoning Test",
  questions: [
    {
      code: "Q1",
      content: "What is the output of 2 + 2 in JavaScript?",
      options: [
        { code: "A", content: "22", correct: false },
        { code: "B", content: "4", correct: true },
        { code: "C", content: '"4"', correct: false },
        { code: "D", content: "undefined", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q09",
      content:
        "Which of these values are valid numeric outputs from adding numbers in JavaScript?",
      options: [
        { code: "A", content: "22", correct: true },
        { code: "B", content: "4", correct: true },
        { code: "C", content: '"4"', correct: false },
        { code: "D", content: "undefined", correct: false },
      ],
      explanation:
        "Both 22 and 4 can result from addition in JS depending on operand types.",
      category: "JavaScript",
    },
    {
      code: "Q2",
      content: "Which sorting algorithm has the best average case complexity?",
      options: [
        { code: "A", content: "Bubble Sort", correct: false },
        { code: "B", content: "Merge Sort", correct: true },
        { code: "C", content: "Insertion Sort", correct: false },
        { code: "D", content: "Selection Sort", correct: false },
      ],
      explanation: "Merge Sort runs in O(n log n) time on average.",
      category: "Algorithms",
    },
    {
      code: "Q3",
      content:
        "What is the time complexity of accessing an element in an array by index?",
      options: [
        { code: "A", content: "O(1)", correct: true },
        { code: "B", content: "O(n)", correct: false },
        { code: "C", content: "O(log n)", correct: false },
        { code: "D", content: "O(n log n)", correct: false },
      ],
      explanation:
        "Accessing an element by index in an array is a constant-time operation.",
      category: "Data Structures",
    },
    {
      code: "Q4",
      content: "Which keyword is used to define a constant in JavaScript?",
      options: [
        { code: "A", content: "var", correct: false },
        { code: "B", content: "let", correct: false },
        { code: "C", content: "const", correct: true },
        { code: "D", content: "define", correct: false },
      ],
      explanation: "`const` defines a block-scoped constant variable.",
      category: "JavaScript",
    },
    {
      code: "Q5",
      content: "What does HTML stand for?",
      options: [
        {
          code: "A",
          content: "Hyperlinks and Text Markup Language",
          correct: false,
        },
        { code: "B", content: "Home Tool Markup Language", correct: false },
        { code: "C", content: "Hyper Text Markup Language", correct: true },
        { code: "D", content: "Hyper Tool Markup Language", correct: false },
      ],
      explanation: "HTML stands for Hyper Text Markup Language.",
      category: "Web",
    },
    {
      code: "Q6",
      content: "Which logic gate outputs true only when inputs differ?",
      options: [
        { code: "A", content: "AND", correct: false },
        { code: "B", content: "OR", correct: false },
        { code: "C", content: "XOR", correct: true },
        { code: "D", content: "NAND", correct: false },
      ],
      explanation: "XOR (exclusive OR) is true when inputs differ.",
      category: "Logic",
    },
    {
      code: "Q7",
      content:
        "Which of the following is **not** a primitive data type in JavaScript?",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      explanation: "`object` is not a primitive; it's a complex data type.",
      category: "JavaScript",
    },
    {
      code: "Q8",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q9",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q10",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q11",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q12",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q13",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
    {
      code: "Q14",
      content: "mockkkk",
      options: [
        { code: "A", content: "string", correct: false },
        { code: "B", content: "object", correct: true },
        { code: "C", content: "number", correct: false },
        { code: "D", content: "boolean", correct: false },
      ],
      category: "JavaScript",
    },
  ],
};

export default Mock;
