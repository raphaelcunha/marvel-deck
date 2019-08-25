import { defineState } from "redux-localstore";

/**
 * Types
 */
export const Types = {
  REQUEST: "characters/REQUEST",
  SUCCESS: "characters/REQUEST_SUCCESS",
  FAILURE: "characters/REQUEST_FAILURE"
};

/**
 * Reducer
 */
const INITIAL_STATE_DEFAULT = {
  loading: true,
  data: null
};

export const INITIAL_STATE = defineState(INITIAL_STATE_DEFAULT)("characters");

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, loading: false, data: action.payload.data.data };
    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  request: url => ({
    type: Types.REQUEST,
    payload: {
      loading: true,
      request: {
        url: `/characters${url || ""}`
      }
    }
  })
};
