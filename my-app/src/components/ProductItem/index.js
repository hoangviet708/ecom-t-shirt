import "./ProductItem.css";
import { useRef, useState } from "react";

export const ProductItem = ({ product }) => {
  const [quickView, setQuickView] = useState("quickViewButton");
  const ref = useRef();

  const onClickQuickView = (product) => () => {
    //TODO: console.log("product", product);
  };

  return (
    <div
      className="productItem"
      onMouseEnter={(e) => {
        setQuickView("quickViewButton open");
        ref.current.src = product.imageBack;
      }}
      onMouseLeave={(e) => {
        setQuickView("quickViewButton");
        ref.current.src = product.imageFront;
      }}
    >
      <div className="viewProductImage">
        <img
          src={product.imageFront}
          className="productImage"
          alt={product.productName}
          ref={ref}
        />
        <button onClick={onClickQuickView(product)} className={quickView}>
          Quick View
        </button>
      </div>
      <h3>{product.productName ?? "N/A"}</h3>
      <span className="cost">
        ${product.cost ? Number(product.cost).toFixed(2) : "N/A"}
      </span>
    </div>
  );
};
