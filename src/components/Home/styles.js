import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  @media (max-width: 720px) {
    height: 80vh;
    width: 80vw;
    margin: auto;
  }
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
  margin: 5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p {
    font-size: 4rem;
  }

  @media (max-width: 720px) {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;
