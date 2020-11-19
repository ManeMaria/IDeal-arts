import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Sspiner = styled.div`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  position: absolute;
`;

export const Svg = styled.svg.attrs((props) => ({
  r: props.r,
  cx: props.cx,
  cy: props.cy,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  circle {
    width: 200px;
    height: 200px;

    position: absolute;
    fill: #fff;

    stroke-width: 6;
    stroke-dasharray: 440;
    stroke-linecap: round;
    transform: translate(10px, 10px);

    &:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #424242;
      opacity: 0.5;
    }
    ${(props) => props.className}&:nth-child(2) {
      stroke-dashoffset: calc(440 - (440 * ${(props) => props.per}) / 100);
      stroke: #000;
      animation: percent 1s linear;
      animation-delay: 0.5s;
    }
    @keyframes percent {
      0% {
        stroke-dashoffset: 0;
      }
    }
  }

  @media (max-width: 720px) {
    position: static;
    display: none;

    circle {
      display: none;
      position: static;
    }
  }
`;

export const NumberDiv = styled.div`
  position: absolute;
  top: 45px;
  left: 30px;
  span {
    display: flex;
    width: 60px;

    align-items: center;
    font-size: 33px;
    font-weight: bold;
    color: #000;
    h2 {
      margin-left: 10px;
      font-weight: 600;
      width: 60px;
      font-size: 30px;
      color: #000;
    }
    > p {
      margin: 60px auto 0 auto;
      display: block;
      font-size: 16px;
      color: #000;
      width: 60px;
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;
