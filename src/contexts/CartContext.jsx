// react
import { createContext, useContext, useReducer, useEffect } from "react";

// helper functions
import { buildCount, buildTotalPrice } from "../helpers/cartDetails";

// context
const CartContext = createContext();

// contants
const initialState = { products: [], totalCount: 0, totalPrice: 0 };

// reducer functions
const addProduct = (state, action) => {
  const isAvailable = !!state.products.find(
    (product) => product.id === action.payload.id,
  );
  const newProducts = isAvailable
    ? state.products.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count + 1 };
      })
    : [...state.products, { ...action.payload, count: 1 }];
  const totalCount = buildCount(newProducts);
  const totalPrice = buildTotalPrice(newProducts);
  return { products: newProducts, totalCount, totalPrice };
};

const removeProduct = (state, action) => {
  const isCountOne =
    state.products.find((product) => product.id === action.payload.id).count ===
    1;
  const newProducts = isCountOne
    ? state.products.filter((product) => product.id !== action.payload.id)
    : state.products.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count - 1 };
      });
  const totalCount = buildCount(newProducts);
  const totalPrice = buildTotalPrice(newProducts);
  return { products: newProducts, totalCount, totalPrice };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addProduct(state, action);
    case "REMOVE_ITEM":
      return removeProduct(state, action);
    case "CHECK_OUT":
      return initialState;
    case "NEW_VALUE":
      return action.payload;
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
};

// custom hooks
const useCart = () => {
  return useContext(CartContext);
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const lsCart = JSON.parse(localStorage.getItem("cart")); // lsCart = localStorageCart
    if (lsCart) {
      dispatch({ type: "NEW_VALUE", payload: lsCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider as default };
