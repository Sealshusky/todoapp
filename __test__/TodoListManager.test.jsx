import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListManager from '../components/TodoListManager';

describe('TodoListManager Component', () => {
  it('adds a todo item', () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<TodoListManager />);

    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');

    fireEvent.changeText(input, 'Buy milk');
    fireEvent.press(addButton);

    expect(getByText('Buy milk')).toBeTruthy();
  });

  it('removes a todo item', () => {
    const { getByTestId, getByPlaceholderText, getByText, queryByText } = render(<TodoListManager />);

    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');

    fireEvent.changeText(input, 'Walk dog');
    fireEvent.press(addButton);

    const removeButton = getByTestId(/remove-todo-button/);
    fireEvent.press(removeButton);

    expect(queryByText('Walk dog')).toBeNull();
  });
});
