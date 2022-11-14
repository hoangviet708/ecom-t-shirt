import { useEffect, useState } from "react";
import { Header, Footer, Content } from "../../components";
import { productLists } from "../../common/sampleData";
import { ProductDetail } from "../../components";

const ProductPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [productDetails, setProductDetails] = useState();

  let productId = undefined;
  if (window.location.pathname.includes("/product")) {
    productId = window.location.pathname.split("/")[2];
  }

  useEffect(() => {
    if (productId) {
      const product = productLists.find((product) => product.id === productId);
      window.scrollTo(0, 0);
      setProductDetails(product);
    }
  }, [productId]);

  return (
    <div>
      <Header />
      <Content children={<ProductDetail />} />
      <Footer />
    </div>
  );
};

export default ProductPage;
