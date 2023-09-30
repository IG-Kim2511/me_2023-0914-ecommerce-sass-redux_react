import React, { useState, useEffect, useRef } from 'react';
import './MagnifyingGlass.css';

function MagnifyingGlass({ src }) {
  const [zoomed, setZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = imageRef.current.getBoundingClientRect();
      const cursorX = e.clientX - left - 50; // Remove 'TransformX' and '-50%'
      const cursorY = e.clientY - top - 50;  // Remove 'TransformY' and '-50%'

      setCursorPosition({ x: cursorX, y: cursorY });
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleMouseMove);
      }
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
