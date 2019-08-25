// __tests__/fetch.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import reducers from "../../../store/reducers";
import Component from "../../../pages/Characters/add/index";

test("mount component", async () => {
  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>
  );
});

test("initial state loading", async () => {
  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>
  );

  expect(getByTestId("Loading"));
});

test("api - get characters", async () => {
  // TODO: mock axios.

  const store = createStore(reducers);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>
  );

  expect(getByTestId("Loading"));
});
