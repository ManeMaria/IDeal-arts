import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: grid;
    width: 100vw;
    height: 40vh;
    margin: 'auto';

    a {
      display: flex;
      align-self: center;
      border: 6px solid #000;
      width: 73%;
      height: 57%;
      border-radius: 50px;
      margin: auto 10%;
      p {
        margin: 2% 15%;
        color: #000;
        font-weight: 500;
      }
    }
  }
`;

export const SocialImg = styled.img`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.width || 'auto'};
  border-radius: ${(props) => props.radius || 0};
  margin-left: -1%;
  margin-top: -1%;
`;
