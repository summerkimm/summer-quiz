import { useState } from "react";
import { IMAGES } from "../../images";
import "./Slide.css";

function ImageSlide() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className="slide-container">
      <div className="slide-wrapper" onMouseEnter={onStop} onMouseLeave={onRun}>
        <div className={"slide original".concat(animate ? "" : " stop")}>
          {IMAGES.map((image, index) => (
            <div key={index}>
              <img className="image"  src={image} alt="이미지" />
            </div>
          ))}
        </div>
        <div className={"slide clone".concat(animate ? "" : " stop")}>
          {IMAGES.map((image, index) => (
            <div key={index}>
              <img className='image' src={image} alt="이미지" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ImageSlide;
