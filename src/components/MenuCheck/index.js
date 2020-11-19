import React from 'react';
import styled from 'styled-components';
import { Sections } from '../Header/styles';

const Menu = styled.div`
  width: 78px;
  height: 78px;
  margin: 10px auto 
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
      transform: translate(0px, -20px) rotate(-45deg);
    }
    &:checked + span:before {
      transform: translate(0px, 20px) rotate(45deg);
    }
    &:checked ~ nav {
      height: 400px;

      border: none;
      background: #fff;
      box-shadow: -5px 3px 10px rgba(0, 0, 0, 0.4);
      a {
        font-size: 30px;
      }
    }
  }
  span {
    width: 60px;
    height: 8px;
    background: #eff3f5;
    position: absolute;
    top: 35px;
    left: 10px;
    transition: all 0.3s linear;
  }
  span::after {
    content: ' ';
    width: 60px;
    height: 8px;
    background: #eff3f5;
    position: absolute;
    bottom: -20px;
    transition: all 0.3s linear;
  }
  span::before {
    content: ' ';
    width: 60px;
    height: 8px;
    background: #eff3f5;
    position: absolute;
    top: -20px;
    transition: all 0.3s linear;
  }

  nav {
    z-index: 1;
    top: 90px;
    position: absolute;
    right: 10px;
    height: 0px;
    width: 210px;
    display: grid;
    overflow: hidden;
    transition: height 0.5s ease-in-out;
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
        <Sections href="#">Experiance</Sections>
        <Sections href="#portfolio">Portfolio</Sections>
      </nav>
    </Menu>
  );
}

export default MenuCheck;
