import React, { useState } from 'react';
import image1 from '../../assets/image/açai-port.jpg';
import image2 from '../../assets/image/anuncio.jpg';
import image3 from '../../assets/image/camp.png';
import image4 from '../../assets/image/cb.jpg';
import image5 from '../../assets/image/divul.png';
import image6 from '../../assets/image/photo.jpg';
import image7 from '../../assets/image/ur1.jpg';
import image8 from '../../assets/image/sort.jpg';
import image9 from '../../assets/image/a-d-c-c-j.png';
import image10 from '../../assets/image/A-d-c.png';
import image11 from '../../assets/image/belem.jpg';
import image12 from '../../assets/image/c-m.jpg';
import image13 from '../../assets/image/c-o-p.jpg';
import image14 from '../../assets/image/c-o.jpg';
import image15 from '../../assets/image/campanha.jpg';
import image16 from '../../assets/image/campanha26.jpg';
import image17 from '../../assets/image/campanhaoração0003.jpg';
import image18 from '../../assets/image/consagracao.jpg';
import image19 from '../../assets/image/convite.jpg';
import image20 from '../../assets/image/culto.jpg';
import image21 from '../../assets/image/festa.png';
import image22 from '../../assets/image/GPGE.jpg';
import image23 from '../../assets/image/o-p.jpg';
import image24 from '../../assets/image/oração05.jpg';
import image25 from '../../assets/image/oração-para-MOC.jpg';
import image26 from '../../assets/image/Prancheta2culto_.png';

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
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
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
