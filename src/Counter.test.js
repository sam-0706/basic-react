import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

describe('Counter Component', () => {
  test('it should render the counter with initial value 0', () => {
    render(<Counter />);

    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('it should increment the counter value when the button is clicked', () => {
    render(<Counter />);

    const button = screen.getByText('Increment');
    fireEvent.click(button);

    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('1');
  });
});
