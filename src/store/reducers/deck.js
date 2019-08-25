import { defineState } from "redux-localstore";

/**
 * Types
 */
export const Types = {
  LIST: "deck/LIST",
  GET: "deck/GET",
  ADD: "deck/ADD",
  EDIT: "deck/EDIT",
  DELETE: "deck/DELETE",
  ANIMATION: "deck/ANIMATION"
};

/**
 * Reducer
 */
const INITIAL_STATE_DEFAULT = {
  loading: true,
  animation: true,
  selected: null,
  data: []
};

const INITIAL_STATE = defineState(INITIAL_STATE_DEFAULT)("deck");

export default function deck(state = INITIAL_STATE, action) {
  const equals = character => character.id === parseInt(action.payload.id);
  const diferrent = character => character.id !== parseInt(action.payload.id);
  const changeValues = characters =>
    equals(characters)
      ? {
          ...characters,
          ...action.payload,
          id: parseInt(action.payload.id)
        }
      : characters;

  switch (action.type) {
    case Types.LIST:
      return state;
    case Types.GET:
      return {
        ...state,
        loading: false,
        selected: state.data.find(equals)
      };
    case Types.ADD:
      return !state.data.some(equals)
        ? { ...state, data: state.data.concat(action.payload) }
        : state;
    case Types.EDIT:
      return {
        ...state,
        data: state.data.map(changeValues),
        selected: { ...state.selected, ...action.payload }
      };

    case Types.DELETE:
      return state.data.some(equals)
        ? {
            ...state,
            data: state.data.filter(diferrent)
          }
        : state;
    case Types.ANIMATION:
      return { ...state, animation: false };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  list: () => ({
    type: Types.LIST,
    payload: null
  }),
  get: payload => ({
    type: Types.GET,
    payload
  }),
  add: payload => ({
    type: Types.ADD,
    payload
  }),
  edit: payload => ({
    type: Types.EDIT,
    payload
  }),
  delete: payload => ({
    type: Types.DELETE,
    payload
  }),
  animation: payload => ({
    type: Types.ANIMATION,
    payload
  })
};
