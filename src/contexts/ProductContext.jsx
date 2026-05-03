import {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";

import api from "../services/config";

import wordExistenceChecker from "../helpers/wordExistenceChecker";

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
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filters, dispatch] = useReducer(reducer, initialState);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await api.get("/products/products.json"));
    })();
  }, []);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      const toShowProducts = products.filter(
        (product) =>
          product.category.includes(filters.category) &&
          wordExistenceChecker(product.title, filters.toSearchText),
      );
      setProductsToShow(toShowProducts);
      setIsLoading(false);
    })();
  }, [filters, products]);

  return (
    <productContext.Provider
      value={{
        isLoading,
        productsToShow,
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
