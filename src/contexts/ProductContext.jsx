import {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";

import wordExistenceChecker from "../helpers/wordExistenceChecker";

import { data } from "../services/constants/products";

const productContext = createContext();

const initialState = { toSearchText: "", category: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return { ...state, toSearchText: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
}

function ProductProvider({ children }) {
  const [filters, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (() => {
      const toShowProducts = data.filter(
        (product) =>
          product.category.includes(filters.category) &&
          wordExistenceChecker(product.title, filters.toSearchText),
      );
      setProducts(toShowProducts);
    })();
  }, [filters]);

  return (
    <productContext.Provider
      value={{
        products,
        filters,
        dispatch,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

function useProducts() {
  return useContext(productContext);
}

export { useProducts, ProductProvider as default };
