import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import SearchContext from "./contexts/SearchContext";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <SearchContext>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={"/products"} replace={true} />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext>
  );
}

export default App;
