import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default ProductsPage;
