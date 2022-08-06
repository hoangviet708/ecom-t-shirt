import React, { useRef, useState } from "react";
import "./AutoSuggest.css";
import { productLists } from "../../common/sampleData";

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
        if (filterData.length > 5) {
          let filterDataLimit = filterData.slice(0, 5);
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
          onBlur={() => {
            setSearchProducts([]);
          }}
        />
      </div>
      <div
        onClick={handleClearSearch}
        className={
          ref.current && ref.current.value ? "clear-icon active" : "clear-icon"
        }
      >
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.057L7.293.35 4 3.643.707.35 0 1.057 3.293 4.35 0 7.643l.707.707L4 5.057 7.293 8.35 8 7.643 4.707 4.35 8 1.057z"
            fill="currentcolor"
          ></path>
        </svg>
      </div>
      {searchProducts && searchProducts.length > 0 && (
        <SearchItem searchProducts={searchProducts} />
      )}
    </div>
  );
};
