// libraries
import { useSearchParams } from "react-router-dom";

// custom hooks
import { useProducts } from "../contexts/ProductContext";

// layout
import Layout from "../layouts/Layout";

// components
import SearchBox from "../components/SearchBox";
import ProductsContainer from "../components/ProductsContainer";
import FilterProducts from "../components/FilterProducts";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsToShow } = useProducts();

  return (
    <Layout>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div style={{ display: "flex" }}>
        <ProductsContainer productsToShow={productsToShow} />
        <FilterProducts
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </Layout>
  );
}

export default ProductsPage;
