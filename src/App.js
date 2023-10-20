import { useEffect, useState } from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
// import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';

import { getEvents } from './api';

import './App.css';






const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
}


  
  return (
    <div className="App">
     <CitySearch />
     <EventList events={events} />
    {/* why tests fails when importing event? */}
     {/* <Event/> */}
     <NumberOfEvents/>
    </div>
  );
}

export default App;
