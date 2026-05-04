// libraries
import { useNavigate } from "react-router-dom";

// styles
import styles from "./404NotFound.module.css";

function PageNotFound() {
  const navigate = useNavigate();

  function backToHomeHandler() {
    navigate("/", { replace: true });
  }

  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Not found</p>
      <button type="button" onClick={backToHomeHandler}>
        Come back to home page
      </button>
    </div>
  );
}

export default PageNotFound;
