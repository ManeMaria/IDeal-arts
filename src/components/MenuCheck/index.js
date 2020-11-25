import React from 'react';
import styled from 'styled-components';
import { Sections } from '../Header/styles';

const Menu = styled.div`
  width: 65%;
  height: 65%;
  margin: -20% 0 0 30%;
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
      width: 200px;
      border: none;
      background: #fff;
      box-shadow: -5px 3px 10px rgba(0, 0, 0, 0.4);
      a {
        font-size: 20px;
      }
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
    z-index: 1;
    top: 55px;
    position: absolute;
    right: -30px;
    height: 70vh;
    width: 0;
    display: grid;
    overflow: hidden;
    transition: width 0.5s ease-in-out;
  }
`;

function MenuCheck() {
  return (
    <Menu>
      <label htmlFor="check" />
      <input type="checkbox" id="check" />
      <span />
      <nav className="nav hide">
        <Sections href="#">About</Sections>
        <Sections href="#footer">Skills</Sections>
        <Sections href="#redes">Contact</Sections>
        <Sections href="#portfolio">Portfolio</Sections>
      </nav>
    </Menu>
  );
}

export default MenuCheck;
