import { Container } from './ButtonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
