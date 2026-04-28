import { useReducer } from "react";
import { createContext } from "react";

import { data as products } from "../services/constants/products";

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
    <searchTextContext.Provider value={{ search, dispatchSearch, products }}>
      {children}
    </searchTextContext.Provider>
  );
}

export default SearchContext;
