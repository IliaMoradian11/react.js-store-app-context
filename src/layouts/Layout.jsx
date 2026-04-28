import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Store</h1>
        <Link to="/cart">
          <CgShoppingCart size={30} color="#fe5d42" />
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developed by Ilia with ❤️</footer>
    </>
  );
}

export default Layout;
