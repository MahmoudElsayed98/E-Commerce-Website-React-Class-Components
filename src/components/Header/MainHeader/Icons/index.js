import React, { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleFill, RiCloseFill } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import "./index.css";
import { CartProducts, ProductQuantityContext } from "../../../../App";
import { Link } from "react-router-dom";

class Icons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsNumber: 0,
      itemPrice: 0,
    };
  }
  render() {
    const { itemsNumber, itemPrice } = this.state;
    const { removeProductFromCart } = this.props;
    return (
      <>
        <div className="icons d-flex flex-column flex-lg-row align-items-center">
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <FaUserCircle className="fs-3" />
            <p>Sign In</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <RiEditCircleFill className="fs-3" />
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
          onClick={this.openShoppingCart}
        >
          <span className="d-flex justify-content-center align-items-center">
            <p>
              {itemsNumber} item(s) - $ {itemPrice.toFixed(2)}
            </p>
            <AiOutlineShoppingCart className="fs-1" />
          </span>
          <div className="cart-content rounded text-center">
            <div className="content p-3 d-flex flex-column">
              <CartProducts.Consumer>
                {(cartProducts) => (
                  <ProductQuantityContext.Consumer>
                    {() =>
                      cartProducts.length === 0 ? (
                        <span className="d-block">
                          <p className="mb-0">Your shopping cart is empty!</p>
                        </span>
                      ) : (
                        cartProducts.map((e) => {
                          return (
                            <div
                              key={e.id}
                              className="cart-product py-2 d-flex align-items-center"
                            >
                              <Link
                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                className="w-25 d-flex align-items-center justify-content-center"
                              >
                                <img
                                  src={e.image}
                                  className="img-fluid w-50"
                                  alt={e.title}
                                />
                              </Link>
                              <Link
                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                className="w-25 text-light d-flex align-items-center"
                              >
                                {e.title}
                              </Link>
                              <div className="d-flex align-items-center justify-content-between w-50">
                                <p className="w-25 text-center mb-0">
                                  x {e.qty}
                                </p>
                                <p className="w-25 text-center mb-0">
                                  ${e.price}
                                </p>
                                <RiCloseFill
                                  className="text-light w-25"
                                  onClick={() => removeProductFromCart(e)}
                                />
                              </div>
                            </div>
                          );
                        })
                      )
                    }
                  </ProductQuantityContext.Consumer>
                )}
              </CartProducts.Consumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Icons;
