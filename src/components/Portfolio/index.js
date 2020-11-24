import React, { useState, useEffect } from 'react';
import image1 from '../../assets/image/açai-port.jpg';
import image2 from '../../assets/image/anuncio.jpg';
import image3 from '../../assets/image/camp.png';
import image4 from '../../assets/image/cb.jpg';
import image5 from '../../assets/image/divul.png';
import image6 from '../../assets/image/photo.jpg';
import image7 from '../../assets/image/ur1.jpg';
import image8 from '../../assets/image/sort.jpg';

import {
  Container,
  ImgPortfolio,
  DivCarousel,
  Modal,
  ModalContent,
  ButtonCloseModal,
  CarouselAdaptable,
  GoRight,
  GoLeft,
} from './styles';

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

  const [position, setPosition] = useState(0);

  const handleClosedModal = () => {
    const element = document.querySelector('.modal');
    element.style.display = 'none';
    setPosition(0);
  };
  const openModal = () => {
    const element = document.querySelector('.modal');
    element.style.display = 'block';
  };

  const handleOpenModalAndSetPosition = (i) => {
    openModal();
    setPosition(position - 100 * i);
  };

  const goLeft = () => {
    position === 0
      ? setPosition(-100 * (images.length - 1))
      : setPosition(position + 100);
  };
  const goRight = () => {
    position === -100 * (images.length - 1)
      ? setPosition(0)
      : setPosition(position - 100);
  };

  return (
    <Container id="portfolio">
      <Modal className="modal">
        <ModalContent>
          <ButtonCloseModal onClick={handleClosedModal} />
          {images.map((img, index) => (
            <CarouselAdaptable position={position} key={index}>
              <ImgPortfolio src={img} alt={`tintura ${index}`} />
            </CarouselAdaptable>
          ))}
          <GoRight onClick={goRight}>
            <img
              src="https://img.icons8.com/metro/52/000000/double-left.png"
              alt="go right"
            />
          </GoRight>
          <GoLeft onClick={goLeft}>
            <img
              src="https://img.icons8.com/metro/52/000000/double-left.png"
              alt="go left"
            />
          </GoLeft>
        </ModalContent>
      </Modal>
      {images.map((img, index) => (
        <DivCarousel
          key={index}
          onClick={() => handleOpenModalAndSetPosition(index)}
        >
          <ImgPortfolio src={img} alt={`tintura ${index}`} />
        </DivCarousel>
      ))}
    </Container>
  );
}

export default Portfolio;
