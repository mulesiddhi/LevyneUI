import React, { Fragment } from "react";

import Link from "../../../helpers/Link";
import PropTypes from "prop-types";

// import { getDiscountPrice } from "../../../helpers/product";
// import { useToasts } from "react-toast-notifications";

const MenuCart = ({ cartData, deleteFromCart }) => {
  return (
    <div className="shopping-cart-content">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {

              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link href={"/product/" + single.ProductID}>
                      <img
                        alt=""
                        src={single.ProductImage}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        href={"/product/" + single.ProductID}
                      >
                        {" "}
                        {single.Category}{" "}
                      </Link>
                    </h4>
                    <span>
                      {'₹' + single.MinPrice}
                    </span>
                    <div className="cart-item-variation">
                        <span>Size: {single.selectedProductSize}</span>
                    </div>
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {'₹' + cartTotalPrice}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" href={"/cart"}>
              view cart
            </Link>
            <Link
              className="default-btn"
              href={"/checkout"}
            >
              checkout
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.array,
  deleteFromCart: PropTypes.func
};

export default MenuCart;
