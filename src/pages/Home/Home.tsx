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
import Algoritmizace from "../../data/Algoritmizace";
import Rekurze from "../../data/Rekurze";
import Mix from "../../data/Mix";
import TestMixAI from "../../data/TestMixAI";
import Random from "../../data/Random";
const HomePage: React.FC = () => {
  const testList: TestCardItem[] = [
    { test: Random, link: "Random" },
    { test: MnozinyRelace, link: "MnozinyRelace" },
    { test: JazykAutomaty, link: "JazykAutomaty" },
    { test: PredikatyLogika, link: "PredikatyLogika" },
    { test: LinearniAlgebra, link: "LinearniAlgebra" },
    { test: Algoritmizace, link: "Algoritmizace" },
    { test: Rekurze, link: "Rekurze" },
    { test: Mix, link: "Mix" },
    { test: TestMixAI, link: "TestMixAI" },
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
