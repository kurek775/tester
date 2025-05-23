import React from "react";
import "./results.css";
import { TextContent } from "../../lang/TextContent";

interface Props {
  total: number;
  answers: { correct: boolean | null }[]; // null = unanswered
  onJumpTo?: (index: number) => void;
}

const ResultsInProgress: React.FC<Props> = ({ total, answers, onJumpTo }) => {
  const answered = answers.filter((a) => a.correct !== null);
  const correct = answers.filter((a) => a.correct === true).length;
  const incorrect = answers.filter((a) => a.correct === false).length;
  const percentage =
    answered.length > 0 ? Math.round((correct / answered.length) * 100) : 0;

  return (
    <div className="results-panel rounded">
      <div className="results-header">
        <div className="percentage">{percentage} %</div>
        <div className="count">
          <span className="correct">
            {correct + " " + TextContent.correct}{" "}
          </span>{" "}
          /{" "}
          <span className="incorrect">
            {incorrect + " " + TextContent.incorrect}
          </span>
        </div>
      </div>

      <div className="squares">
        {Array.from({ length: total }).map((_, i) => {
          const state = answers[i]?.correct;
          let className = "dot";
          if (state === true) className += " correct";
          else if (state === false) className += " incorrect";
          else className += " unanswered";

          return (
            <div key={i} className={className} onClick={() => onJumpTo?.(i)} />
          );
        })}
      </div>
    </div>
  );
};

export default ResultsInProgress;
