import React, { useState } from 'react';
import './MagnifyingGlass.css';

function MagnifyingGlass({ src }) {
  const [zoomed, setZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  /* 
  handleMouseMove 함수는 이미지에서 마우스가 움직일 때 호출되며,
   e.target.getBoundingClientRect()를 사용하여 마우스 커서의 위치를 정확하게 계산하고 cursorPosition 상태를 업데이트합니다. 
  */
  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const cursorX = e.clientX - left;
    const cursorY = e.clientY - top;

    setCursorPosition({ x: cursorX, y: cursorY });
  };

  return (
    <div className="magnifying-glass-container">
      <div
        className={`magnifying-glass ${zoomed ? 'zoomed' : ''}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `-${cursorPosition.x}px -${cursorPosition.y}px`,
          display: zoomed ? 'block' : 'none',
        }}
      />
      <img
        className="image"
        src={src}
        alt="Image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}

export default MagnifyingGlass;
