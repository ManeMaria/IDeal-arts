import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: relative;

  @media (max-width: 720px) {
    display: none;
    margin-top: 0;
  }
`;
export const Content = styled.div`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: 20px;

  @media (max-width: 720px) {
    width: 100vw;
    justify-content: space-around;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ImgPortfolio = styled.img`
  width: 400px;
  height: 400px;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

export const Column1 = styled.div`
  display: grid;
  row-gap: 100px;
  width: 80%;
  height: 60%;
  position: relative;

  .image1 {
    opacity: 0.9;
  }
  .image1::after {
    content: 'Chamadas fortes';

    position: absolute;
    top: 330px;
    left: 12px;
    font-size: 50px;
    font-weight: bold;
  }
  .image3 {
    opacity: 0.9;
  }
  p::after {
    /**alterei este ponto, para diferenciar a opacidade da img da font */
    content: 'Diferente';
    position: absolute;
    top: 875px;
    left: 12px;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0.5px 0.5px #9b8787;
  }
  .image5 {
    opacity: 0.9;
  }
  .image5::after {
    content: 'Marcante';
    position: absolute;
    top: 1381px;
    left: 12px;
    font-size: 50px;
    font-weight: bold;
  }
  .image7 {
    opacity: 0.9;
  }
  .image7::after {
    content: 'Destaque';
    position: absolute;
    top: 1883px;
    left: 12px;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0.5px 0.5px #9b8787;
  }
  @media (max-width: 720px) {
    width: 400px;
    height: 400px;
  }
`;

export const Column2 = styled.div`
  display: grid;
  row-gap: 100px;
  width: 80%;
  height: 60%;
  position: relative;

  .image2 {
    opacity: 0.9;
    img {
      margin-top: 150px;
    }
  }
  .image2::after {
    content: 'Criatividade';

    position: absolute;
    top: 517px;
    left: 10px;
    font-size: 50px;
    font-weight: bold;
  }
  .image4 {
    opacity: 0.9;
  }
  .image4::after {
    content: 'Conhecimento';

    position: absolute;
    top: 1023px;
    left: 5px;
    font-size: 50px;
    font-weight: bold;
  }

  .image6 {
    opacity: 0.9;
  }
  .image6::after {
    content: 'Diversidade';

    position: absolute;
    top: 1528px;
    left: 5px;
    font-size: 50px;
    font-weight: bold;
  }
  .image8 {
    opacity: 0.9;
  }
  .image8::after {
    content: 'Inovação';

    position: absolute;
    top: 2034px;
    left: 5px;
    font-size: 50px;
    font-weight: bold;
  }

  @media (max-width: 720px) {
    width: 400px;
    height: 400px;

    .image4::after {
      top: 913px;
    }

    .image6::after {
      top: 1420px;
    }

    .image8::after {
      top: 1924px;
    }
  }
`;
