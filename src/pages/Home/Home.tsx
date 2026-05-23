import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import TestCard from "../../components/TestCard";
import type { TestCardItem } from "../../models/Test.model";
import MnozinyRelace from "../../data/MnozinyRelace";
import JazykAutomaty from "../../data/JazykAutomaty";
import PredikatyLogika from "../../data/PredikatyLogika";
import LinearniAlgebra from "../../data/LinearniAlgebra";
import Algoritmizace from "../../data/Algoritmizace";
import Rekurze from "../../data/Rekurze";
import Mix from "../../data/Mix";
import TestMixAI from "../../data/TestMixAI";
import Random from "../../data/Random";
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const testList: TestCardItem[] = [
    { test: MnozinyRelace, link: "MnozinyRelace" },
    { test: JazykAutomaty, link: "JazykAutomaty" },
    { test: PredikatyLogika, link: "PredikatyLogika" },
    { test: LinearniAlgebra, link: "LinearniAlgebra" },
    { test: Algoritmizace, link: "Algoritmizace" },
    { test: Rekurze, link: "Rekurze" },
    { test: Mix, link: "Mix" },
    { test: TestMixAI, link: "TestMixAI" },
    { test: Random, link: "Random" },
  ];
  return (
    <div>
      <Header pageHeading={TextContent.homeTitle}>
        <Button variant="success" onClick={() => navigate("/guide")}>
          {TextContent.studyGuide}
        </Button>
      </Header>
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
