import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100vw;
    height: 50vh;
    margin: auto;
  }
`;

export const SocialImg = styled.img`
  width: ${(props) => props.width};
`;
