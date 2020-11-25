import React from 'react';

import { Container, Content, LinkGitHub, LinkMedias } from './styles';

function Footer() {
  return (
    <Container id="footer">
      <Content>
        <LinkMedias href="https://github.com/ManeMaria">
          <img
            src="https://img.icons8.com/android/24/000000/facebook-new.png"
            alt="facebook"
          />
          <p>facebook</p>
        </LinkMedias>
        <LinkMedias href="https://github.com/ManeMaria">
          <img
            src="https://img.icons8.com/android/24/000000/google-plus.png"
            alt="gamil"
          />
          <p> Gmail</p>
        </LinkMedias>
        <LinkMedias href="https://github.com/ManeMaria">
          <img
            src="https://img.icons8.com/fluent-systems-filled/24/000000/instagram.png"
            alt="instagram"
          />
          <p>@idartesgraficas</p>
        </LinkMedias>
        <LinkGitHub href="https://instagram.com/idartesgraficas?igshid=1lku63m7v9scn">
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
