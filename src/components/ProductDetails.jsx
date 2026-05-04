// react
import { useEffect, useState } from "react";

// libraries
import { Link } from "react-router-dom";

// icons
import { BiLeftArrowAlt } from "react-icons/bi";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";

// custom hooks
import { useProducts } from "../contexts/ProductContext";

//styles
import styles from "./ProductDetails.module.css";

function ProductDetails({ id }) {
  const { products } = useProducts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      setProduct(products.find((p) => p.id === +id));
    })();
  });

  return (
    <div className={styles.container}>
      {!!product && (
        <>
          <img src={product.image} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <p className={styles.text}>{product.description}</p>
            <div>
              <p className={styles.categoryAndPrice}>
                <SiOpenproject size={20} color="#fe5d42" />
                <span>{product.category}</span>
              </p>
              <p className={styles.categoryAndPrice}>
                <IoMdPricetag size={20} color="#fe5d42" />
                <span>{product.price} $</span>
              </p>
            </div>
            <Link to="/products">
              <BiLeftArrowAlt size={20} /> <span>Back to Shop</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
