import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/image/açai-port.jpg';
import image2 from '../../assets/image/anuncio.jpg';
import image3 from '../../assets/image/camp.png';
import image4 from '../../assets/image/cb.jpg';
import image5 from '../../assets/image/divul.png';
import image6 from '../../assets/image/photo.jpg';
import image7 from '../../assets/image/ur1.jpg';
import image8 from '../../assets/image/sort.jpg';
import { Container, DivCarousel } from './styles';

function SlideShow({ visible, interval, controls, indicators }) {
  /** recebe as propriedades dadas, se nenhuma propriedade for dada,
   * o carousel usa os padrão 'https://react-bootstrap.github.io/components/carousel/#api', o mesmo é configurado para o estilo.
   */

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
    <Container visible={visible}>
      <Carousel controls={controls} fade indicators={indicators}>
        {images.map((img, index) => (
          <Carousel.Item interval={interval} key={index}>
            <DivCarousel>
              <img
                src={img}
                className="d-block w-100"
                alt={`imagem na posição ${img}`}
              />
            </DivCarousel>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default SlideShow;
