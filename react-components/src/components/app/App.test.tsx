import {render, screen} from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ test: 100 }),
        }),
        ) as jest.Mock;

    render (<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); 
});