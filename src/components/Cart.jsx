import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { PiEmpty } from "react-icons/pi";
import { CgHashtag } from "react-icons/cg";
import { BsPatchCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

import { useCart } from "../contexts/CartContext";
import { buildCount, buildTotalPrice } from "../helpers/cartDetails";

import CartProduct from "../components/CartProduct";

import styles from "./Cart.module.css";

const initialState = { count: 0, total_price: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_VALUE":
      return action.payload;
    default:
      break;
  }
};

function Cart() {
  const { cart } = useCart();
  const [cartDetails, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({
        type: "NEW_VALUE",
        payload: {
          count: buildCount(cart),
          total_price: buildTotalPrice(cart),
        },
      });
    })();
  }, [cart]);

  return (
    <div className={styles.container}>
      {cart.length ? (
        <>
          <div className={styles.sidebar}>
            <div>
              <TbChecklist color="#fe5d42" size={25} />
              <p>Total:</p>
              <span>{cartDetails.total_price} $</span>
            </div>
            <div>
              <CgHashtag color="#fe5d42" size={25} />
              <p>Quantity:</p>
              <span>{cartDetails.count}</span>
            </div>
            <div>
              <BsPatchCheck color="#fe5d42" size={25} />
              <p>Status:</p>
              <span>{cart.length ? "pending ..." : "Completed"}</span>
            </div>
            <button type="button">Checkout</button>
          </div>
          <div className={styles.products}>
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p>
            <PiEmpty />
            Your cart is empty!
          </p>
          <Link to="/">Let's buy something!</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
