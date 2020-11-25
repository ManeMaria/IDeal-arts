import React from 'react';
import { Container, SocialImg } from './styles';

function NetworkSocial() {
  return (
    <Container id="#redes">
      <a href="https://github.com/ManeMaria">
        <SocialImg
          width="46px"
          src="https://img.icons8.com/android/96/000000/facebook-new.png"
          alt="facebook"
        />
        <p>facebook</p>
      </a>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          radius="45%"
          width="46px"
          src="https://img.icons8.com/android/96/000000/google-plus.png"
          alt="gamil"
        />
        <p>gmail</p>
      </a>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          radius="45%"
          width="46px"
          src="https://img.icons8.com/metro/52/000000/instagram.png"
          alt="instagram"
        />
        <p>instagram</p>
      </a>
    </Container>
  );
}

export default NetworkSocial;
