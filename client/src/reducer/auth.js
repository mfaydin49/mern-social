/* eslint-disable import/no-anonymous-default-export */
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthonticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthonticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        ...payload,
        token: null,
        isAuthonticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
