// Results.js
import React from 'react';
import { useFilterContext } from './FilterContext';

const Results = () => {
  const { selectedOption, renderResults } = useFilterContext();

  // Define a function to compute the results based on the selected option
  const computeResults = () => {
    // Implement your logic to generate results based on selectedOption
    // Return the results as JSX
  };

  return (
    <div>
      {
        renderResults && (
                <>
                  <h2>Results:</h2>
                  {computeResults()}
                </>
              )}
            </div>
          );
        };

export default Results;
