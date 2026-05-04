// libraries
import { useParams } from "react-router-dom";

// layout
import Layout from "../layouts/Layout";

// components
import ProductDetails from "../components/ProductDetails";

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <Layout>
      <ProductDetails id={id} />
    </Layout>
  );
}

export default ProductDetailsPage;
