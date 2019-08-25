import styled from "styled-components";

export const Container = styled.div`
  width: 100wh;
  height: 100vh;

  button {
    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
  }
`;

export const Visual = styled.div`
  position: relative;
  width: 100wh;
  height: 100vh;
  background: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.9

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: black no-repeat center center/cover;
    opacity: 0.7;
    mix-blend-mode: hard-light;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(15% - 42px);
  margin: 0 auto;
  z-index: 3;
  text-align: center;

  h1 {
    font-family: "Lexend Deca";
    font-weight: 800;
    font-size: 42px;
    text-align: center;
    color: #fff;
  }

  input {
    min-width: 150px;
    border: 1px dashed #ccc;
    font-family: "Lexend Deca";
    font-weight: 800;
    font-size: 42px;
    text-align: center;
    color: #fff;
    background-color: transparent;
  }
`;

export const Description = styled.div`
  position: absolute;
  padding: 60px;
  left: 0;
  right: 0;
  top: calc(25% - 42px);
  margin: auto;
  font-family: "Lexend Deca";
  font-weight: 800;
  font-size: 42px;
  text-align: center;
  color: #fff;
  z-index: 3;

  textarea {
    width: 100%;
    height: 50vh;
    border: 1px dashed #ccc;
    font-family: "Lexend Deca";
    font-weight: 800;
    font-size: 42px;
    text-align: center;
    color: #fff;
    background-color: transparent;
    resize: none;
    overflow: hidden;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  button {
    margin-right: 25px;
  }
`;

export const BackButton = styled.div`
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  margin: 40px;

  a {
    color: white;
  }
`;
