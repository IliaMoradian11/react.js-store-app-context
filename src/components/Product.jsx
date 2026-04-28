import { useContext, useEffect, useState } from "react";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";
import { Link } from "react-router-dom";

import { context } from "../contexts/SearchContext";

import styles from "./Product.module.css";

function Product({ product }) {
  const [count, setCount] = useState(0);
  const { dispatchCart, cart } = useContext(context);
  const { id, image, title, price } = product;

  useEffect(() => {
    (async () => {
      const wProduct = cart.find((productI) => {
        if (productI.id === id) return productI.count;
      });
      setCount(wProduct ? wProduct.count : 0);
    })();
  }, [cart]);

  return (
    <div key={id} className={styles.product}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>$ {price}</p>
      <div>
        <Link to={`/products/${id}`}>
          <TbListDetails size={25} color="#fe5d42" />
        </Link>
        <div>
          {!!count && (
            <>
              <button
                type="button"
                onClick={() =>
                  dispatchCart({ type: "remove", payload: product })
                }
              >
                {count === 1 ? (
                  <CgTrashEmpty size={25} color="#fff" />
                ) : (
                  <BiMinus size={25} color="#fff" />
                )}
              </button>
              <span className={styles.count}>{count}</span>
            </>
          )}
          <button
            type="button"
            onClick={() => dispatchCart({ type: "add", payload: product })}
          >
            {count ? (
              <BiPlus size={25} color="#fff" />
            ) : (
              <TbShoppingBagCheck size={25} color="#fff" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
