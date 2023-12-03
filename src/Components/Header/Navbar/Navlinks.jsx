

import { MenuOutlined } from "@mui/icons-material";
import "./Navlinks.css";



const Navlinks = () => {
 

  return (
    <div className="navlinks">
      <div className="navlinks__container">
        <div className="navlinks__left">
          <span className="navlinks__left__menu navlink__link">
             <MenuOutlined />
          </span>
          <span className="navlinks__left__all navlink__link">
            All
          </span>
        </div>
        <div className="navlinks__fill">
          <span className="navlinks__fill__link navlink__link">
            Mobiles
          </span>
          <span className="navlinks__fill__link navlink__link">
            Computers
          </span>
          <span className="navlinks__fill__link navlink__link">
            Amazon Pay
          </span>
          <span className="navlinks__fill__link navlink__link">
            Prime
          </span>
          <span className="navlinks__fill__link navlink__link">
            {" "}
            Best Sellers
          </span>
          <span className="navlinks__fill__link navlink__link">
            Todays Deals
          </span>
          <span className="navlinks__fill__link navlink__link">
            Buy Again
          </span>
          <span className="navlinks__fill__link navlink__link">
            Customer Service
          </span>
          <span className="navlinks__fill__link navlink__link">
            {" "}
            New Releases
          </span>
        </div>
        <div className="navlinks__right navlink__image">
          {" "}
          <img
        
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hello-Charlie/launch/400x39-SWM_with-disclaimer_JPN._CB656396748_.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navlinks;