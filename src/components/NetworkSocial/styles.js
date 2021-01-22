import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: grid;
    width: 80vw;
    height: 50vh;
    margin: 'auto';

    a {
      display: flex;
      align-self: center;
      border: 3.5px solid #000;
      width: 73%;
      height: 57%;
      border-radius: 50px;
      margin: auto 10%;
      position: relative;
      p {
        font-size: 0.75em;
        margin: auto 20%;
        color: #000;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 360px) {
    width: 100vw;
    height: 70vh;
  }
`;

export const SocialImg = styled.img`
  width: 20%;
  height: 102%;
  border-radius: ${(props) => props.radius || 0};
  margin-left: -0.5%;
  margin-top: 0%;
  position: absolute;
`;
