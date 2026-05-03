import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

import IncreaseDecreaseProduct from "../components/IncreaseDecreaseProduct";

import styles from "./CartProduct.module.css";

function CartProduct({ product }) {
  const [count, setCount] = useState(0);
  const { cart, dispatch } = useCart();
  const { id, image, title } = product;

  useEffect(() => {
    (async () => {
      const wProduct = cart.find((i) => {
        if (i.id === id) return i.count;
      });
      setCount(wProduct ? wProduct.count : 0);
    })();
  }, [cart]);

  return (
    <div className={styles.product}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <IncreaseDecreaseProduct
        count={count}
        dispatch={dispatch}
        product={product}
      />
    </div>
  );
}

export default CartProduct;
