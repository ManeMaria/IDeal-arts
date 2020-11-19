import React, { useEffect, useState } from 'react';
import { Container, Sspiner, Svg, NumberDiv } from './style';

export default function Spiner() {
  const [valueP1, setValueP1] = useState(0);
  const [valueP2, setValueP2] = useState(0);
  const [valueP3, setValueP3] = useState(0);
  const [valueP4, setValueP4] = useState(0);

  function setVP1() {
    let revalue = valueP1;

    const id = setInterval(() => {
      if (revalue >= 50) {
        clearInterval(id);
      }
      setValueP1(revalue++);
    }, 10);
  }
  function setVP2() {
    let revalue = valueP2;

    const id = setInterval(() => {
      if (revalue >= 75) {
        clearInterval(id);
      }
      setValueP2(revalue++);
    }, 10);
  }
  function setVP3() {
    let revalue = valueP3;

    const id = setInterval(() => {
      if (revalue >= 38) {
        clearInterval(id);
      }
      setValueP3(revalue++);
    }, 10);
  }
  function setVP4() {
    let revalue = valueP4;
    const id = setInterval(() => {
      if (revalue >= 63) {
        clearInterval(id);
      }
      setValueP4(revalue++);
    }, 10);
  }
  useEffect(() => {
    setVP1();
    setVP2();
    setVP3();
    setVP4();
  }, []);

  return (
    <Container>
      <Sspiner className="p1" top="370px" left="0px">
        <Svg width={150} height={150} per={valueP1}>
          <circle r={70} cx={65} cy={65} />
          <circle r={70} cx={65} cy={65} />
        </Svg>
        <NumberDiv>
          <span>
            <h2>{valueP1}</h2> %<p>PhotoShop</p>
          </span>
        </NumberDiv>
      </Sspiner>
      <Sspiner className="p2" top="370px" left="250px">
        <Svg width={150} height={150} per="75">
          <circle r={70} cx={65} cy={65} />
          <circle r={70} cx={65} cy={65} />
        </Svg>
        <NumberDiv>
          <span>
            <h2>{valueP2}</h2> %<p>Ilustrator</p>
          </span>
        </NumberDiv>
      </Sspiner>
      <Sspiner className="p3" top="370px" left="525px">
        <Svg width={150} height={150} per={valueP3}>
          <circle r={70} cx={65} cy={65} />
          <circle r={70} cx={65} cy={65} />
        </Svg>
        <NumberDiv>
          <span>
            <h2>{valueP3}</h2> %<p>Medias</p>
          </span>
        </NumberDiv>
      </Sspiner>
      <Sspiner className="p4" top="370px" left="775px">
        <Svg width={150} height={150} per="63">
          <circle r={70} cx={65} cy={65} />
          <circle r={70} cx={65} cy={65} />
        </Svg>
        <NumberDiv>
          <span>
            <h2>{valueP4}</h2> %<p>PowerPoint</p>
          </span>
        </NumberDiv>
      </Sspiner>
    </Container>
  );
}
