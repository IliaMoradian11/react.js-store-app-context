// react
import { useEffect, useState } from "react";

// icons
import { BiSearch } from "react-icons/bi";

// custom hooks
import { useProducts } from "../contexts/ProductContext";

// helper functions
import { buildQueryParams, changeQueryParams } from "../helpers/changeQuery";

// styles
import styles from "./SearchBox.module.css";

function SearchBox({ searchParams, setSearchParams }) {
  const [search, setSearch] = useState("");
  const { filters, dispatch } = useProducts();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    changeQueryParams("search", searchQuery, dispatch, setSearch);
  }, []);

  function searchHandler(e) {
    let toSearch;
    if (typeof e === "object") {
      e.preventDefault();
      toSearch = search;
    } else {
      toSearch = e;
    }
    setSearchParams(buildQueryParams(filters.category, toSearch));
    dispatch({ type: "SEARCH", payload: toSearch });
  }

  function inputChangeHandler(e) {
    const value = e.target.value;
    setSearch(value);
    if (!value) searchHandler(value);
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
