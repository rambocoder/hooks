import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Display count', () => {
  render(<App />);
  const displayElement = screen.getByText(/Class/i);
  expect(displayElement).toBeInTheDocument();
});
