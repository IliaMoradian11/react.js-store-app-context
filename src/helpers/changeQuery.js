function buildQueryParams(category, search) {
  let searchParams;
  if (search && category !== "all") {
    searchParams = { category, search };
  } else if (search) {
    searchParams = { search };
  } else if (category !== "all") {
    searchParams = { category };
  } else {
    searchParams = {};
  }
  return searchParams;
}

function changeQueryParams(type, query, callbackFunction, setSearch) {
  if (query) {
    callbackFunction({ type: type.toUpperCase(), payload: query });
    if (type === "search") setSearch(query);
  }
}

export { buildQueryParams, changeQueryParams };
