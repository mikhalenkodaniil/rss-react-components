import { render } from '@testing-library/react';
import ResBoard from './ResBoard';

test('data = undefined = 0', () => {
  const { container } = render(<ResBoard name="" />);
  expect(container.firstChild).toBeNull();
});
