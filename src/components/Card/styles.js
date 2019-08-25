import styled from "styled-components";

export const Card = styled.div`
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0px 0px 31px -17px rgba(0, 0, 0, 0.58);
`;

export const Visual = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(to bottom, #3b3c3f, #263d85, #172551);
  border-radius: 10px;

  &:before,
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: url(${props => props.background}) no-repeat center center/cover;
    opacity: 0.5;
    mix-blend-mode: lighten;
  }

  &:before {
    filter: grayscale(100%);
  }

  &:after {
    z-index: 2;
    mix-blend-mode: lighten;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAABUUlRERkRMSkxMTkxEQkT490VOAAAAAXRSTlMAQObYZgAAAoxJREFUOI0dlImR5DAIRRXDbgaAEwCcAOAEZE/+qczTdFf1JQH/otd4SJWWf5+m7GjR28Z0TZW38pLjj1aWJl9eWaGfaCq/y4y012hPhqySnnbXe7Q6ulK6nZeV5bpjhyo9xLj7apvFSk3zSXEmtEZmNngYbhWhkmKne7XalnDrYcZMNwMlwuQuj/ezS2dJmpjEFwLe7T7zWE0zo22icr4dNZnfOLUp72rNcA8vcx3Y8r3MZpYOPSAC6mfSGRQBD1sZyFPd9b0mohN70CQTSa6+Ik15RifUaCjWq6zp2/9T697e5VsRKGUl4I4WnWpOxVAI7FoMEsrp2gLUCgH9J84B8o1Sgrb+0auEdrpocIQzU94mHBmMuliIlFemt0s8w3mUe0ssLnaecjllDunTW20d33ZxkUOoSIJbrWxZiHjdhV190e5AzjwONn4ASvTCC5CcKfywuFMBe1QpYjG0x38nJYAcR26k54o8YiXqeC7Hcth54lfwSPlHOBfOE9F0rGguJsr1V+GroafdEC+3qK2HX8Qsf0lWEwX0J29Pkh2lmFB33wKZBB8Rlhpj5AVBd6mTMYBC4cZzKNb6SygJJ3dnNIqkHnuwVgvaoCFcomyI6c+QEvxq0tKEiQCe9QoS18kaKFMl7wqEqJ2A6XkQMejE1dEcu7G/g1JRmHMOkjGIvqXHErayVgdJIIJsGBw1LzaijlFdExOIInKEOZ/oReBCsDlepSPBvRCAj/n10gfjFIml8rVSUDz2ISKeDxmFuviLVSzJOCqxtXToeJpNJr9Pnij+LQ4A/cgXDyuATWyPkrJ1En1cvPk3sB8VfMLIvwO5CKu+uC1OFNLvvoe0h97ieKNjsUkc/zQ6V/0CAoboTZwdKY4AAAAASUVORK5CYII=");
    opacity: 1;
  }
`;

export const Info = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  margin: auto;
  top: calc(100% - 100px);
  color: #fff;
  text-align: center;

  a.add {
    cursor: pointer;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #f96b4c;
    background-image: linear-gradient(#f96b4c, #f23182);
    display: block;
    clear: both;
    margin: auto;
    border-radius: 100%;
    top: calc(500% + 66px);
    box-shadow: 0 2px 0 #d42d78, 0 3px 10px rgba(243, 49, 128, 0.15),
      0 0px 10px rgba(243, 49, 128, 0.15), 0 0px 4px rgba(0, 0, 0, 0.35),
      0 5px 20px rgba(243, 49, 128, 0.25), 0 15px 40px rgba(243, 49, 128, 0.75),
      inset 0 0 15px rgba(255, 255, 255, 0.05);
    overflow: hidden;

    &:after {
      content: "";
      font-style: normal;
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/icon-add-f.svg");
      background-repeat: no-repeat;
      background-size: 30%;
      background-position: center center;
      left: 0;
      top: 0;
    }
  }

  a.edit {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #f96b4c;
    background-image: linear-gradient(#f96b4c, #f23182);
    display: block;
    clear: both;
    margin: auto;
    border-radius: 100%;
    top: calc(500% + 66px);
    box-shadow: 0 2px 0 #d42d78, 0 3px 10px rgba(243, 49, 128, 0.15),
      0 0px 10px rgba(243, 49, 128, 0.15), 0 0px 4px rgba(0, 0, 0, 0.35),
      0 5px 20px rgba(243, 49, 128, 0.25), 0 15px 40px rgba(243, 49, 128, 0.75),
      inset 0 0 15px rgba(255, 255, 255, 0.05);
    overflow: hidden;

    &:after {
      content: "Edit";
      font-style: normal;
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/icon-edit.svg");
      background-repeat: no-repeat;
      background-size: 30%;
      background-position: center center;
      left: 0;
      top: 0;
    }
  }

  .infos_name {
    font-family: "Lexend Deca";
    font-weight: 800;
    display: block;
    clear: both;
    padding: 0.5em 0;
    padding-top: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    top: 8px;
    font-weight: 800;
  }
`;
