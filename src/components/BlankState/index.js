import React from "react";

import { Container } from "./styles";

const BlankState = ({ message }) => {
  return (
    <Container>
      <img
        src="https://media.tenor.com/images/a34f556e6385eb597fba081a5851bcd0/tenor.gif"
        alt="gif not exist"
      />
      <p>{message}</p>
    </Container>
  );
};

export default BlankState;
