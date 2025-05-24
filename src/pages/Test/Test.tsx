import React, { useState } from "react";
import { demoTest } from "../../data/Mock";
import Question from "../../components/Question";
import ResultsInProgress from "../../components/ResultsInProgress";
import "./test.css";
import ExplanationBox from "../../components/Explanation/Explanation";
import { TextContent } from "../../lang/TextContent";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { addNewRecord } from "../../components/utils/LocalStorage.utils";

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

    addNewRecord(demoTest.code, percentage);
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
    <div>
      <Header pageHeading={demoTest.title}>
        <Button onClick={handleSubmit} variant="success">
          {TextContent.submit}
        </Button>
      </Header>
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
