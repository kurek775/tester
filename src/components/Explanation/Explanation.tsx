import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./explanation.css";
interface Props {
  explanation: string;
}

const ExplanationBox: React.FC<Props> = ({ explanation }) => {
  return (
    <div className="p-3 explanation rounded">
      <strong>{TextContent.explanation}</strong> {explanation}
    </div>
  );
};

export default ExplanationBox;
