import { Link } from "react-router-dom";
import ImageSlide from "../ui/Slide";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main">
      <p className='main-text'>
        당신은 <span className="name">김소은</span>에 대해 얼마나 알고 있나요?
      </p>
      <ImageSlide />
      <Link to="/quiz" className="start-button">
        START
      </Link>
    </div>
  );
}
export default MainPage;
