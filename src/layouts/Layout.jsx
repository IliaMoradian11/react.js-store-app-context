// libraries
import { Link } from "react-router-dom";

// icons
import { CgShoppingCart } from "react-icons/cg";

// custom hooks
import { useProducts } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";

// components
import Loader from "../components/Loader";

// styles
import styles from "./Layout.module.css";

function Layout({ children }) {
  const {
    cart: { totalCount },
  } = useCart();
  const { isLoading } = useProducts();

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1>Store</h1>
        </Link>
        <Link to="/checkout" className={styles.linkToCart}>
          {!!totalCount && <span className={styles.count}>{totalCount}</span>}
          <CgShoppingCart size={30} color="#fe5d42" />
        </Link>
      </header>
      {isLoading ? <Loader /> : children}
      <footer className={styles.footer}>Developed by Ilia with ❤️</footer>
    </>
  );
}

export default Layout;
