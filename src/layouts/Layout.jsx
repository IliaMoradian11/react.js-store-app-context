import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

import { buildCount } from "../helpers/cartDetails";

import styles from "./Layout.module.css";
import Loader from "../components/Loader";

function Layout({ children }) {
  const { cart } = useCart();
  const [count, setCount] = useState(0);
  const { isLoading } = useProducts();

  useEffect(() => {
    (async () => {
      setCount(buildCount(cart));
    })();
  }, [cart]);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1>Store</h1>
        </Link>
        <Link to="/checkout" className={styles.linkToCart}>
          {!!count && <span className={styles.count}>{count}</span>}
          <CgShoppingCart size={30} color="#fe5d42" />
        </Link>
      </header>
      {isLoading ? <Loader /> : children}
      <footer className={styles.footer}>Developed by Ilia with ❤️</footer>
    </>
  );
}

export default Layout;
