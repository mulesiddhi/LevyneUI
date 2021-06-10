import Link from "../../../helpers/Link";
import PropTypes from "prop-types";
import React from "react";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation mb-5 pb-5" id="offcanvas-navigation">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/search"}>Shop</Link>
        </li>
        <li>
          <Link href={"/checkout"}>Checkout</Link>
        </li>
        <li>
          <Link href={"/my-account"}>My Account</Link>
        </li>
        <li>
          <Link href={"/my-orders"}>My Orders</Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>

        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default MobileNavMenu;
