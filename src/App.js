import { useEffect, useState } from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
// import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { InfoAlert } from './components/Alert';
import { ErrorAlert } from './components/Alert';

import { extractLocations, getEvents } from './api';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
};

  return (
    <div className="App">
      <h1>Cityvent</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
     <CitySearch allLocations={allLocations}  setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert} />
     <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
     <CityEventsChart allLocations={allLocations} events={events} />
      
     <div className="charts-container">
       <CityEventsChart allLocations={allLocations} events={events} />
       <EventGenresChart events={events} />
     </div>
     <EventList events={events} />
    </div>
  );
}

export default App;
