import React, { useRef, useState } from "react";
import "./AutoSuggest.css";
import { productLists } from "../../common/sampleData";
import { ClearSearchIcon } from "../../assets/img/ClearSearchIcon";

const LIMIT_SEARCH_KEYWORD = 5;

export const AutoSuggest = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const ref = useRef();

  const handleSearch = (event) => {
    const searchTerms = event.target.value;

    if (searchTerms) {
      const filterData = productLists.filter((product) =>
        product.productName.toLowerCase().includes(searchTerms.toLowerCase())
      );
      if (filterData && filterData.length > 0) {
        if (filterData.length > LIMIT_SEARCH_KEYWORD) {
          let filterDataLimit = filterData.slice(0, LIMIT_SEARCH_KEYWORD);
          setSearchProducts(filterDataLimit);
        } else {
          setSearchProducts(filterData);
        }
      } else {
        setSearchProducts([]);
      }
    } else {
      setSearchProducts([]);
    }
  };

  const handleClearSearch = () => {
    ref.current.value = "";
    setSearchProducts([]);
    ref.current.focus();
  };

  const handleBlur = () => {
    setSearchProducts([]);
  };

  const SearchItem = ({ searchProducts }) => {
    return (
      <div className="suggestContainer">
        <p className="suggestContainerTitle">Products</p>
        <ul className="suggestListItems">
          {searchProducts.map((product) => (
            <li className="suggestItem" key={product.id}>
              <a href="/" className="suggestItemLink">
                <img
                  src={product.imageFront}
                  className="suggestItemImg"
                  alt={product.productName}
                />

                <div className="suggestItemDetail">
                  <p className="suggestItemDetailName">{product.productName}</p>
                  <p className="suggestItemDetailDes">{product.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <button className="searchAllBtn">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Search all "{ref.current.value}"</span>
        </button>
      </div>
    );
  };
  return (
    <div className="navbar-search">
      <div className="search-icon">
        <label htmlFor="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <div className="search-input">
        <input
          id="search"
          ref={ref}
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          onBlur={handleBlur}
        />
      </div>
      <div
        onClick={handleClearSearch}
        className={
          ref.current && ref.current.value ? "clear-icon active" : "clear-icon"
        }
      >
        <ClearSearchIcon />
      </div>
      {searchProducts && searchProducts.length > 0 && (
        <SearchItem searchProducts={searchProducts} />
      )}
    </div>
  );
};
