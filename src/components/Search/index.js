import React, { useState } from "react";

import { Form, Input, Button, ButtonBack } from "./styles";

const Search = ({ className, onSubmit, onBack }) => {
  const [search, setSearch] = useState("");

  function submitForm(e, search) {
    e.preventDefault();
    onSubmit(search);
  }

  return (
    <Form
      className={className}
      action="#"
      onSubmit={e => submitForm(e, search)}
    >
      <Input
        type="text"
        onChange={e => setSearch(e.target.value)}
        placeholder="Procurar Personagem"
      />
      <Button type="submit"> Pesquisar </Button>
      <ButtonBack type="button" onClick={() => onBack()}>
        Voltar{" "}
      </ButtonBack>
    </Form>
  );
};

export default Search;
