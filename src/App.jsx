import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"/products"} replace={true} />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
