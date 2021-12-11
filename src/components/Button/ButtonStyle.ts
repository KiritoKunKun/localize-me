import { rgba, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 0.2rem solid #ffffff;
  border-radius: 0.4rem;

  :hover {
    background-color: rgb(135, 206, 235, 0.4);
  }

  :active {
    background-color: ${shade(0.05, rgba(135, 206, 235, 0.4))};
  }

  :disabled {
    background-color: ${shade(0.05, rgba(255, 255, 255, 0.2))};
    color: rgb(255, 255, 255, 0.5);
    border-color: transparent;
    cursor: default;
  }
`;
