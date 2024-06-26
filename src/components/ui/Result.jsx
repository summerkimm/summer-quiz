import { RESULT_IMAGES } from "../../images";
import "./Result.css";
import { Link } from 'react-router-dom';

function Result({ score, questions }) {
  const ResultText = () => {
    const third = questions / 3;

    if (score === 0) {
      return (
        <>
          <img className="result-image" src={RESULT_IMAGES[0]} alt="image1" />
          <p className="result-text">김소은이 누군지 아시나요..?</p>
        </>
      );
    } else if (score > 0 && score <= third) {
      return (
        <>
          <img className="result-image" src={RESULT_IMAGES[1]} alt="image2" />
          <p className="result-text">김소은이 신경쓰이기 시작했군요...</p>
        </>
      );
    } else if (score > third && score <= 2 * third) {
      return (
        <>
          <img className="result-image" src={RESULT_IMAGES[2]} alt="image2" />
          <p className="result-text">김소은을 사랑하기 시작했군요...</p>
        </>
      );
    } else if (score > 2 * third && score < questions) {
      return (
        <>
          <img className="result-image" src={RESULT_IMAGES[3]} alt="image3" />
          <p className="result-text">김소은에게 푹 빠져버리셨군요...</p>
        </>
      );
    } else if (score === questions) {
      return (
        <>
          <img className="result-image" src={RESULT_IMAGES[4]} alt="image3" />
          <p className="result-text">
            김소은의 뽀뽀를 받을 행운의 주인공! ( ˘ ³˘)♥
          </p>
        </>
      );
    }
  };

  return (
    <div className="result-container">
      <p className="result-text">
        {questions} 문제 중 <span>{score}</span>개를 맞춘 당신!
      </p>
      <div className="result-content">
        <ResultText />
      </div>
      <Link to="/" className="result-button">다시 풀기</Link>
    </div>
  );
}

export default Result;
