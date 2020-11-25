import React from 'react';
import { Container, SocialImg } from './styles';

function NetworkSocial() {
  return (
    <Container>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          width="76px"
          src="https://img.icons8.com/android/96/000000/facebook-new.png"
          alt="facebook"
        />
      </a>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          width="56px"
          src="https://img.icons8.com/android/96/000000/google-plus.png"
          alt="gamil"
        />
      </a>
      <a href="https://github.com/ManeMaria">
        <SocialImg
          src="https://img.icons8.com/fluent-systems-filled/96/000000/instagram.png"
          alt="instagram"
        />
      </a>
    </Container>
  );
}

export default NetworkSocial;
