import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { context } from "../contexts/SearchContext";

import SearchBox from "../components/SearchBox";
import ProductsContainer from "../components/ProductsContainer";
import FilterProducts from "../components/FilterProducts";

const StyledDiv = styled.div({ display: "flex" });

const checkTitle = (title, toCheckText) =>
  title.toLowerCase().trim().includes(toCheckText.toLowerCase().trim());

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, toSearchText, category } = useContext(context);
  const [productsToShow, setProductsToShow] = useState(products);

  useEffect(() => {
    (async function () {
      setProductsToShow(
        products.filter(
          (product) =>
            product.category.includes(category) &&
            checkTitle(product.title, toSearchText),
        ),
      );
    })();
  }, [toSearchText, category]);

  return (
    <>
      <SearchBox
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <StyledDiv>
        <ProductsContainer
          productsToShow={productsToShow}
          setProductsToShow={setProductsToShow}
        />
        <FilterProducts
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </StyledDiv>
    </>
  );
}

export default ProductsPage;
