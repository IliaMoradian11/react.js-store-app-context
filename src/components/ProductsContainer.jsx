import styles from "./ProductsContainer.module.css";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProductsContainer({ productsToShow }) {
  return (
    <div className={styles.container}>
      {productsToShow.map((product) => (
        <div key={product.id} className={styles.product}>
          <img src={product.image} alt={product.title} />
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>$ {product.price}</p>
          <div>
            <Link to={`/products/${product.id}`}>
              <TbListDetails size={25} color="#fe5d42" />
            </Link>
            <button type="button">
              <TbShoppingBagCheck size={25} color="#fff" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsContainer;
