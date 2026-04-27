import { useReducer } from "react";

import { createContext } from "react";

export const searchTextContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setNewValue":
      return action.payload;
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
}

function SearchContext({ children }) {
  const [search, dispatchSearch] = useReducer(reducer, "");

  return (
    <searchTextContext.Provider value={{ search, dispatchSearch }}>
      {children}
    </searchTextContext.Provider>
  );
}

export default SearchContext;
