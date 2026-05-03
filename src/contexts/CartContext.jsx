import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const addProduct = (state, action) => {
  const isAvailable = !!state.find(
    (product) => product.id === action.payload.id,
  );
  const newValue = isAvailable
    ? state.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count + 1 };
      })
    : [...state, { ...action.payload, count: 1 }];
  return newValue;
};

const removeProduct = (state, action) => {
  const isCountOne =
    state.find((product) => product.id === action.payload.id).count === 1;
  const newValue = isCountOne
    ? state.filter((product) => product.id !== action.payload.id)
    : state.map((product) => {
        if (product.id !== action.payload.id) return product;
        return { ...product, count: product.count - 1 };
      });
  return newValue;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return addProduct(state, action);
    case "DECREASE":
      return removeProduct(state, action);
    default:
      throw new Error("The value you pass to reducer is not valid");
  }
};

const useCart = () => {
  return useContext(cartContext);
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export { useCart, CartProvider as default };
