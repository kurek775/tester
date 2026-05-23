import React, { useEffect, useState } from "react";
import "./results.css";
import { TextContent } from "../../lang/TextContent";

interface Props {
  initIndex: number;
  total: number;
  answers: { score: number | null }[];
  onJumpTo?: (index: number) => void;
}

const ResultsInProgress: React.FC<Props> = ({
  initIndex,
  total,
  answers,
  onJumpTo,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const answered = answers.filter((a) => a.score !== null);
  const correct = answers.filter((a) => a.score === 1).length;
  const partial = answers.filter(
    (a) => a.score !== null && a.score > 0 && a.score < 1
  ).length;
  const incorrect = answers.filter((a) => a.score === 0).length;
  const totalScore = answered.reduce((sum, a) => sum + (a.score ?? 0), 0);
  const percentage =
    answered.length > 0 ? Math.round((totalScore / answered.length) * 100) : 0;

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onJumpTo?.(index);
  };

  useEffect(() => {
    setSelectedIndex(initIndex);
  }, [initIndex]);

  return (
    <div className="results-panel rounded">
      <div className="results-header">
        <div className="percentage">{percentage} %</div>
        <div className="count">
          <span className="correct">{correct + " " + TextContent.correct}</span>{" "}
          /{" "}
          <span className="partial">{partial + " " + TextContent.partial}</span>{" "}
          /{" "}
          <span className="incorrect">
            {incorrect + " " + TextContent.incorrect}
          </span>
        </div>
      </div>

      <div className="squares">
        {Array.from({ length: total }).map((_, i) => {
          const state = answers[i]?.score;
          let className = "dot";
          if (state === 1) className += " correct";
          else if (state === 0) className += " incorrect";
          else if (state != null) className += " partial";
          else className += " unanswered";

          if (selectedIndex === i) className += " selected";

          return (
            <div key={i} className={className} onClick={() => handleClick(i)} />
          );
        })}
      </div>
    </div>
  );
};

export default ResultsInProgress;
