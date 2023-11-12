// import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  test('saves entered value to local storage on Search button click', () => {
    // Рендерим компонент
    const { getByPlaceholderText, getByText } = render(<Search />);

    // Получаем поле ввода по метке (предположим, у вас есть метка 'Search Input')
    const searchInput = getByPlaceholderText('Search your people in StarWars');

    // Задаем значение в поле ввода
    fireEvent.change(searchInput, { target: { value: 'testValue' } });

    // Получаем кнопку по тексту (предположим, у вас есть кнопка с текстом 'Search')
    const searchButton = getByText('Search');

    // Нажимаем на кнопку
    fireEvent.click(searchButton);

    // Проверяем, что значение сохранено в локальном хранилище
    expect(localStorage.getItem('name')).toBe('testValue');
  });
});