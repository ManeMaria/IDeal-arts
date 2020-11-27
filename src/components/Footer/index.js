import React from 'react';

import { Container, Content, LinkGitHub, LinkMedias } from './styles';

function Footer() {
  return (
    <Container id="footer">
      <Content>
        <LinkMedias href="https://www.facebook.com/ingo.miranda" target="blank">
          <img
            src="https://img.icons8.com/android/24/000000/facebook-new.png"
            alt="facebook"
          />
          <p>/ingo.miranda</p>
        </LinkMedias>
        <LinkMedias href="https://gmail.com" target="blank">
          <img
            src="https://img.icons8.com/android/24/000000/google-plus.png"
            alt="gamil"
          />
          <p>idartegraficas@gmail.com</p>
        </LinkMedias>
        <LinkMedias href="https://github.com/ManeMaria" target="blank">
          <img
            src="https://img.icons8.com/metro/52/000000/instagram.png"
            alt="instagram"
          />
          <p>@idartesgraficas</p>
        </LinkMedias>

        <LinkMedias href="https://whats.link/oramentoeartes">
          <img
            src="https://img.icons8.com/material-sharp/24/000000/whatsapp.png"
            alt="wpp"
          />
          <p>Orçamento por whatsapp</p>
        </LinkMedias>

        <LinkGitHub href="https://github.com/ManeMaria" target="blank">
          <img
            src="https://img.icons8.com/fluent-systems-filled/24/000000/github.png"
            alt="iconGitHub"
          />
          <p> visit my gitHub</p>
        </LinkGitHub>
      </Content>
    </Container>
  );
}

export default Footer;
