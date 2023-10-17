import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent, allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

    test('renders list of events title', () => {
        const eventTitle = EventComponent.queryByText(allEvents[0].summary);
        expect(eventTitle).toBeInTheDocument();
    });
    
    test('renders event start time', () => {
        const eventStartTime = EventComponent.queryByText(allEvents[0].created);
        expect(eventStartTime).toBeInTheDocument();
    });
    
    test('renders event location', () => {
        const eventLocation = EventComponent.queryByText(allEvents[0].location);
        expect(eventLocation).toBeInTheDocument();
    });
    
    test('renders "show details" button', () => {
        const showDetailsButton = EventComponent.container.querySelector('.details-btn');
        expect(showDetailsButton).toBeInTheDocument();
    });
    
    test('hide event details by default', () => {
        const eventDetails = EventComponent.container.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });
      
    test("'show details' button reveals event details when clicked", async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.container.querySelector('.details-btn');
        await user.click(showDetailsButton);
      
        const eventDetails = EventComponent.container.querySelector('.event-details');
        expect(eventDetails).toBeInTheDocument();
    });
      
    test("'hide details' button hides event details when clicked", async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.container.querySelector('.details-btn');
        await user.click(showDetailsButton);
      
        const hideDetailsButton = EventComponent.container.querySelector('.hide-details-button');
        await user.click(hideDetailsButton);
      
        const eventDetails = EventComponent.container.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });  
    
  
});
