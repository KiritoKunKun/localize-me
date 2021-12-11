import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ToastType } from '../../../interfaces/ToastInterfaces';

interface ContainerProps {
  type: ToastType;
  hasDescription: boolean;
  opacity: number;
  transitionDuration: number;
}

type ToastTypeVariations = {
  [key in ToastType]: FlattenSimpleInterpolation;
};

const containerVariations: ToastTypeVariations = {
  [ToastType.ERROR]: css`
    background: #fddede;
    color: #c53030;
  `,
};

const textVariations: ToastTypeVariations = {
  [ToastType.ERROR]: css`
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 36rem;

  position: relative;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 1rem;

  display: flex;

  & + div {
    margin-top: 0.8rem;
  }

  ${({ type }) => containerVariations[type]};

  ${({ opacity, transitionDuration }) => css`
    opacity: ${opacity};
    transition-duration: ${transitionDuration}ms;
  `}

  > svg {
    margin-right: 1.2rem;

    ${({ type }) => textVariations[type]};
  }

  div {
    flex: 1;

    strong {
      font-size: 1.6rem;

      ${({ type }) => textVariations[type]};
    }

    p {
      margin-top: 0.4rem;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 2rem;

      ${({ type }) => textVariations[type]};
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.6;
    border: 0;
    background: transparent;

    svg {
      ${({ type }) => textVariations[type]};
    }
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
