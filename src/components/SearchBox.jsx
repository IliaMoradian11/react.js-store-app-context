import { useContext, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

import { searchTextContext } from "../contexts/SearchContext";

import styles from "./SearchBox.module.css";

function SearchBox({ searchParams, setSearchParams }) {
  const { search, dispatchSearch } = useContext(searchTextContext);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery)
      dispatchSearch({ type: "setNewValue", payload: searchQuery });
  }, []);

  function inputChangeHandler(e) {
    dispatchSearch({ type: "setNewValue", payload: e.target.value });
  }

  function searchHandler(e) {
    e.preventDefault();
    search ? setSearchParams({ search }) : setSearchParams({});
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
