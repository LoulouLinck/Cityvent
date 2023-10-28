import React, { useState } from 'react';

const Event = ({ event }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <li className="event-item">
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button className="details-btn" onClick={toggleDetails}>
        {detailsVisible ? '- Details' : '+ Details'}
      </button>
      {detailsVisible && 
       <div className="event-details">
       <h3 className="event-about">About Event:</h3>
       <a className="event-link" href={event.htmlLink}>See details on Google Calendar</a>
       <p className="event-description">{event.description}</p>
     </div>
      }
    </li>
  );
}
  
export default Event;