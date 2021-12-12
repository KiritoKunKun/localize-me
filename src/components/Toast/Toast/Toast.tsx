import React, { useEffect, useState } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../contexts/ToastContext';
import { ToastType } from '../../../interfaces/ToastInterfaces';
import { Container } from './ToastStyle';

interface ToastProps {
  message: ToastMessage;
}

type ToastIcons = {
  [key in ToastType]: JSX.Element;
};

const icons: ToastIcons = {
  [ToastType.ERROR]: <FiAlertCircle size={24} />,
};

const TOAST_DURATION = 5000;
const TRANSITION_DURATION = 800;

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 10);

    const timer = setTimeout(() => {
      removeToast(message.id);
    }, TOAST_DURATION);

    setTimeout(() => setOpacity(0), TOAST_DURATION - TRANSITION_DURATION);

    return () => {
      setOpacity(0);

      setTimeout(() => {
        clearTimeout(timer);
      }, TRANSITION_DURATION);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      opacity={opacity}
      transitionDuration={TRANSITION_DURATION}
    >
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};
