import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
// import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';


const App = () => {
  return (
    <div className="App">
     <CitySearch />
     <EventList />
    {/* why tests fails when importing event? */}
     {/* <Event/> */}
     <NumberOfEvents/>
    </div>
  );
}

export default App;
