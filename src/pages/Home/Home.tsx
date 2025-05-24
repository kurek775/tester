import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import { demoTest } from "../../data/Mock";
import TestCard from "../../components/TestCard";
const HomePage: React.FC = () => {
  const testList = [demoTest];
  return (
    <div>
      <Header pageHeading={TextContent.homeTitle} />
      {testList.map((test, index) => (
        <TestCard key={index} testCode={test.code} testTitle={test.title} />
      ))}
    </div>
  );
};

export default HomePage;
