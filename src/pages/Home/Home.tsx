import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import TestCard from "../../components/TestCard";
import MnozinyRelace from "../../data/MnozinyRelace";
import JazykAutomaty from "../../data/JazykAutomaty";
import PredikatyLogika from "../../data/PredikatyLogika";
import LinearniAlgebra from "../../data/LinearniAlgebra";
import type { TestCardItem } from "../../models/Test.model";
const HomePage: React.FC = () => {
  const testList: TestCardItem[] = [
    { test: MnozinyRelace, link: "MnozinyRelace" },
    { test: JazykAutomaty, link: "JazykAutomaty" },
    { test: PredikatyLogika, link: "PredikatyLogika" },
    { test: LinearniAlgebra, link: "LinearniAlgebra" },
  ];
  return (
    <div>
      <Header pageHeading={TextContent.homeTitle} />
      {testList.map((testItem, index) => (
        <TestCard
          key={index}
          testCode={testItem.test.code}
          testTitle={testItem.test.title}
          link={testItem.link}
        />
      ))}
    </div>
  );
};

export default HomePage;
