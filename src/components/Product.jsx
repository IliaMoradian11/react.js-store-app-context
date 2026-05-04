import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

import IncreaseDecreaseProduct from "./IncreaseDecreaseProduct";

import styles from "./Product.module.css";

function Product({ product }) {
  const [count, setCount] = useState(0);
  const { dispatch, cart } = useCart();
  const { id, image, title, price } = product;

  useEffect(() => {
    (async () => {
      const wProduct = cart.find((p) => {
        if (p.id === id) return true;
      });
      setCount(wProduct ? wProduct.count : 0);
    })();
  }, [cart]);

  return (
    <div key={id} className={styles.product}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>$ {price}</p>
      <div>
        <Link to={`/products/${id}`}>
          <TbListDetails size={25} color="#fe5d42" />
        </Link>
        <IncreaseDecreaseProduct
          count={count}
          dispatch={dispatch}
          product={product}
        />
      </div>
    </div>
  );
}

export default Product;
