
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});