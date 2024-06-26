import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { questions } from "../../question";
import Result from "../Result";
import MCQuiz from "../quiz/MCQuiz";
import OXQuiz from "../quiz/OXQuiz";

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <Result score={score} questions={questions.length} />
      ) : (
        <>
          <div className="question-header">
            <Link style={{ fontSize: "18px" }} to="/">
              HOME
            </Link>
            <span className="question-count">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>

          <div>
            {questions[currentQuestion].type === "OX" ? (
              <OXQuiz
                question={questions[currentQuestion]}
                onAnswer={handleAnswerOptionClick}
              />
            ) : (
              <MCQuiz
                question={questions[currentQuestion]}
                onAnswer={handleAnswerOptionClick}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default QuizPage;
