import styled from 'styled-components';
import iconZoomWhite from '../../assets/icons/002.png';

export const Container = styled.div`
  background: #333;
  margin: 100px auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    display: grid;

    background: #fff;
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
    content: url(${iconZoomWhite});
    position: absolute;
    top: 30%;
    right: 30px;
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
      z-index: 1;
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    &::before {
      display: none;
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
export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`;

export const ModalContent = styled.div`
  margin: 2% auto;
  width: 45vw;
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: auto;
    width: 90vw;
    height: 60vh;
  }

  @media (min-width: 1080px) {
    width: 60vw;
    height: 20vh;
  }
`;
export const ButtonCloseModal = styled.span`
  z-index: 3;
  position: absolute;
  background: none;
  width: 40px;
  height: 40px;
  top: 0;
  left: 85%;
  margin: 2% auto;
  transition: all 0.3s linear;

  &::after {
    content: 'x';
    color: rgba(0, 0, 0, 0.6);
    background: none;
    font-weight: 500;
    font-size: 3rem;
    margin: 0 15% 5% 15%;
    transition: all 0.3s linear;
  }
  &:hover {
    &::after {
      color: #000;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    &::after {
      margin-left: 0%;
      font-size: 65px;
      color: #000;
    }
  }
  @media (max-width: 1080px) {
    &::after {
      font-size: 65px;
      color: #000;
    }
  }
`;
export const CarouselAdaptable = styled.div`
  transform: translateX(${(props) => props.position}%);
  min-width: 100%;
  height: 100%;
  transition: all 0.3s linear;
`;

export const GoRight = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  width: 10vw;
  height: 20vh;
  right: 0;
  background: none;
  border: none;
  img {
    transform: rotate(180deg);
    opacity: 0.5;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    right: 7vw;
  }
  @media (max-width: 1080px) {
    img {
      width: 65px;
      opacity: 1;
    }
  }
`;
export const GoLeft = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  width: 10vw;
  height: 20vh;
  left: 0vw;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  img {
    opacity: 0.5;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 1080px) {
    img {
      width: 65px;
      opacity: 1;
    }
  }
`;
