import styled from 'styled-components';
import bS from '../../assets/logos/backStyle.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: #eff3f5;
  /**  a cor de fundo fundo será aqui */
  position: relative;
  @media (max-width: 720px) {
    height: 85vh;
    margin: 0 auto;
    width: 100vw;
    background: none;
  }
`;

export const DivMenu = styled.div`
  /** esta div regula a posição do menu versão mobile */
  display: none;
  @media (max-width: 720px) {
    position: absolute;
    left: 76%;
    margin: 10px auto 0 auto;
    display: block;
    height: 78px;
    width: 78px;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 100vw;
    position: absolute;
    top: 20px;
    z-index: 1;
  }
`;
export const Navigation = styled.nav`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  background: none;

  span::before {
    content: ' ';
    margin-left: 300px;
    max-width: 400px;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const LogoHeader = styled.img`
  width: 100px;
`;

export const Banner = styled.div`
  height: 100%;
  max-width: 900px;
  position: relative;
  margin: 0 auto;

  p {
    position: absolute;
    display: block;
    margin-top: 60px;
    width: 400px;
    font-size: 60px;
    text-align: right;
  }
  @media (max-width: 720px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    p {
      display: none;
    }
  }
`;
export const ImgBanner = styled.img`
  display: block;
  position: absolute;
  left: 350px;
  width: 300px;
  height: 600px;
  @media (max-width: 720px) {
    position: static;
    margin-top: 5%;
    width: 30vw;
    height: 65vh;
  }
  @media (max-width: 1080px) {
    width: 200px;
  }
`;

export const Sections = styled.a`
  cursor: pointer;
  padding: 0 20px;

  align-self: center;
  text-decoration: none;
  font-size: 20px;
  transition: 0.5s;
  color: #000;

  &:hover {
    background: url(${bS}) no-repeat right/80%;
    font-weight: 600;
    color: #a2a2a2;
  }
`;
