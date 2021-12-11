import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

afterEach(cleanup);

it('Should show button on screen', () => {
  render(<Button>Test Button</Button>);

  const button = screen.getByText('Test Button');

  expect(button).toBeInTheDocument();
});

it('Should click button', () => {
  render(<Button>Test Button</Button>);

  const button = screen.getByText('Test Button');

  userEvent.click(button);

  expect(button).toHaveFocus();
});
