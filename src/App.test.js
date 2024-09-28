import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Counter component', () => {
  render(<App />);
  const counterValue = screen.getByTestId('counter-value');
  expect(counterValue).toBeInTheDocument();
});
