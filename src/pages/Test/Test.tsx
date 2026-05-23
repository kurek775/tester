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
  getTestQuestionSet,
  saveCompletedTestResults,
  saveTestQuestionSet,
} from "../../components/utils/LocalStorage.utils";
import type { Test } from "../../models/Test.model";

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const { file } = useParams<{ file: string }>();
  const [testData, setTestData] = useState<Test | null>(null);

  const [completed, setCompleted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    { score: number | null; answered: boolean }[]
  >([]);

  useEffect(() => {
    if (file) {
      import(`../../data/${file}.ts`)
        .then((module) => {
          const loaded: Test = module.default;
          // Reuse the question set the test was started with (if any) so refreshing
          // or returning never reshuffles/re-selects questions out from under the
          // saved answers. Only pin a fresh set the first time the test is opened.
          const savedSet = getTestQuestionSet(loaded.code);
          if (savedSet && savedSet.length) {
            setTestData({ ...loaded, questions: savedSet });
          } else {
            saveTestQuestionSet(loaded.code, loaded.questions);
            setTestData(loaded);
          }
        })
        .catch((err) => {
          console.error("Failed to load test file:", err);
          navigate("/");
        });
    }
  }, [file]);

  const handleAnswer = (score: number) => {
    const updated = [...answers];
    updated[currentIndex] = { score, answered: true };
    setCompleted(updated.filter((v) => v.answered).length === answers.length);
    setAnswers(updated);
  };

  const handleSubmit = () => {
    if (testData) {
      const totalScore = answers.reduce((sum, v) => sum + (v.score ?? 0), 0);
      const percentage =
        answers.length > 0
          ? Math.round((totalScore / answers.length) * 100)
          : 0;
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
      let lastIndex = -1;
      const resultsFromLocalStorage = getInProgressTestResults(testData.code);
      if (resultsFromLocalStorage) {
        const answersInProgress = testData.questions.map((v, i) => {
          const answer = resultsFromLocalStorage.find(
            (mtch) => mtch.code === v.code
          );
          if (answer) {
            lastIndex = i;
            return {
              // Fall back to correct→1/0 for progress saved before scores existed.
              score: answer.score ?? (answer.correct ? 1 : 0),
              answered: true,
            };
          }
          return { score: null, answered: false };
        });
        setAnswers(answersInProgress);
        const answeredCount = answersInProgress.filter((a) => a.answered).length;
        setCompleted(
          answeredCount > 0 && answeredCount === answersInProgress.length
        );
        // Resume on the question after the last one answered, clamped so it can
        // never point past the end (which previously crashed the page on refresh).
        const nextIndex = lastIndex < 0 ? 0 : lastIndex + 1;
        setCurrentIndex(Math.min(nextIndex, testData.questions.length - 1));
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
              key={currentIndex}
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
            answers[currentIndex]?.answered && (
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
