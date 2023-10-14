import { render } from '@testing-library/react'; // import render() function from @testing-library/react package
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
  // });
});