// App.js
import React from 'react';
import RadioButtons from './RadioButtons';
import ShowResultButton from './ShowResultButton';
import Results from './Results';
import { FilterProvider } from './FilterContext';

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <h1>Radio Button Filter Example</h1>
        <RadioButtons />
        <ShowResultButton />
        <Results />
      </FilterProvider>
    </div>
  );
}

export default App;
