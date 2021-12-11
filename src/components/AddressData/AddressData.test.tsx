import { cleanup, render, screen } from '@testing-library/react';
import { AddressData } from './AddressData';

const address = 'Avenida Brasil';

afterEach(cleanup);

it('Should show AddressData on screen', () => {
  render(<AddressData address={address} loading={false} />);

  const addressText = screen.queryByText(address);

  expect(addressText).toBeVisible();
});

it('Should be loading AddressData', () => {
  render(<AddressData address={address} loading={true} />);

  const addressText = screen.queryByText(address);

  expect(addressText).toBeNull();
});
