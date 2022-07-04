import React, { Component } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import "./index.css";
import {
  CartProductsContext,
  ProductQuantityContext,
  CartProductsTotalSalaryContext,
  IsCartProductsChangedContext,
} from "../../../../App";
import { Link } from "react-router-dom";

class Icons extends Component {
  render() {
    const { removeProductFromCart } = this.props;
    return (
      <>
        <div className="icons d-flex flex-column flex-lg-row align-items-center">
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <FaUserCircle className="fs-3" />
            <p>Sign In</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <FaUserEdit className="fs-3" />
            <p>Register</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <AiOutlineHeart className="fs-3" />
            <p>Wishlist</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <BiGitCompare className="fs-3" />
            <p>Compare</p>
          </div>
        </div>
        <div
          className="cart d-flex align-items-center justify-content-center"
          role="button"
        >
          <Link
            to="/E-Commerce-Website-React-Class-Components/cart"
            className="text-decoration-none"
          >
            <CartProductsContext.Consumer>
              {(cartProducts) => (
                <CartProductsTotalSalaryContext.Consumer>
                  {(cartProductsTotalSalary) => (
                    <span className="d-flex justify-content-center align-items-center">
                      <p className="mb-0">
                        {cartProducts.length +
                          " Item(s) - $" +
                          cartProductsTotalSalary.toFixed(2)}
                      </p>
                      <TiShoppingCart className="fs-1 position relative" />
                      <IsCartProductsChangedContext.Consumer>
                        {(isCartProductsChanged) =>
                          isCartProductsChanged && (
                            <span className="changed fw-bold position-absolute end-0 justify-content-center align-items-center rounded-circle text-light">
                              {cartProducts.length}
                            </span>
                          )
                        }
                      </IsCartProductsChangedContext.Consumer>
                    </span>
                  )}
                </CartProductsTotalSalaryContext.Consumer>
              )}
            </CartProductsContext.Consumer>
          </Link>
          <div className="cart-content rounded text-center">
            <div className="content d-flex flex-column">
              <CartProductsContext.Consumer>
                {(cartProducts) => (
                  <ProductQuantityContext.Consumer>
                    {() =>
                      cartProducts.length === 0 ? (
                        <span className="d-block p-3">
                          <p className="mb-0">Your shopping cart is empty!</p>
                        </span>
                      ) : (
                        cartProducts.map((e) => {
                          return (
                            <div
                              key={e.id}
                              className="cart-item py-2 d-flex align-items-center"
                            >
                              <Link
                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <div className="image w-50 p-2 rounded">
                                  <img
                                    src={e.image}
                                    className="img-fluid"
                                    alt={e.title}
                                  />
                                </div>
                              </Link>
                              <Link
                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                className="text-light d-flex align-items-center title"
                              >
                                {e.title}
                              </Link>
                              <div className="cart-details d-flex align-items-center justify-content-evenly">
                                <p className="text-center mb-0">x {e.qty}</p>
                                <p className="text-center mb-0">
                                  ${e.price.toFixed(2)}
                                </p>
                                <button
                                  className="btn btn-primary p-0 close rounded-circle d-flex justify-content-center align-items-center"
                                  onClick={() => removeProductFromCart(e)}
                                >
                                  <RiCloseFill className="fs-5 text-light" />
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )
                    }
                  </ProductQuantityContext.Consumer>
                )}
              </CartProductsContext.Consumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Icons;
