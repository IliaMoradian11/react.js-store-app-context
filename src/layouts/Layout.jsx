import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CgShoppingCart } from "react-icons/cg";

import { context } from "../contexts/SearchContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const { cart } = useContext(context);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      setCount(cart.reduce((acc, cur) => (acc += cur.count), 0));
    })();
  }, [cart]);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1>Store</h1>
        </Link>
        <Link to="/cart" className={styles.linkToCart}>
          {!!count && <span className={styles.count}>{count}</span>}
          <CgShoppingCart size={30} color="#fe5d42" />
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developed by Ilia with ❤️</footer>
    </>
  );
}

export default Layout;
