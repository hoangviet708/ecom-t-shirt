import "./ProductItem.css";
import { useState } from "react";

export const ProductItem = ({ product }) => {
  const [style, setStyle] = useState({ display: "none" });

  const onClickQuickView = (product) => () => {
    //TODO: console.log("product", product);
  };

  return (
    <div
      className="productItem"
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <div className="viewProductImage">
        <img
          src={product.image}
          className="productImage"
          alt={product.productName}
        />
        <button
          onClick={onClickQuickView(product)}
          className="quickViewButton"
          style={style}
        >
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
