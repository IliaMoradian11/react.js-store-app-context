import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import { useProducts } from "../contexts/ProductContext";
import { buildQueryParams, changeQueryParams } from "../helpers/changeQuery";

import styles from "./SearchBox.module.css";

function SearchBox({ searchParams, setSearchParams }) {
  const [search, setSearch] = useState("");
  const { filters, dispatch } = useProducts();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    changeQueryParams("search", searchQuery, dispatch, setSearch);
  }, []);

  function inputChangeHandler(e) {
    setSearch(e.target.value);
  }

  function searchHandler(e) {
    e.preventDefault();
    setSearchParams(buildQueryParams({ category: filters.category, search }));
    dispatch({ type: "SEARCH", payload: search });
  }

  return (
    <div className={styles.searchBox}>
      <form>
        <input
          type="text"
          value={search}
          onChange={inputChangeHandler}
          placeholder="Search ..."
        />
        <button type="submit" onClick={searchHandler}>
          <BiSearch size={22} />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
