import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CommonLayout from "./CommonLayout";
import MainPage from "./components/pages/MainPage.jsx";
import QuizPage from "./components/pages/QuizPage.jsx";

function App() {
  return (
    <div className="app">
      <CommonLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </BrowserRouter>
      </CommonLayout>
    </div>
  );
}

export default App;
