import React from 'react';
import { Container, Content, ImgPortfolio, Column1, Column2 } from './styles';
import image1 from '../../assets/image/açai-port.jpg';
import image2 from '../../assets/image/anuncio.jpg';
import image3 from '../../assets/image/camp.png';
import image4 from '../../assets/image/cb.jpg';
import image5 from '../../assets/image/divul.png';
import image6 from '../../assets/image/photo.jpg';
import image7 from '../../assets/image/ur1.jpg';
import image8 from '../../assets/image/sort.jpg';

function Home() {
  return (
    <Container>
      <Content>
        <Column1>
          <span className="image1">
            <ImgPortfolio src={image1} alt="images" />
          </span>
          <span className="image3">
            <ImgPortfolio src={image3} alt="images" />
            <p />
          </span>
          <span className="image5">
            <ImgPortfolio src={image5} alt="images" />
          </span>
          <span className="image7">
            <ImgPortfolio src={image7} alt="images" />
          </span>
        </Column1>

        <Column2>
          <span className="image2">
            <ImgPortfolio src={image2} alt="images" />
          </span>

          <span className="image4">
            <ImgPortfolio src={image4} alt="images" />
          </span>

          <span className="image6">
            <ImgPortfolio src={image6} alt="images" />
          </span>

          <span className="image8">
            <ImgPortfolio src={image8} alt="images" />
          </span>
        </Column2>
      </Content>
    </Container>
  );
}

export default Home;
