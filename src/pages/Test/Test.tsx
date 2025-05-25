import React, { useState, useEffect } from "react";
import Question from "../../components/Question";
import ResultsInProgress from "../../components/ResultsInProgress";
import "./test.css";
import ExplanationBox from "../../components/Explanation/Explanation";
import { TextContent } from "../../lang/TextContent";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import {
  getInProgressTestResults,
  saveCompletedTestResults,
} from "../../components/utils/LocalStorage.utils";
import type { Test } from "../../models/Test.model";

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { file } = useParams<{ file: string }>();
  const [testData, setTestData] = useState<Test | null>(null);

  const [completed, setCompleted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    { correct: boolean | null; answered: boolean }[]
  >([]);

  useEffect(() => {
    if (file) {
      import(`../../data/${file}.ts`)
        .then((module) => {
          setTestData(module.default);
        })
        .catch((err) => {
          console.error("Failed to load test file:", err);
          navigate("/");
        });
    }
  }, [file]);

  const handleAnswer = (isCorrect: boolean) => {
    const updated = [...answers];
    updated[currentIndex] = { correct: isCorrect, answered: true };
    setCompleted(updated.filter((v) => v.answered).length === answers.length);
    setAnswers(updated);
  };

  const handleSubmit = () => {
    if (testData) {
      const correct = answers.filter((v) => v.correct).length;
      const percentage =
        answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0;
      saveCompletedTestResults(testData.code, percentage);
      navigate("/");
    }
  };
  const handleNext = () => {
    if (answers.length - 1 !== currentIndex) {
      setCurrentIndex((i) => i + 1);
    }
  };

  useEffect(() => {
    if (testData) {
      let lastIndex = 0;
      const resultsFromLocalStorage = getInProgressTestResults(testData.code);
      if (resultsFromLocalStorage) {
        const answersInProgress = testData.questions.map((v, i) => {
          const answer = resultsFromLocalStorage.find(
            (mtch) => mtch.code === v.code
          );
          if (answer) {
            lastIndex = i;
            return {
              correct: answer.correct,
              answered: true,
            };
          }
          return { correct: null, answered: false };
        });
        setAnswers(answersInProgress);
        setCurrentIndex(lastIndex == 0 ? 0 : lastIndex + 1);
      }
    }
  }, [testData]);

  return (
    testData && (
      <div>
        <Header pageHeading={testData.title}>
          <Button
            disabled={!completed}
            onClick={handleSubmit}
            variant="success"
          >
            {TextContent.submit}
          </Button>
        </Header>
        <div className="question-wrapper">
          <div className="test-question">
            <Question
              code={testData.code}
              question={testData.questions[currentIndex]}
              onAnswerResult={handleAnswer}
              onNext={
                currentIndex < answers.length - 1 ? handleNext : undefined
              }
              disableNext={currentIndex >= answers.length - 1}
            />
          </div>
          <div className="test-results">
            <ResultsInProgress
              initIndex={currentIndex}
              total={testData.questions.length}
              answers={answers}
              onJumpTo={(index) => setCurrentIndex(index)}
            />
          </div>
        </div>
        <div className="explanation-wrapper rounded">
          {testData.questions[currentIndex].explanation &&
            answers[currentIndex]?.correct !== null && (
              <ExplanationBox
                explanation={testData.questions[currentIndex].explanation!}
              />
            )}
        </div>
      </div>
    )
  );
};

export default TestPage;
