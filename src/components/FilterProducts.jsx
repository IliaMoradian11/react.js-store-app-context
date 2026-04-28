import { useContext, useEffect } from "react";

import { TbCategory } from "react-icons/tb";

import { context } from "../contexts/SearchContext";

import styles from "./FilterProducts.module.css";

function FilterProducts({ searchParams, setSearchParams }) {
  const { category, dispatchCategory, search } = useContext(context);

  useEffect(() => {
    const searchQuery = searchParams.get("category");
    if (searchQuery)
      dispatchCategory({ type: "setNewValue", payload: searchQuery });
  }, []);

  function changeCategoryHandler(e) {
    const value = e.target.innerText.toLowerCase();
    dispatchCategory({ type: value });
    if (search && value !== "all") {
      setSearchParams({ category: value, search });
    } else if (search) {
      setSearchParams({ search });
    } else if (value !== "all") {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <ul className={styles.container}>
      <h4 className={styles.header}>
        <TbCategory color="#fe5d42" size={22} />
        Categories
      </h4>
      <button
        type="button"
        className={category === "" ? styles.active : null}
        onClick={changeCategoryHandler}
      >
        All
      </button>
      <button
        type="button"
        className={category === "electronics" ? styles.active : null}
        onClick={changeCategoryHandler}
      >
        Electronics
      </button>
      <button
        type="button"
        className={category === "jewelery" ? styles.active : null}
        onClick={changeCategoryHandler}
      >
        Jewelery
      </button>
      <button
        type="button"
        className={category === "men's clothing" ? styles.active : null}
        onClick={changeCategoryHandler}
      >
        Men's Clothing
      </button>
      <button
        type="button"
        className={category === "women's clothing" ? styles.active : null}
        onClick={changeCategoryHandler}
      >
        Women's Clothing
      </button>
    </ul>
  );
}

export default FilterProducts;
