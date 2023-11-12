import { render, screen } from '@testing-library/react';
import OutLinks from './OutLinks';

test('renders learn react link', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    })
  ) as jest.Mock;

  render(<OutLinks />);
  const linkElement = screen.getByText(/Select page/i);
  expect(linkElement).toBeInTheDocument();
});