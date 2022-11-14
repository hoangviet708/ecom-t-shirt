import { createContext, useReducer } from "react";

const defaultState = {
  auth: {
    username: "",
    isLogged: false,
  },
  cart: [],
};

const stateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLogged: true,
          username: payload.username,
        },
      };

    case "ADD_TO_CART":
      const newState = { ...state };
      newState.cart.push(payload);
      return newState;

    default:
      return state;
  }
};

export const StateContext = createContext({ state: defaultState });

const StateContextProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(
    stateReducer,
    Object.assign({}, defaultState)
  );

  return (
    <StateContext.Provider value={{ state, dispatchState }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
