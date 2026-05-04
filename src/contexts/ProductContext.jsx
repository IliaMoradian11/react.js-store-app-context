// react
import {
  useContext,
  useEffect,
  useReducer,
  useState,
  createContext,
} from "react";

// axios
import api from "../services/config";

// helper functions
import {
  categoryChecker,
  wordExistenceChecker,
} from "../helpers/wordExistence&CategoryChecker";

// context
const ProductContext = createContext();

// constants
const initialState = { toSearchText: "", category: "all" };

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, toSearchText: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
};

// custom hooks
function useProducts() {
  return useContext(ProductContext);
}

function ProductProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filters, dispatch] = useReducer(reducer, initialState);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setProducts(await api.get("/products"));
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
    <ProductContext.Provider
      value={{
        isLoading,
        productsToShow,
        filters,
        dispatch,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { useProducts, ProductProvider as default };
