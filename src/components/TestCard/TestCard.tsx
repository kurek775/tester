import React, { useEffect, useState } from "react";
import "./testcard.css";
import Graph from "../Graph";
import { getData } from "../utils/LocalStorage.utils";
import type { Record } from "../utils/LocalStorage.utils";
interface TestCardProps {
  testTitle: string;
  testCode: string;
}

const TestCard: React.FC<TestCardProps> = ({ testTitle, testCode }) => {
  const [data, setData] = useState<Record[]>([]);
  useEffect(() => {
    setData(getData(testCode));
  }, []);

  return (
    <div className="card-wrapper">
      <div className="rounded">
        <h3>{testTitle}</h3>

        <Graph points={data} />
      </div>
    </div>
  );
};

export default TestCard;
