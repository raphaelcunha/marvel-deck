import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Creators as DeckActions } from "../../../store/reducers/deck";
import {
  Container,
  Visual,
  Title,
  Description,
  GroupButton,
  BackButton
} from "./styles";
import Button from "../../../components/Button";

function EditCharacters({ match, history }) {
  const [edit, setEdit] = useState(false);
  const [character, setCharacter] = useState({ name: "", description: "" });
  const { selected } = useSelector(state => state.deck);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DeckActions.get({ id: match.params.id }));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    selected &&
      setCharacter({ name: selected.name, description: selected.description });
  }, [selected]);

  function saveCharacter() {
    dispatch(DeckActions.edit({ ...character, id: match.params.id }));
    setEdit(false);
  }

  function deleteCharacter() {
    dispatch(DeckActions.delete({ id: match.params.id }));
    history.push("/");
  }

  return selected ? (
    <Container>
      {!edit ? (
        <Fragment>
          <Visual
            background={`${selected.thumbnail.path}/standard_fantastic.${selected.thumbnail.extension}`}
          />
          <BackButton>
            <Link to="/">Voltar</Link>
          </BackButton>
          <Title>
            <h1>{selected.name}</h1>
          </Title>
          <Description>{selected.description || "Sem descrição"}</Description>
        </Fragment>
      ) : (
        <Fragment>
          <Visual
            background={`${selected.thumbnail.path}/standard_fantastic.${selected.thumbnail.extension}`}
          />
          <form onSubmit={() => saveCharacter()}>
            <Title>
              <input
                type="text"
                value={character.name || ""}
                onChange={e =>
                  setCharacter({ ...character, name: e.target.value })
                }
              />
            </Title>
            <Description>
              <textarea
                defaultValue={character.description || ""}
                onChange={e =>
                  setCharacter({ ...character, description: e.target.value })
                }
              />
            </Description>
          </form>
        </Fragment>
      )}

      <GroupButton>
        {!edit ? (
          <Fragment>
            <Button
              style={{ background: "#4d4b4b", color: "white" }}
              onClick={() => deleteCharacter()}
            >
              Remover
            </Button>
            <Button onClick={() => setEdit(true)}>Editar</Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              style={{ background: "#4d4b4b", color: "white" }}
              onClick={() => setEdit(false)}
            >
              Cancelar
            </Button>
            <Button onClick={() => saveCharacter()}>Salvar</Button>
          </Fragment>
        )}
      </GroupButton>
    </Container>
  ) : (
    <div> Personagem nao existe</div>
  );
}

export default EditCharacters;
