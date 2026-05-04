// libraries
import { Navigate, Route, Routes } from "react-router-dom";

// contexts
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";

// pages
import ProductsPage from "./pages/ProductsPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route index element={<Navigate to={"/products"} replace={true} />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="checkout" element={<CartPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
