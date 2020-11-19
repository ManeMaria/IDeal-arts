import React from 'react';

import image1 from '../../assets/image/açai-port.jpg';
import image2 from '../../assets/image/anuncio.jpg';
import image3 from '../../assets/image/camp.png';
import image4 from '../../assets/image/cb.jpg';
import image5 from '../../assets/image/divul.png';
import image6 from '../../assets/image/photo.jpg';
import image7 from '../../assets/image/ur1.jpg';
import image8 from '../../assets/image/sort.jpg';

import { Container, ImgPortfolio, DivCarousel } from './styles';

function Portfolio() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <Container id="portfolio">
      {images.map((img, index) => (
        <DivCarousel key={index}>
          <ImgPortfolio src={img} alt={`tintura ${index}`} />
        </DivCarousel>
      ))}
    </Container>
  );
}

export default Portfolio;
