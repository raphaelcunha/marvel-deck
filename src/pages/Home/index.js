import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

import {
  Container,
  Intro,
  AfterIntro,
  Logo,
  LogoContent,
  ListCards
} from "./styles";
import intro from "../../assets/images/intro.gif";
import logo from "../../assets/images/logo.png";

import { Creators as DeckActions } from "../../store/reducers/deck";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ history }) => {
  const { animation, data } = useSelector(state => state.deck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DeckActions.list());
    setTimeout(() => dispatch(DeckActions.animation()), 4000);
  }, [dispatch]);

  function renderCard() {
    return data.map(character => (
      <Card
        type="edit"
        className="Card"
        key={character.id}
        id={character.id}
        name={character.name}
        thumbnail={character.thumbnail}
        onSelect={() => history.push(`/characters/${character.id}`)}
      />
    ));
  }

  return (
    <Container>
      {animation && <Intro src={intro} alt="intro marvel" />}
      <AfterIntro animation={animation}>
        <LogoContent>
          <Logo src={logo} alt="logo marvel" data-testid="logo" />
        </LogoContent>
        <div>
          <Link to="/characters/">
            <Button> Adicionar Personangem </Button>
          </Link>
        </div>
        <ListCards> {data.length ? renderCard() : ""}</ListCards>
      </AfterIntro>
    </Container>
  );
};

export default Home;
