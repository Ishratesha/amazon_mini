import { SearchOutlined, ShoppingBasketOutlined } from '@mui/icons-material'
import './Header.css'
import Navlinks from './Navbar/Navlinks'
const Header = () => {
  return (
    <>
    <div className="header">
      
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    

    <div className="header__search">
      <input className="header__searchInput" type="text" />
       <SearchOutlined className="header__searchIcon" /> 
    </div>

    <div className="header__nav">
      
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      

      
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      
      

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      
        <div className="header__optionBasket">
           <ShoppingBasketOutlined /> 
          <span className="header__optionLineTwo header__basketCount">
            0
          </span>
        </div>
      
    </div>
  </div>
  <Navlinks/>
    </>
  )
}

export default Header