import { render, screen } from '@testing-library/react';
import App from '../app/App';
import { act } from 'react-dom/test-utils';

act(() => {
  test('renders Results component', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
      })
    ) as jest.Mock;
    render(<App />);
    const linkElement = screen.getByText(/Searching.../i);
    expect(linkElement).toBeInTheDocument();
  });
});
