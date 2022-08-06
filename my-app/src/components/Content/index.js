import "./Content.css";
import { ProductList } from "../";
import { productLists } from "../../common/sampleData";

export const Content = () => {
  return (
    <div className="content">
      <h1 className="title">
        NEW ARRIVALS
        <span className="line-title"></span>
      </h1>
      <ProductList productLists={productLists} />
    </div>
  );
};
