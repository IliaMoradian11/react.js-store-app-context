import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../layouts/Layout";
import SearchBox from "../components/SearchBox";
import ProductsContainer from "../components/ProductsContainer";
import FilterProducts from "../components/FilterProducts";
import { useProducts } from "../contexts/ProductContext";

const StyledDiv = styled.div({ display: "flex" });

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsToShow } = useProducts();

  return (
    <Layout>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <StyledDiv>
        <ProductsContainer productsToShow={productsToShow} />
        <FilterProducts
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </StyledDiv>
    </Layout>
  );
}

export default ProductsPage;
