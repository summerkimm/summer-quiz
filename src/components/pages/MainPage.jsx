import { Link } from "react-router-dom";
import Slide from "../ui/Slide";
import "./MainPage.css";
import { useState } from 'react';

function MainPage() {
  // const [animate, setAnimate] = useState(true);
  // const onStop = () => setAnimate(false);
  // const onRun = () => setAnimate(true);

  return (
    <div className="main">
      <p>
        당신은 <span className="name">김소은</span>에 대해 얼마나 알고 있나요?
      </p>
      <Slide />
      <Link to="/quiz" className="start-button">
        START
      </Link>
    </div>
  );
}
export default MainPage;
