import "./Slide.css";

export const Slide = () => {
  return (
    <div className="slideContainer">
      <div className="bannerContent">
        <h1 className="slideTitle">FREE SHIPPING</h1>
        <h2 className="slideContent">
          ON ORDERS OVER $50 - USE COUPON CODE OVER50
        </h2>
        <div className="slideBtns">
          <button className="slideBtn">Shop Women</button>
          <button className="slideBtn">Shop Men</button>
          <button className="slideBtn">Shop Sale</button>
        </div>
      </div>
      <div className="imageSilde">
        <img
          alt=""
          src="https://static.wixstatic.com/media/ea71bb_ed3d94dce4424884bb453b4045cf66af~mv2_d_1784_1946_s_2.jpg/v1/fill/w_960,h_1034,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_ed3d94dce4424884bb453b4045cf66af~mv2_d_1784_1946_s_2.jpg"
          className="img1"
        />
        <img
          alt=""
          src="https://static.wixstatic.com/media/ea71bb_6982021bfe72428891e04e103b8e2b4a~mv2_d_2001_2211_s_2.jpg/v1/fill/w_960,h_1034,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_6982021bfe72428891e04e103b8e2b4a~mv2_d_2001_2211_s_2.jpg"
          className="img2"
        />
        <img
          alt=""
          src="https://static.wixstatic.com/media/ea71bb_9c6c6c058cbc4e4da9eb1876b4c798c6~mv2_d_5122_3415_s_4_2.jpg/v1/fill/w_1510,h_1034,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_9c6c6c058cbc4e4da9eb1876b4c798c6~mv2_d_5122_3415_s_4_2.jpg"
          className="img3"
        />
      </div>
    </div>
  );
};
