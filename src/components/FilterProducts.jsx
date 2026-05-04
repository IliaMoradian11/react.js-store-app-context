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
    if (e.target.tagName !== "BUTTON") return;
    const value = e.target.innerText.toLowerCase();
    dispatch({ type: "CATEGORY", payload: value });
    setSearchParams(buildQueryParams(value, filters.toSearchText));
  }

  function isActive(type) {
    if (filters.category === type) return styles.active;
    return null;
  }

  return (
    <ul className={styles.container} onClick={changeCategoryHandler}>
      <h4 className={styles.header}>
        <TbCategory color="#fe5d42" size={22} />
        Categories
      </h4>
      <button type="button" className={isActive("all")}>
        All
      </button>
      <button type="button" className={isActive("electronics")}>
        Electronics
      </button>
      <button type="button" className={isActive("jewelery")}>
        Jewelery
      </button>
      <button type="button" className={isActive("men's clothing")}>
        Men's Clothing
      </button>
      <button type="button" className={isActive("women's clothing")}>
        Women's Clothing
      </button>
    </ul>
  );
}

export default FilterProducts;
