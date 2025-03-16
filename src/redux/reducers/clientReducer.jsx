import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/clientActions";

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  error: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOGIN_FAILURE":
      return { ...state, user: null, error: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
