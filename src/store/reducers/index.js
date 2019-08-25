import { combineReducers } from "redux";

import characters from "./characters";
import deck from "./deck";

export default combineReducers({
  characters,
  deck
});
