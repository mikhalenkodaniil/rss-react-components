import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

test('404 Page is displayed for invalid route', () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );
  const notFoundMessage = screen.getByText(/404 Not Found/i);
  expect(notFoundMessage).toBeInTheDocument();
});
