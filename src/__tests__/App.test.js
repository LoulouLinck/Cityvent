import { render, within } from '@testing-library/react'; // import render() function from @testing-library/react package
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App'; // imports App component from App.js 

describe('<App /> component', () => { // new group/scope created via describe() function
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {     
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('renders NumberOfEvents component', () => {
    const numberOfEventsComponent = AppDOM.querySelector('#numberOfEvents');
    expect(numberOfEventsComponent).toBeInTheDocument();
  });

  // test('renders NumberOfEvents component', () => {
  //   expect(AppDOM.querySelector('#numberOfEvents')).toBeInTheDocument();
  // }); // Why this worked too?
});

describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, "Berlin"); // simulates typing 'Berlin' in city textbox
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany'); // filters suggestions list to 2 suggestions: 'Berlin, Germany' & hardcoded 'See all cities'
    await user.click(berlinSuggestionItem); // simulates clicking on the list item 'Berlin, Germany'

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  // queries #event-list (EventList component root node DOM), finds what Event list item is rendered inside.  

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany' //Gets a list of all events from the mock data that are located in “Berlin, Germany”.
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length); //Comparing number of events located in "Berlin, Germany" w/ array of rendered Event list items.
    a
    llRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany"); //loops over filtered event list items w/ allRenderedEventItems: makes sure all items contain “Berlin, Germany”.
    });  
  });
});