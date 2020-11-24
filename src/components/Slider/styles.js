import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => props.visible || 'block'};

  @media (max-width: 720px) {
    display: block;
    height: 100vh;
    width: 100vw;
  }
`;
export const DivCarousel = styled.div`
  @media (max-width: 720px) {
    display: block;
    width: 300px;
    width: 100%;
    opacity: 0.3;
  }
`;
