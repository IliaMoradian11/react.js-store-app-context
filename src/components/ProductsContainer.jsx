// components
import Product from "./Product";

// styles
import styles from "./ProductsContainer.module.css";

function ProductsContainer({ productsToShow }) {
  return (
    <div className={styles.container}>
      {productsToShow.length ? (
        productsToShow.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p className={styles.noProduct}>No product with these informations!</p>
      )}
    </div>
  );
}

export default ProductsContainer;
