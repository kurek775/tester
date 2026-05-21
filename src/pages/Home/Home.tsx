import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import TestCard from "../../components/TestCard";
import type { TestCardItem } from "../../models/Test.model";
import MnozinyRelace from "../../data/OLD/MnozinyRelace";
import JazykAutomaty from "../../data/OLD/JazykAutomaty";
import PredikatyLogika from "../../data/OLD/PredikatyLogika";
import LinearniAlgebra from "../../data/OLD/LinearniAlgebra";
import Algoritmizace from "../../data/OLD/Algoritmizace";
import Rekurze from "../../data/OLD/Rekurze";
import Mix from "../../data/OLD/Mix";
import TestMixAI from "../../data/TestMixAI";
import Random from "../../data/OLD/Random";
const HomePage: React.FC = () => {
  const testList: TestCardItem[] = [
    { test: MnozinyRelace, link: "OLD/MnozinyRelace" },
    { test: JazykAutomaty, link: "OLD/JazykAutomaty" },
    { test: PredikatyLogika, link: "OLD/PredikatyLogika" },
    { test: LinearniAlgebra, link: "OLD/LinearniAlgebra" },
    { test: Algoritmizace, link: "OLD/Algoritmizace" },
    { test: Rekurze, link: "OLD/Rekurze" },
    { test: Mix, link: "OLD/Mix" },
    { test: TestMixAI, link: "TestMixAI" },
    { test: Random, link: "OLD/Random" },
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
