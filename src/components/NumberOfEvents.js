import React, { useState } from 'react';

const NumberOfEvents = () => {
const [numberOfEvents, setNumberOfEvents] = useState("32"); // Set a default value of 32

const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
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