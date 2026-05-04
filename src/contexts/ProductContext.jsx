import {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";

import api from "../services/config";

import {
  categoryChecker,
  wordExistenceChecker,
} from "../helpers/wordExistence&CategoryChecker";

const productContext = createContext();

const initialState = { toSearchText: "", category: "all" };

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
      try {
        setProducts(await api.get("/products/products.json"));
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      const toShowProducts = products.filter(
        (product) =>
          categoryChecker(product.category, filters.category) &&
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
