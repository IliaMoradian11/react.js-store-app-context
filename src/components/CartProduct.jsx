// react
import { useEffect, useState } from "react";

// custom hooks
import { useCart } from "../contexts/CartContext";

// components
import IncreaseDecreaseProduct from "../components/IncreaseDecreaseProduct";

//styles
import styles from "./CartProduct.module.css";

function CartProduct({ product }) {
  const [count, setCount] = useState(0);
  const {
    cart: { products: cartProducts },
    dispatch,
  } = useCart();
  const { id, image, title } = product;

  useEffect(() => {
    (async () => {
      const thisProduct = cartProducts.find((p) => {
        if (p.id === id) return true;
      });
      setCount(thisProduct ? thisProduct.count : 0);
    })();
  }, [cartProducts]);

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
