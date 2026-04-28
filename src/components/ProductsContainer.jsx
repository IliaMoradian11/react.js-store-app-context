import styles from "./ProductsContainer.module.css";

import Product from "./Product";

function ProductsContainer({ productsToShow }) {
  return (
    <div className={styles.container}>
      {productsToShow.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
