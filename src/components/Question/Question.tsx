// src/components/Question.tsx
import React, { useState } from "react";
import type { Question } from "../../models/Question.model";
import { Button, Form } from "react-bootstrap";
import "./question.css";
import { TextContent } from "../../lang/TextContent";
import { saveInProgressTestResults } from "../utils/LocalStorage.utils";

interface Props {
  code: string;
  question: Question;
  onNext?: () => void;
  onAnswerResult?: (score: number) => void;
  disableNext?: boolean;
}

const QuestionComponent: React.FC<Props> = ({
  code,
  question,
  onNext,
  onAnswerResult,
  disableNext = false,
}) => {
  const isMultiple = question.options.filter((o) => o.correct).length > 1;
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (code: string) => {
    if (submitted) return;

    setSelected((prev) =>
      isMultiple
        ? prev.includes(code)
          ? prev.filter((c) => c !== code)
          : [...prev, code]
        : [code]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);

    const correctSet = new Set<string>(
      question.options.filter((o) => o.correct).map((o) => o.code)
    );
    const selectedSet = new Set<string>(selected);

    const correctSelected = [...selectedSet].filter((c) =>
      correctSet.has(c)
    ).length;
    const incorrectSelected = selectedSet.size - correctSelected;

    const isFullyCorrect =
      correctSelected === correctSet.size && incorrectSelected === 0;
    // Partial credit applies only to multi-answer questions: you picked at least
    // one correct option, none wrong, but didn't select them all.
    const isPartial =
      isMultiple &&
      !isFullyCorrect &&
      correctSelected > 0 &&
      incorrectSelected === 0;
    const score = isFullyCorrect ? 1 : isPartial ? 0.5 : 0;

    saveInProgressTestResults(code, {
      correct: isFullyCorrect,
      score,
      code: question.code,
      answers: question.options
        .filter((opt) => selectedSet.has(opt.code))
        .map((s) => {
          return { code: s.code, correct: s.correct };
        }),
    });
    onAnswerResult?.(score);
  };

  const handleNext = () => {
    setSelected([]);
    setSubmitted(false);
    onNext?.();
  };

  const getVariantClass = (code: string): string => {
    const option = question.options.find((o) => o.code === code);
    if (!submitted || !option) return "";

    if (option.correct && selected.includes(code)) return "correct";
    if (!option.correct && selected.includes(code)) return "incorrect";
    if (option.correct && !selected.includes(code)) return "missed";

    return "";
  };

  return (
    <div>
      <div className="mb-4 p-3 question rounded">
        {question.isHtmlContent ? (
          <span dangerouslySetInnerHTML={{ __html: question.content }} />
        ) : (
          question.content
        )}

        {question.codeContent && (
          <pre>
            <code>{question.codeContent}</code>
          </pre>
        )}
      </div>
      <div className="mb-4 p-3 options rounded">
        <Form>
          {question.options.map((option) => (
            <Form.Check
              key={option.code}
              type={isMultiple ? "checkbox" : "radio"}
              id={`${question.code}-${option.code}`}
              label={`${option.code}: ${option.content}`}
              name={question.code}
              checked={selected.includes(option.code)}
              onChange={() => handleChange(option.code)}
              disabled={submitted}
              className={getVariantClass(option.code)}
            />
          ))}
        </Form>
      </div>
      <div className="p-3 buttons rounded">
        {!submitted ? (
          <Button
            variant="success"
            onClick={handleSubmit}
            disabled={selected.length === 0}
          >
            {TextContent.submitQuestion}
          </Button>
        ) : (
          <Button variant="light" onClick={handleNext} disabled={disableNext}>
            {TextContent.next}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionComponent;
