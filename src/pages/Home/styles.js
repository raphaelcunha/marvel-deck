import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    margin-bottom: 45px;
  }
`;

export const ListCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .Card {
    cursor: pointer;
    margin: 25px;
  }
`;

export const Intro = styled.img`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: fadeOut 4s forwards;
`;

export const AfterIntro = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  text-align: center;
  opacity: 0;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.animation === true ? "4s" : "0s")};
  animation-duration: 2s;
`;

export const LogoContent = styled.div`
  padding: 25px;
`;

export const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 45px;
  margin-bottom: 30px;
`;
