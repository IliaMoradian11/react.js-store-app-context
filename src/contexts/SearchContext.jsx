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

function addProduct(state, action) {
  return state.find((product) => product.id === action.payload.id)
    ? state.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count + 1 };
      })
    : [...state, { ...action.payload, count: 1 }];
}

function removeProduct(state, action) {
  return state.find((product) => product.id === action.payload.id).count !== 1
    ? state.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count - 1 };
      })
    : state.filter((product) => product.id !== action.payload.id);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return addProduct(state, action);
    case "remove":
      return removeProduct(state, action);
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
}

function SearchContext({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
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
        cart,
        dispatchCart,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default SearchContext;
