import { useContext, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

import { context } from "../contexts/SearchContext";

import styles from "./SearchBox.module.css";

function SearchBox({ searchParams, setSearchParams }) {
  const { search, dispatchSearch, category, setToSearchText } =
    useContext(context);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      dispatchSearch({ type: "setNewValue", payload: searchQuery });
      setToSearchText(searchQuery);
    }
  }, []);

  function inputChangeHandler(e) {
    dispatchSearch({ type: "setNewValue", payload: e.target.value });
  }

  function searchHandler(e) {
    e.preventDefault();
    if (search && category) {
      setSearchParams({ category, search });
    } else if (search) {
      setSearchParams({ search });
    } else if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    setToSearchText(search);
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
