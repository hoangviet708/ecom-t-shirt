import React, { useState } from "react";
import "./AutoSuggest.css";
import { productLists } from "../../common/sampleData";

export const AutoSuggest = () => {
  const [searchProducts, setSearchProducts] = useState([]);

  const handleSearch = (event) => {
    const searchTerms = event.target.value;

    if (searchTerms) {
      const filterData = productLists.filter((product) =>
        product.productName.includes(searchTerms)
      );
      if (filterData && filterData.length > 0) {
        setSearchProducts(filterData);
      } else {
        setSearchProducts([]);
      }
    } else {
      setSearchProducts([]);
    }
  };

  const SearchItem = ({ searchProducts }) => {
    return (
      <div className="suggestItem">
        {searchProducts.map((product) => (
          <div key={product.id}>
            <p>{product.productName}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="navbar-search">
      <div className="search-icon">
        <label htmlFor="search">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>{" "}
        </label>
      </div>
      <div className="search-input">
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      {searchProducts && searchProducts.length > 0 && (
        <SearchItem searchProducts={searchProducts} />
      )}
    </div>
  );
};
