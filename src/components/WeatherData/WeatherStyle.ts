import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 32rem;
  height: 15.2rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 32rem;
  height: 8rem;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  h1 {
    font-size: 4.8rem;
    text-align: center;
  }

  span {
    font-size: 1.2rem;
    text-align: center;

    :first-letter {
      text-transform: capitalize;
    }
  }
`;

export const TemperatureItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      font-size: 2rem;
    }
  }
`;

export const AdditionalDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3.2rem;
  height: 7.2rem;
`;

export const WeatherItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.6rem;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    strong {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;
