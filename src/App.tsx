import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Test from "./pages/Test";
import GuideIndex from "./pages/GuideIndex/GuideIndex";
import GuidePage from "./pages/Guide/Guide";
import Layout from "./components/Layout";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/test/:file" element={<Layout />}>
          <Route index element={<Test />} />
        </Route>
        <Route path="/guide" element={<Layout />}>
          <Route index element={<GuideIndex />} />
        </Route>
        <Route path="/guide/:area" element={<Layout />}>
          <Route index element={<GuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
