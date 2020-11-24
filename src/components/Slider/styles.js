import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => props.visible || 'block'};

  @media (max-width: 720px) {
    display: block;
    width: 100vw;
    height: 100%;
  }
`;
export const DivCarousel = styled.div`
  @media (max-width: 720px) {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;
