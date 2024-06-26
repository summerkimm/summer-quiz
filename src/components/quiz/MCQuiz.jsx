import "../../App.css";

function MCQuiz({ question, onAnswer }) {
  return (
    <div className='question-content'>
      <div className="question-mc">{question.question}</div>
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          gap: "10px",
        }}
      >
        {question.options.map((option, index) => (
          <button
            className="button-mc"
            key={index}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MCQuiz;
