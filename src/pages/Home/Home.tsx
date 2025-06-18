import React from "react";
import { TextContent } from "../../lang/TextContent";
import "./home.css";
import Header from "../../components/Header";
import TestCard from "../../components/TestCard";
import type { TestCardItem } from "../../models/Test.model";
import ImplementAuth from "../../data/ImplementAuth";
import PlanAndAutomateIdentityGovernance from "../../data/PlanAndAutomateIdentityGovernance";
import ImplementAndManageUserIdentities from "../../data/ImplementAndManageUserIdentities";
const HomePage: React.FC = () => {
  const testList: TestCardItem[] = [
    { test: ImplementAuth, link: "ImplementAuth" },
    {
      test: PlanAndAutomateIdentityGovernance,
      link: "PlanAndAutomateIdentityGovernance",
    },
    {
      test: ImplementAndManageUserIdentities,
      link: "ImplementAndManageUserIdentities",
    },
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
