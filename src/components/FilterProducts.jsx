import { useEffect } from "react";
import { useProducts } from "../contexts/ProductContext";

import { buildQueryParams, changeQueryParams } from "../helpers/changeQuery";

import { TbCategory } from "react-icons/tb";

import styles from "./FilterProducts.module.css";

function FilterProducts({ searchParams, setSearchParams }) {
  const { filters, dispatch } = useProducts();

  useEffect(() => {
    const searchQuery = searchParams.get("category");
    changeQueryParams("category", searchQuery, dispatch);
  }, []);

  function changeCategoryHandler(e) {
    const value = e.target.dataset.category;
    dispatch({ type: "CATEGORY", payload: value });
    console.log(filters);
    setSearchParams(
      buildQueryParams({ search: filters.toSearchText, category: value }),
    );
  }

  return (
    <ul className={styles.container}>
      <h4 className={styles.header}>
        <TbCategory color="#fe5d42" size={22} />
        Categories
      </h4>
      <button
        type="button"
        className={filters.category === "" ? styles.active : null}
        onClick={changeCategoryHandler}
        data-category=""
      >
        All
      </button>
      <button
        type="button"
        className={filters.category === "electronics" ? styles.active : null}
        onClick={changeCategoryHandler}
        data-category="electronics"
      >
        Electronics
      </button>
      <button
        type="button"
        className={filters.category === "jewelery" ? styles.active : null}
        onClick={changeCategoryHandler}
        data-category="jewelery"
      >
        Jewelery
      </button>
      <button
        type="button"
        className={filters.category === "men's clothing" ? styles.active : null}
        onClick={changeCategoryHandler}
        data-category="men's clothing"
      >
        Men's Clothing
      </button>
      <button
        type="button"
        className={
          filters.category === "women's clothing" ? styles.active : null
        }
        onClick={changeCategoryHandler}
        data-category="women's clothing"
      >
        Women's Clothing
      </button>
    </ul>
  );
}

export default FilterProducts;
