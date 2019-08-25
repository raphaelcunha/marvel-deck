// __tests__/fetch.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import reducers from "../../../store/reducers";

import Home from "../../../pages/Home/index";

test("mount component", async () => {
  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );
});

test("verify logo marvel", async () => {
  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );

  expect(getByTestId("logo"));
  expect(getByText("Adicionar Personangem"));
});

test("verify button", async () => {
  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );
  expect(getByText("Adicionar Personangem"));
});

test("verify cards", async () => {
  const initialState = {
    deck: {
      data: [
        {
          id: 1,
          name: "raphael",
          description: "descricao",
          thumbnail: { path: "url", extension: "jpg" }
        }
      ]
    }
  };
  const store = createStore(reducers, initialState);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = render(
    <Router history={history}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );
  expect(getByText("raphael"));
});
