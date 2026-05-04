// react
import { useEffect, useState } from "react";

// libraries
import { Link } from "react-router-dom";

// icons
import { TbListDetails } from "react-icons/tb";

// custom hooks
import { useCart } from "../contexts/CartContext";

// helper functions
import shortenText from "../helpers/shortenText";

// components
import IncreaseDecreaseProduct from "./IncreaseDecreaseProduct";

// styles
import styles from "./Product.module.css";

function Product({ product }) {
  const [count, setCount] = useState(0);
  const {
    dispatch,
    cart: { products: cartProducts },
  } = useCart();
  const { id, image, title, price } = product;

  useEffect(() => {
    (async () => {
      const thisProduct = cartProducts.find((p) => {
        if (p.id === id) return true;
      });
      setCount(thisProduct ? thisProduct.count : 0);
    })();
  }, [cartProducts]);

  return (
    <div key={id} className={styles.product}>
      <img src={image} alt={title} />
      <p className={styles.title}>{shortenText(title)}</p>
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
