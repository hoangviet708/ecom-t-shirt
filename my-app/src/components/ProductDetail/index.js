import "./ProductDetail.css";
import { RadioCustom } from "../../components";
import { PlusIcon } from "../../assets/img/PlusIcon";
import { MinusIcon } from "../../assets/img/MinusIcon";

import Select from "react-select";
import { useState } from "react";

const color1 = "#2ecc71";
const color2 = "#3498db";
const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

export const ProductDetail = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showInfo, setShowInfo] = useState("block");

  const handleShowInfo = () => {
    if (showInfo === "block") {
      setShowInfo("none");
    } else {
      setShowInfo("block");
    }
  };

  return (
    <div className="productDetail">
      <div className="productDetail-image">
        <img
          src="https://static.wixstatic.com/media/ea71bb_55510ab619bc4a9db0f9e24781380f44~mv2_d_3664_4866_s_4_2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_55510ab619bc4a9db0f9e24781380f44~mv2_d_3664_4866_s_4_2.webp"
          className="big-img"
          alt=""
        />
        <div className="small-img-group">
          <img
            src="https://static.wixstatic.com/media/ea71bb_55510ab619bc4a9db0f9e24781380f44~mv2_d_3664_4866_s_4_2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_55510ab619bc4a9db0f9e24781380f44~mv2_d_3664_4866_s_4_2.webp"
            className="small-img-col"
            alt=""
          />

          <img
            src="https://static.wixstatic.com/media/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.jpg/v1/fill/w_538,h_718,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.webp"
            className="small-img-col"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.jpg/v1/fill/w_538,h_718,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.webp"
            className="small-img-col"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.jpg/v1/fill/w_538,h_718,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c0dc8a68689a43c5bc1f927ecb97b131~mv2_d_3664_4866_s_4_2.webp"
            className="small-img-col"
            alt=""
          />
        </div>
        <p className="image-desp">
          I'm a product description. I'm a great place to add more details about
          your product such as sizing, material, care instructions and cleaning
          instructions.
        </p>
      </div>

      <div className="productDetail-description">
        <h2 className="description-title">Pink Classic T-Shirt</h2>
        <p className="description-id">SKU: 0014</p>
        <div className="description-cost">$25.00</div>
        <p className="description-size">Size</p>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <p className="description-color">Color</p>
        <RadioCustom color1={color1} color2={color2} />
        <p className="description-quantity">Quantity</p>
        <input
          className="quantityInput"
          type="number"
          max="99999"
          min="1"
          defaultValue="1"
        />
        <div className="addToCart">
          <button className="addToCartBtn">Add To Cart</button>
          <i class="iconHeart">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="30"
              height="30"
              class="iconHeartSvg"
              data-hook="wishlist-button-icon"
            >
              <path
                d="M8.1816,5.0039 C7.9276,5.0039 7.6696,5.0279 7.4106,5.0759 C5.7326,5.3909 4.3566,6.8479 4.0646,8.6189 C3.9346,9.4039 4.0036,10.2029 4.2616,10.9319 C4.2636,10.9379 4.2656,10.9439 4.2676,10.9499 C5.1716,13.8579 10.2066,17.4019 11.7286,18.4189 C11.8966,18.5329 12.1076,18.5309 12.2746,18.4189 C13.7956,17.4019 18.8266,13.8589 19.7326,10.9499 C19.9966,10.2029 20.0646,9.4039 19.9356,8.6189 C19.6426,6.8479 18.2666,5.3909 16.5896,5.0759 C14.9596,4.7749 13.3646,5.4459 12.4126,6.8369 C12.2256,7.1099 11.7736,7.1099 11.5876,6.8369 C10.7866,5.6669 9.5276,5.0039 8.1816,5.0039 M12.0016,19.5029 C11.7136,19.5029 11.4246,19.4189 11.1726,19.2509 C9.1366,17.8899 4.2966,14.3869 3.3156,11.2559 C3.0036,10.3719 2.9216,9.4039 3.0776,8.4569 C3.4436,6.2429 5.1106,4.4889 7.2266,4.0939 C9.0226,3.7539 10.8006,4.3809 11.9996,5.7409 C13.1996,4.3829 14.9766,3.7569 16.7736,4.0939 C18.8896,4.4899 20.5566,6.2429 20.9216,8.4569 C21.0786,9.4069 20.9956,10.3789 20.6816,11.2659 C19.7116,14.3819 14.8676,17.8889 12.8306,19.2509 C12.5786,19.4189 12.2896,19.5029 12.0016,19.5029"
                fillRule="evenodd"
              ></path>
            </svg>
          </i>
        </div>
        <button className="buyNowBtn">Buy Now</button>

        <ul className="info-container">
          <li className="product-info">
            <button className="btn-info-item" onClick={handleShowInfo}>
              <h2>PRODUCT INFO</h2>
              <MinusIcon />
              <PlusIcon />
            </button>
            <p className="info-paragraph" style={{ display: showInfo }}>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
            </p>
          </li>
          <li className="product-info">
            <button className="btn-info-item" onClick={handleShowInfo}>
              <h2>PRODUCT INFO</h2>
              <MinusIcon />
              <PlusIcon />
            </button>
            <p className="info-paragraph" style={{ display: showInfo }}>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
            </p>
          </li>
          <li className="product-info">
            <button className="btn-info-item" onClick={handleShowInfo}>
              <h2>PRODUCT INFO</h2>
              <MinusIcon />
              <PlusIcon />
            </button>
            <p className="info-paragraph" style={{ display: showInfo }}>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
