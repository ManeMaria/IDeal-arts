import React from 'react';
import styled from 'styled-components';
import { Sections } from '../Header/styles';

const Menu = styled.div`
  width: 65%;
  height: 65%;
  margin: auto 5.3% auto auto;
  position: relative;

  label {
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    transition: all 0.3s linear;
  }
  input {
    opacity: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    &:checked + span {
      background: transparent;
    }
    &:checked + span:after {
      transform: translate(0px, -2vh) rotate(-45deg);
    }
    &:checked + span:before {
      transform: translate(0px, 2vh) rotate(45deg);
    }
    &:checked ~ nav {
      transform: translateX(0px);
      visibility: visible;
    }
  }
  span {
    width: 10vw;
    height: 0.75vh;
    background: #eff3f5;
    position: absolute;
    top: 43%;
    left: 5.5px;
    transition: all 0.3s linear;
  }
  span::after {
    content: ' ';
    width: 10vw;
    height: 0.75vh;
    background: #eff3f5;
    position: absolute;
    bottom: -2vh;
    transition: all 0.3s linear;
  }
  span::before {
    content: ' ';
    width: 10vw;
    height: 0.75vh;
    background: #eff3f5;
    position: absolute;
    top: -2vh;
    transition: all 0.3s linear;
  }

  nav {
    transform: translateX(300px);
    z-index: 1;
    top: 55px;
    position: absolute;
    right: 0px;
    height: 80vh;
    width: 300px;
    display: grid;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    border: none;
    background: #fff;
    box-shadow: -5px 3px 10px rgba(0, 0, 0, 0.4);
    visibility: hidden;
    a {
      font-size: 20px;
    }
  }
`;

function MenuCheck() {
  return (
    <Menu>
      <label htmlFor="check" />
      <input type="checkbox" id="check" />
      <span />
      <nav className="nav hide">
        <Sections href="#about">About</Sections>

        <Sections href="#redes">Contact</Sections>
        <Sections href="#portfolio">Portfolio</Sections>
      </nav>
    </Menu>
  );
}

export default MenuCheck;
