import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 2rem;
    text-align: center;
    margin-top: 0.8rem;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
  }

  h1 {
    font-size: 8rem;
    text-align: center;
  }

  strong {
    font-size: 2.4rem;
    text-align: center;
  }

  span {
    font-size: 2rem;
    text-align: center;
  }
`;
