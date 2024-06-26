import "../../App.css";

function OXQuiz({ question, onAnswer }) {
  return (
    <div className='question-content'>
      <div className='question-ox'>{question.question}</div>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          gap: "10px",
        }}
      >
        <button className="button-ox" onClick={() => onAnswer("O")}>
          O
        </button>
        <button className="button-ox" onClick={() => onAnswer("X")}>
          X
        </button>
      </div>
    </div>
  );
}

export default OXQuiz;
