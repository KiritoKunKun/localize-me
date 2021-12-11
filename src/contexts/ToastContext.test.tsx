import { cleanup, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import AppProvider from '.';
import { ToastType } from '../interfaces/ToastInterfaces';
import { useToast } from './ToastContext';

afterEach(cleanup);

it('Should show Toast on screen', () => {
  const description = 'Error description';

  const TestComponent: React.FC = () => {
    const { addToast } = useToast();

    useEffect(() => {
      addToast({
        type: ToastType.ERROR,
        title: 'Error',
        description,
      });
    }, []);

    return <></>;
  };

  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );

  const descriptionText = screen.queryByText(description);

  expect(descriptionText).toBeDefined();
});
