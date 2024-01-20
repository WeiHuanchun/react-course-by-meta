import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ComponentWithMousePosition from './path-to-your-component/ComponentWithMousePosition';

describe('ComponentWithMousePosition', () => {
    it('renders without crashing', () => {
        render(<ComponentWithMousePosition />);
    });

    it('updates mouse position on mouse move', () => {
        const { getByTestId } = render(<ComponentWithMousePosition />);
        const component = getByTestId('component-with-mouse-position');

        act(() => {
            fireEvent.mouseMove(window, { clientX: 50, clientY: 50 });
        });

        expect(component).toHaveStyle({ marginLeft: '10px' });
        expect(component).toHaveTextContent('Mouse position: (50, 50)');
    });
});