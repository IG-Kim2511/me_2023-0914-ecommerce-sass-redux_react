// ShowResultButton.js
import React from 'react';
import { useFilterContext } from './FilterContext';

const ShowResultButton = () => {
  const { selectedOption, setRenderResults } = useFilterContext();

  const handleShowResults = () => {
    setRenderResults(true); // Set the flag to render results
  };

  return (
    <div>
      <button onClick={handleShowResults}>Go</button>
    </div>
  );
};

export default ShowResultButton;
