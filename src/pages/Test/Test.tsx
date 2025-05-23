import React, { useState } from "react";
import { demoTest } from "../../data/Mock";
import Question from "../../components/Question";
import ResultsInProgress from "../../components/ResultsInProgress";
import "./test.css";
import ExplanationBox from "../../components/Explanation/Explanation";
import { TextContent } from "../../lang/TextContent";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TestPage: React.FC = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean | null }[]>(
    demoTest.questions.map(() => ({ correct: null }))
  );

  const handleAnswer = (isCorrect: boolean) => {
    const updated = [...answers];
    updated[currentIndex] = { correct: isCorrect };
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const correct = answers.filter((v) => v.correct).length;

    const percentage =
      answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0;

    const now = new Date();
    const timeString = `${now.getFullYear().toString().slice(-2)}_${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}_${now.getDate().toString().padStart(2, "0")}_${now
      .getHours()
      .toString()
      .padStart(2, "0")}_${now.getMinutes().toString().padStart(2, "0")}`;

    localStorage.setItem(
      demoTest.code + "__" + timeString,
      percentage.toString()
    );

    navigate("/");
  };
  const handleNext = () => {
    if (answers.length - 1 == currentIndex) {
      console.warn("plnoooooo");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };
  return (
    <div className="test-page">
      <div className="header-wrapper">
        <div className="rounded">
          <h1>{demoTest.title}</h1>
          <Button onClick={handleSubmit} variant="success">
            {TextContent.submit}
          </Button>
        </div>
      </div>
      <div className="question-wrapper">
        <div className="test-question">
          <Question
            question={demoTest.questions[currentIndex]}
            onAnswerResult={handleAnswer}
            onNext={currentIndex < answers.length - 1 ? handleNext : undefined}
            disableNext={currentIndex >= answers.length - 1}
          />
        </div>
        <div className="test-results">
          <ResultsInProgress
            total={demoTest.questions.length}
            answers={answers}
            onJumpTo={(index) => setCurrentIndex(index)}
          />
        </div>
      </div>{" "}
      <div className="explanation-wrapper rounded">
        {demoTest.questions[currentIndex].explanation &&
          answers[currentIndex].correct !== null && (
            <ExplanationBox
              explanation={demoTest.questions[currentIndex].explanation!}
            />
          )}
      </div>
    </div>
  );
};

export default TestPage;
