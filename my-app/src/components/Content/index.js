import "./Content.css";
import { ProductList } from "../";
import { productLists } from "../../common/sampleData";

export const Content = () => {
  return (
    <div className="content">
      <h1 className="title">NEW ARRIVALS</h1>
      <ProductList productLists={productLists} />
    </div>
  );
};
