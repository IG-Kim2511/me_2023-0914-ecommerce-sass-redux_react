// RadioButtons.js
import React from 'react';
import { useFilterContext } from './FilterContext';

const RadioButtons = () => {
  const { selectedOption, setSelectedOption } = useFilterContext();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      {/* Repeat this pattern for other radio options */}
    </div>
  );
};

export default RadioButtons;



// ShowResultButton.js
import React from 'react';
import { useFilterContext } from './FilterContext';

const ShowResultButton = () => {
  const { selectedOption, setRenderResults } = useFilterContext();


  return (
    <div>
      <button onClick={setRenderResults(true)}>Go</button>
    </div>
  );
};

export default ShowResultButton;
