import { render, screen } from '@testing-library/react';
import App from './App';
import { ItemsProvider } from './context/ItemsContext';
import userEvent from '@testing-library/user-event';

test('renders grocery list title', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  const title = screen.getByRole('heading', /grocery list/i);
  expect(title).toBeInTheDocument();

  //addItems

  //deleteItems

  //editItems

  //clearAll
});

test('addItems button functioning', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add item/i });
  userEvent.type(input, 'broccoli');
  userEvent.click(button);
  expect(screen.getByText('broccoli'));
});

test('edit button functioning', () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  const edit = screen.getByLabelText('edit spinach');
  userEvent.click(edit);
  const editInput = screen.getByLabelText('editInput spinach');
  userEvent.type(editInput, '{selectall}{del}cake');

  const save = screen.getByLabelText('save cake');
  userEvent.click(save);

  expect(screen.getByText('cake')).toBeInTheDocument();
});
