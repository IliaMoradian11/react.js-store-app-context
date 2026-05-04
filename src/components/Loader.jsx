// libraries
import { RotatingLines } from "react-loader-spinner";

// styles
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <RotatingLines
          strokeWidth={4}
          strokeColor="#fe5d42"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default Loader;
