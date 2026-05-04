// icons
import { TbShoppingBagCheck } from "react-icons/tb";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";

// styles
import styles from "./IncreaseDecreaseProduct.module.css";

function IncreaseDecreaseProduct({ count, dispatch, product }) {
  return (
    <div className={styles.container}>
      {!!count && (
        <>
          <button
            type="button"
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}
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
        onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
      >
        {count ? (
          <BiPlus size={25} color="#fff" />
        ) : (
          <TbShoppingBagCheck size={25} color="#fff" />
        )}
      </button>
    </div>
  );
}

export default IncreaseDecreaseProduct;
