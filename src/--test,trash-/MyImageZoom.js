
import React, { useEffect, useRef } from 'react';
import ImageZoom from 'js-image-zoom';

const MyImageZoom = () => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      width: 400,
      zoomWidth: 500,
      offset: { vertical: 0, horizontal: 10 },
    };

    new ImageZoom(imgContainerRef.current, options);
  }, []);

  return (
    <div id="img-container" style={{ width: '400px' }} ref={imgContainerRef}>
      <img src="https://i.imgur.com/ngBbEN5.jpg" alt="Example" />
    </div>
  );
};

export default MyImageZoom;
