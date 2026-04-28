import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiEmpty } from "react-icons/pi";
import { CgHashtag } from "react-icons/cg";
import { BsPatchCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

import { context } from "../contexts/SearchContext";

import CartProduct from "../components/CartProduct";

import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(context);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      setTotalPrice(
        cart.reduce((acc, cur) => (acc += cur.count * cur.price), 0),
      );
      setCount(cart.reduce((acc, cur) => (acc += cur.count), 0));
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
              <span>{totalPrice} $</span>
            </div>
            <div>
              <CgHashtag color="#fe5d42" size={25} />
              <p>Quantity:</p>
              <span>{count}</span>
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
