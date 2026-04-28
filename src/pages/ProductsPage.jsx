import { useSearchParams } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import ProductsContainer from "../components/ProductsContainer";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ProductsContainer />
    </>
  );
}

export default ProductsPage;
