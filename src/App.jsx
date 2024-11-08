import React from "react";
import Footer from "./components/common/Footer";
import AiArchitecture from "./components/HomePage/AiArchitecture";
import "./App.css";
import Partners from "./components/HomePage/Partners";
import BuildAi from "./components/HomePage/BuildAi";
import ApplyAi from "./components/HomePage/ApplyAi";

export default function App() {
  return (
    <div className="app">
      <AiArchitecture />
      <Partners />
      <BuildAi />
      <ApplyAi />
      <Footer />
    </div>
  );
}
