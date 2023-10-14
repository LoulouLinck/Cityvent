import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('contains an input with role of textbox', () => {
        const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
        expect(textbox).toBeInTheDocument();
      });
    
    test('default value of the input field is 32', () => {
        const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
        expect(textbox).toHaveValue('32');
      });
    
    test('value of the textbox changes when a user types in it', async () => {
        const user = userEvent.setup();
        const textbox = NumberOfEventsComponent.getByLabelText("Number of Events:");
        await user.type(textbox, '{backspace}{backspace}10');
        expect(textbox).toHaveValue('10');
      });

});