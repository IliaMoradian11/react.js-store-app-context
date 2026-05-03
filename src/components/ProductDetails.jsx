import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";

import { useProducts } from "../contexts/ProductContext";

import styles from "./ProductDetails.module.css";

function ProductDetails({ id }) {
  const { products } = useProducts();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      setProduct(products.find((productI) => productI.id === +id));
    })();
  });

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          iste dolores explicabo consectetur, rem eius ut quibusdam earum, sunt,
          beatae enim ipsa! Quisquam suscipit nisi sequi similique molestias
          autem inventore quod dolor quidem aliquid asperiores ipsam
          perspiciatis animi possimus obcaecati beatae, delectus quam numquam
          quas? Aliquid temporibus repellendus rerum neque doloribus laudantium,
          nostrum consectetur modi similique inventore itaque, voluptatum
          voluptates laborum saepe, provident sapiente? Pariatur, tempora.
          Eveniet commodi iure eligendi sapiente amet voluptatem, quasi animi.
        </p>
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
    </div>
  );
}

export default ProductDetails;
