import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  test('saves entered value to local storage on Search button click', () => {
    const { getByPlaceholderText, getByText } = render(<Search />);
    const searchInput = getByPlaceholderText('Search your people in StarWars');
    fireEvent.change(searchInput, { target: { value: 'testValue' } });
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);
    expect(localStorage.getItem('name')).toBe('testValue');
  });
});
