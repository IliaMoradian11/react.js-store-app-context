import { useContext, useEffect, useState } from "react";
import { context } from "../contexts/SearchContext";
import { TbShoppingBagCheck } from "react-icons/tb";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";

import styles from "./CartProduct.module.css";

function CartProduct({ product }) {
  const [count, setCount] = useState(0);
  const { dispatchCart, cart } = useContext(context);
  const { id, image, title } = product;

  useEffect(() => {
    (async () => {
      const wProduct = cart.find((productI) => {
        if (productI.id === id) return productI.count;
      });
      setCount(wProduct ? wProduct.count : 0);
    })();
  }, [cart]);

  return (
    <div className={styles.product}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div>
        {!!count && (
          <>
            <button
              type="button"
              onClick={() => dispatchCart({ type: "remove", payload: product })}
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
  );
}

export default CartProduct;
