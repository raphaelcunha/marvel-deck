/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Container, Card, Visual, Info } from "./styles";

const Cards = ({
  children,
  type,
  id,
  name,
  thumbnail,
  className,
  onSelect
}) => (
  <Card className={className}>
    {type === "add" ? (
      <Container>
        <Visual
          background={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
        />
        <Info>
          <span className="infos_name">{name}</span>
          <a className="add" onClick={() => onSelect()}>
            {" "}
          </a>
        </Info>
      </Container>
    ) : (
      <a className="add" onClick={() => onSelect()}>
        <Container>
          <Visual
            background={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
          />
          <Info>
            <span className="infos_name">{name}</span>
          </Info>
        </Container>
      </a>
    )}
  </Card>
);

export default Cards;
