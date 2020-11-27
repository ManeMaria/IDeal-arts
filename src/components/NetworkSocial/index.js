import React from 'react';
import { Container, SocialImg } from './styles';

function NetworkSocial() {
  return (
    <Container id="redes">
      <a href="https://www.facebook.com/ingo.miranda">
        <SocialImg
          src="https://img.icons8.com/android/96/000000/facebook-new.png"
          alt="facebook"
        />
        <p>/ingo.miranda</p>
      </a>
      <a href="https://gmail.com">
        <SocialImg
          radius="45%"
          src="https://img.icons8.com/android/96/000000/google-plus.png"
          alt="gmail"
        />
        <p>idartegraficas@gmail.com</p>
      </a>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          radius="45%"
          src="https://img.icons8.com/metro/52/000000/instagram.png"
          alt="instagram"
        />
        <p>@idartesgraficas</p>
      </a>
      <a href="https://whats.link/oramentoeartes">
        <SocialImg
          radius="45%"
          src="https://img.icons8.com/fluent-systems-filled/96/000000/whatsapp.png"
          alt="instagram"
        />
        <p>Orçamento por whatsapp</p>
      </a>
    </Container>
  );
}

export default NetworkSocial;
