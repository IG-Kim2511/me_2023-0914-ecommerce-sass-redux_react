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
    <div id="slider">    

      {/*🦄0348 react에서 transition효과 넣기 : image 모두 화면에 구현, style을 jsx html에 넣고, transform에 코드 넣음  */}
      {/*🦄translateX
          0x 50 = 0vw (translate)
          1x 50 = 50vw (translate)
          2x 50 = 100vw (translate)
      */} 
      <section className="container" style={{transform:`translateX(-${currentSlide * 50}vw)`}}>

      {/* // 🦄 */}
      <img src={data[0]} alt="0" />
      <img src={data[1]} alt="1" />
      <img src={data[2]} alt="2" />
      </section>

      <section className="icons">
      {/* // 🦄 */}
        <button className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </button>
        <button className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </button>
      </section>
    </div>
  );
};

export default Slider;
