import React, { useEffect, useState } from "react";
import "./testcard.css";
import Graph from "../Graph";
import {
  getCompletedTestResults,
  getInProgressTestResults,
} from "../utils/LocalStorage.utils";
import type { Record } from "../../models/Record.model";
import { Button } from "react-bootstrap";
import { TextContent } from "../../lang/TextContent";
import { useNavigate } from "react-router-dom";
interface TestCardProps {
  testTitle: string;
  testCode: string;
  link: string;
}

const TestCard: React.FC<TestCardProps> = ({ testTitle, testCode, link }) => {
  const [data, setData] = useState<Record[]>([]);
  const [inProgress, setInProgress] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    setData(getCompletedTestResults(testCode));
    setInProgress(Boolean(getInProgressTestResults(testCode).length));
  }, []);
  const handleLinkClick = () => {
    navigate("/test/" + link);
  };
  return (
    <div className="card-wrapper">
      <div className="rounded">
        <div className="header">
          <h3>{testTitle}</h3>
          {inProgress && (
            <Button variant="light" onClick={handleLinkClick}>
              {TextContent.continueTest}
            </Button>
          )}
          {!inProgress && (
            <Button variant="success" onClick={handleLinkClick}>
              {TextContent.startTest}
            </Button>
          )}
        </div>
        <Graph points={data} />
      </div>
    </div>
  );
};

export default TestCard;
