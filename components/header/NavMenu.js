import Link from "../../helpers/Link";
import PropTypes from "prop-types";
import React from "react";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } mt-2`}
    >
      <nav>
        <ul>
         
          <li>
            <Link href={"/search"}>Shop</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default NavMenu;
