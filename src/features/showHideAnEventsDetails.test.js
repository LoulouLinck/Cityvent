import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let AppComponent, EventListDOM, eventListItems;

  const setup = async () => {
    AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    EventListDOM = AppDOM.querySelector('#event-list');
    eventListItems = await within(EventListDOM).findAllByRole('listitem');
  };

  test('Initially, the event details are hidden.', ({ given, when, then }) => {
    given('the user is viewing the list of events', setup);

    when('no action is taken on an event', () => {});

    then('the event details should be hidden by default', () => {
      const details = EventListDOM.querySelector('.event-details');
      expect(details).toBeNull();
    });
  });

  test('User can expand an event to view its details.', ({ given, when, then }) => {
    let showDetailsButton;

    given('the user is viewing the list of events', setup);

    when('the user clicks on the button of an event', async () => {
      showDetailsButton = await within(eventListItems[0]).findByText('Show Details');
      userEvent.click(showDetailsButton);
    });

    then('the detailed information about the event should be displayed', async () => {
      await waitFor(() => {
        const details = EventListDOM.querySelector('.event-details');
        expect(details).not.toBeNull();
      });
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let hideDetailsButton;

    given('the user has expanded an event to view its details', async () => {
      await setup();
      const showDetailsButton = await within(eventListItems[0]).findByText('Show Details');
      userEvent.click(showDetailsButton);
      hideDetailsButton = await within(eventListItems[0]).findByText('Hide Details');
    });

    when('the user clicks on the button of the event', () => {
      userEvent.click(hideDetailsButton);
    });

    then('the event details should be hidden again', async () => {
      await waitFor(() => {
        const details = EventListDOM.querySelector('.event-details');
        expect(details).toBeNull();
      });
    });
  });
});