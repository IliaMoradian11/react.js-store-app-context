import { useReducer, useState } from "react";
import { createContext } from "react";

import { data as products } from "../services/constants/products";

export const context = createContext();

function searchReducer(state, action) {
  switch (action.type) {
    case "setNewValue":
      return action.payload;
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
}

function categoryReducer(state, action) {
  switch (action.type) {
    case "all":
      return "";
    case "electronics":
      return "electronics";
    case "jewelery":
      return "jewelery";
    case "men's clothing":
      return "men's clothing";
    case "women's clothing":
      return "women's clothing";
    case "setNewValue":
      return action.payload;
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
}

function SearchContext({ children }) {
  const [search, dispatchSearch] = useReducer(searchReducer, "");
  const [category, dispatchCategory] = useReducer(categoryReducer, "");
  const [toSearchText, setToSearchText] = useState("");

  return (
    <context.Provider
      value={{
        search,
        dispatchSearch,
        products,
        category,
        dispatchCategory,
        toSearchText,
        setToSearchText,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default SearchContext;
