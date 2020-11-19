import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
  margin: 100px auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    display: grid;
  }
`;

export const DivCarousel = styled.div`
  margin: 0.5%;
  width: 20%;
  height: 20%;
  position: relative;
  transition: all 0.3s linear;

  &::after {
    content: ' ';
    position: absolute;
    right: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }

  &::before {
    opacity: 0;
    content: url('https://img.icons8.com/metro/52/000000/zoom-out.png');
    position: absolute;
    top: 50px;
    right: 45px;
    width: 50%;
    height: 50%;
    transition: all 0.5s linear;
  }
  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.5);
      content: ' ';
    }
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    height: 100%;
    width: 100%;
  }
`;
export const ImgPortfolio = styled.img`
  height: 100%;
  width: 100%;
`;
