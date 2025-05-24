// src/App.tsx
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Test from "./pages/Test";
import Layout from "./components/Layout";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/test/:file" element={<Layout />}>
          <Route index element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
