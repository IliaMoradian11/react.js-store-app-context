import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout";
import ProductDetails from "../components/ProductDetails";

function ProductDetailsPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <Layout>
      <ProductDetails id={id} />
    </Layout>
  );
}

export default ProductDetailsPage;
