import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import Mock from "../../data/Mock";
import TestCard from "../../components/TestCard";
import Testovatko from "../../data/Testovatko";
import type { TestCardItem } from "../../models/Test.model";
const HomePage: React.FC = () => {
  const testList: TestCardItem[] = [
    { test: Mock, link: "Mock" },
    { test: Testovatko, link: "Testovatko" },
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
