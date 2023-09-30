import React, { useState, useEffect, useRef } from 'react';
import './MagnifyingGlass.css';

function MagnifyingGlass({ src }) {
  const [zoomed, setZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = imageRef.current.getBoundingClientRect();
      const cursorX = e.clientX - left;
      const cursorY = e.clientY - top;

      setCursorPosition({ x: cursorX, y: cursorY });
    };

    imageRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      imageRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="magnifying-glass-container">
      <div
        className={`magnifying-glass ${zoomed ? 'zoomed' : ''}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `-${cursorPosition.x}px -${cursorPosition.y}px`,
        }}
      />
      <img
        ref={imageRef}
        className="image"
        src={src}
        alt="Image"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      />
    </div>
  );
}

export default MagnifyingGlass;
