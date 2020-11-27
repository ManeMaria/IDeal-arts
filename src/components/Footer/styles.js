import styled from 'styled-components';

export const Container = styled.footer`
  height: 300px;

  @media (max-width: 720px) {
    display: none;
  }
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  width: 100%;
  height: 100%;
`;
export const LinkGitHub = styled.a`
  position: absolute;
  top: 250px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  color: #000;

  p {
    margin-bottom: 0;
    text-decoration: none;
    transition: background 0.5s ease-in;
  }
  img {
    margin-right: 10px;
    width: 18px;
  }
  &:link {
    text-decoration: none;
  }
  p:hover {
    text-decoration: none;
    background: #a2a2a2;
    color: #fff;
  }
`;
export const LinkMedias = styled.a`
  margin: 0 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  &:link {
    text-decoration: none;
  }
  p {
    margin-bottom: 0;
    text-decoration: none;
    transition: background 0.5s ease-in;
  }
  p:hover {
    text-decoration: none;
    background: #a2a2a2;
    color: #fff;
  }
  p {
    margin-bottom: 0;
  }
  img {
    margin-right: 10px;
    width: 18px;
  }
`;
