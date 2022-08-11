import { useEffect, useState } from "react";
import { Header, Footer, Content } from "../../components";
import { productLists } from "../../common/sampleData";

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
      setProductDetails(product);
    }
  }, [productId]);

  return (
    <div>
      <Header />
      <Content
        children={
          <div>
            <h1>ProductAll</h1>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
