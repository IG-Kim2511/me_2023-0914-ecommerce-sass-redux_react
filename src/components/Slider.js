import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  // 🦄
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🦄
  const data = [
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",

    
  ];

// 🦄
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">    

      {/*🦄0348 react에서 transition효과 넣기 : image 모두 화면에 구현, style을 jsx html에 넣고, transform에 코드 넣음  */}
      {/*🦄translateX
          0x 100 = 0vw (translate)
          1x 100 = 100vw (translate)
          2x 100 = 200vw (translate)
      */}
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

      {/* // 🦄 */}
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">

      {/* // 🦄 */}
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
