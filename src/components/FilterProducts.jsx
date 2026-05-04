// react
import { useEffect } from "react";

// icons
import { TbCategory } from "react-icons/tb";

// custom hooks
import { useProducts } from "../contexts/ProductContext";

// helper functions
import { buildQueryParams, changeQueryParams } from "../helpers/changeQuery";

// styles
import styles from "./FilterProducts.module.css";

// constants
const categories = [
  { id: "category1", text: "All" },
  { id: "category2", text: "Electronics" },
  { id: "category3", text: "Jewelery" },
  { id: "category4", text: "Men's Clothing" },
  { id: "category5", text: "Women's Clothing" },
];

function FilterProducts({ searchParams, setSearchParams }) {
  const { filters, dispatch } = useProducts();

  useEffect(() => {
    const searchQuery = searchParams.get("category");
    if (searchQuery) {
      const isValid = categories.find(
        (category) => category.text.toLowerCase() === searchQuery.toLowerCase(),
      );
      if (isValid) {
        changeQueryParams("category", searchQuery, dispatch);
      } else {
        dispatch({ type: "CATEGORY", payload: "all" });
        setSearchParams({ search: searchParams.get("search") });
      }
    }
  }, []);

  function changeCategoryHandler(e) {
    if (e.target.tagName !== "BUTTON") return;
    const value = e.target.innerText.toLowerCase();
    dispatch({ type: "CATEGORY", payload: value });
    setSearchParams(buildQueryParams(value, filters.toSearchText));
  }

  function isActive(type) {
    if (filters.category === type.toLowerCase()) return styles.active;
    return null;
  }

  return (
    <ul className={styles.container} onClick={changeCategoryHandler}>
      <h4 className={styles.header}>
        <TbCategory color="#fe5d42" size={22} />
        Categories
      </h4>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={isActive(category.text)}
        >
          {category.text}
        </button>
      ))}
    </ul>
  );
}

export default FilterProducts;
