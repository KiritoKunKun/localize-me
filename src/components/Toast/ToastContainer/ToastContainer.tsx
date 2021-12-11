import React from 'react';
import { ToastMessage } from '../../../contexts/ToastContext';
import { Toast } from '../Toast/Toast';
import { Container } from './ToastContainerStyle';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={`toast-${message.id}`} message={message} />
      ))}
    </Container>
  );
};
