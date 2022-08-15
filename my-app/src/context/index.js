import { createContext, useReducer } from "react";

const defaultState = {
  auth: {
    username: "",
    isLogged: false,
  },
};

const stateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: payload,
      };
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
