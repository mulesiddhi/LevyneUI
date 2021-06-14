import Bag from "../../icons/Bag";
import Heart from "../../icons/Heart";
import Link from "../../../helpers/Link";
import MenuCart from "./MenuCart";
import Profile from "../../icons/Profile";
import PropTypes from "prop-types";
import React from "react";

const MobileNavMenu = ({ deleteFromCart,cartData }) => {

  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  
  return (
    <nav className="offcanvas-navigation mb-5 pb-5" id="offcanvas-navigation">
      <ul>
        <li>
          <Link href={"/search"}>Shop</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
        <li className='pt-4'>
        <div className="same-style header-wishlist pt-3 pb-3">
        <Link href={"/wishlist"}>
          <>
            <Heart className='icon-white'/>
            <span className='pl-3 ictitle'>Wishlist</span>
            {/* <span className="count-style">
              {wishlistData && wishlistData.length ? wishlistData.length : 0}
            </span> */}
          </>
        </Link>
      </div>
        </li>
        <li >
        <div className="same-style cart-wrap pt-3 pb-3">
        {/* <button className="icon-cart" onClick={e => handleClick(e)}> */}
          <Bag className='icon-white'/>
          <span className='pl-3 ictitle'>CART</span>
          {/* <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span> */}
        {/* </button> */}
        {/* menu cart */}
        {/* <MenuCart
          cartData={cartData}
          deleteFromCart={deleteFromCart}
        /> */}

      </div>
        </li>
        <li>
        <div className="same-style account-setting pt-3 pb-3">
            <Link href={"/login"}
              className="account-setting-active"
              onClick={e => handleClick(e)}
            >
              {/* <i className="pe-7s-user-female" /> */}
              <Profile className='icon-white'/>
              <span className='pl-3 ictitle'>ACCOUNT</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default MobileNavMenu;
