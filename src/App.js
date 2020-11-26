import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import GlobalStyles from './Styles/Global';
import NetworkSocial from './components/NetworkSocial';
import Portfolio from './components/Portfolio';

const Div = styled.div`
  @media (max-width: 720px) {
    width: 100vw;
  }
`;

function App() {
  return (
    <Div>
      <GlobalStyles />
      <Header />
      <NetworkSocial />
      {/** incluí esse comp diretamente, para não interferir no fluxo da página */}

      <Portfolio />
      <Footer />
    </Div>
  );
}

export default App;
