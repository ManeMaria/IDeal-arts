import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: block;
    height: 100vh;
    width: 100vw;
  }
`;
export const DivCarousel = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: block;
    width: 300px;
    width: 100%;
    opacity: 0.3;
  }
`;
