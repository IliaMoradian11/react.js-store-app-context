// react
import { useState } from "react";

// libraries
import { Link, useNavigate } from "react-router-dom";

// icons
import { PiEmpty } from "react-icons/pi";
import { CgHashtag } from "react-icons/cg";
import { BsPatchCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

// custom hooks
import { useCart } from "../contexts/CartContext";

// components
import CartProduct from "../components/CartProduct";

//styles
import styles from "./Cart.module.css";

function Cart() {
  const {
    cart: { products: cartProducts, totalCount, totalPrice },
    dispatch,
  } = useCart();
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  function checkOutHandler() {
    dispatch({ type: "CHECK_OUT" });
    setShowMessage("Check out successfully.");
    setTimeout(() => navigate("/"), 1200);
  }

  return (
    <div className={styles.container}>
      {cartProducts.length ? (
        <>
          <div className={styles.sidebar}>
            <div>
              <TbChecklist color="#fe5d42" size={25} />
              <p>Total:</p>
              <span>{totalPrice} $</span>
            </div>
            <div>
              <CgHashtag color="#fe5d42" size={25} />
              <p>Quantity:</p>
              <span>{totalCount}</span>
            </div>
            <div>
              <BsPatchCheck color="#fe5d42" size={25} />
              <p>Status:</p>
              <span>{cartProducts.length ? "pending ..." : "Completed"}</span>
            </div>
            <button type="button" onClick={checkOutHandler}>
              Checkout
            </button>
          </div>
          <div className={styles.products}>
            {cartProducts.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div>
          {showMessage ? (
            <>
              <div className={styles.checkedOut}>
                <h3>{showMessage}</h3>
                <p>You will go to home page few seconds ...</p>
                <div />
              </div>
            </>
          ) : (
            <div className={styles.empty}>
              <p>
                <PiEmpty />
                Your cart is empty!
              </p>
              <Link to="/">Let's buy something!</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
