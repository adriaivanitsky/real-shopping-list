import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grocery list title', () => {
  render(<App />);
  const title = screen.getByRole('heading', /grocery list/i);
  expect(title).toBeInTheDocument();
});
