import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import GlobalStyles from "./GlobalStyle";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters.add} />
        <Route exact path="/characters/:id" component={Characters.edit} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
