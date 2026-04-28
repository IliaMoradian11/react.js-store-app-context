import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import SearchBox from "../components/SearchBox";
import ProductsContainer from "../components/ProductsContainer";
import FilterProducts from "../components/FilterProducts";

const StyledDiv = styled.div({ display: "flex" });

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <StyledDiv>
        <ProductsContainer />
        <FilterProducts
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </StyledDiv>
    </>
  );
}

export default ProductsPage;
