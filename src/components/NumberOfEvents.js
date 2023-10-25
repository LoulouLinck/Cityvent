import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
const [numberOfEvents, setNumberOfEvents] = useState("32"); // Set a default value of 32

const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
    setCurrentNOE(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are allowed.";
      setErrorAlert(errorText);
    } else {
      errorText = "";
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
};

return (
    <div id="numberOfEvents">
      <label htmlFor="eventNumberInput">Number of Events:</label>
      <input 
        id="eventNumberInput"
        type="text"
        value={numberOfEvents}
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
        className="event-number-input"
      />
    </div>
  );
};
export default NumberOfEvents;