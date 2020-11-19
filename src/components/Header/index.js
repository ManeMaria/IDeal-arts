import React from 'react';
import {
  Container,
  Content,
  Navigation,
  LogoHeader,
  Banner,
  ImgBanner,
  Sections,
  DivMenu,
} from './styles';
import Spiner from '../Spiner/index';
import logoBlack from '../../assets/logos/ID-preto.png';
import logoSCar from '../../assets/logos/logo-ID.png';
import MenuCheck from '../MenuCheck/index';
import SlideShow from '../Slider/index';

function Header() {
  return (
    <Container id="#">
      <SlideShow />
      <Content>
        <DivMenu>
          <MenuCheck />
        </DivMenu>

        <Navigation>
          <LogoHeader src={logoBlack} />
          <span />

          {/** para criar um pseudo elemento e dá espaço entre os itens */}
          <Sections href="#">About</Sections>
          <Sections href="#">Skills</Sections>
          <Sections href="#">Experiance</Sections>
          <Sections href="#portfolio">Portfolio</Sections>
        </Navigation>
        <Banner>
          <ImgBanner src={logoSCar} alt="banner" />
          <Spiner />
        </Banner>
      </Content>
    </Container>
  );
}

export default Header;
