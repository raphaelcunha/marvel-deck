import React, { useEffect } from "react";
import Search from "../../../components/Search";
import Card from "../../../components/Card";
import Loading from "../../../components/Loading";
import BlankState from "../../../components/BlankState";

import { Container, ListCards } from "./styles";

import { Creators as CharaceterActions } from "../../../store/reducers/characters";
import { Creators as DeckActions } from "../../../store/reducers/deck";

import { useSelector, useDispatch } from "react-redux";

function Characters({ history }) {
  const { data, loading } = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharaceterActions.request());
  }, [dispatch]);

  async function fetchSearch(text) {
    dispatch(
      CharaceterActions.request(`?name=${text}&events=238&orderBy=modified`)
    );
  }

  async function addDeck(character) {
    dispatch(DeckActions.add(character));
    history.push("/");
  }

  function renderCard() {
    return data.results.map(character => (
      <Card
        type="add"
        className="Card"
        key={character.id}
        id={character.id}
        name={character.name}
        thumbnail={character.thumbnail}
        onSelect={() => addDeck(character)}
      />
    ));
  }

  return (
    <Container>
      <Search
        className="Search"
        onSubmit={text => fetchSearch(text)}
        onBack={() => history.push("/")}
      />
      <Loading active={loading}>
        {data && !!data.results.length ? (
          <ListCards>{renderCard()}</ListCards>
        ) : (
          <BlankState message="Acho que esse pernosagem desapareceu, ou não foi encontrado!" />
        )}
      </Loading>
    </Container>
  );
}

export default Characters;
