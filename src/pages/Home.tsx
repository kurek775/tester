import React from "react";
import { TextContent } from "../lang/TextContent";

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{TextContent.homeTitle}</h1>
    </div>
  );
};

export default HomePage;
