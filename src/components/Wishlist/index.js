import React, { Component } from "react";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";
import { WishlistProductsContext } from "../../App.js";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

class Wishlist extends Component {
  render() {
    const { removeProductFromWishlist } = this.props;
    return (
      <WishlistProductsContext.Consumer>
        {(wishlistProducts) => (
          <div className="cart-comp py-4 position-relative">
            <div className="container">
              <h3 className="fw-bold mb-4 d-flex align-items-center">
                <GoPrimitiveDot className="fs-6 me-1" />
                Wishlist ( {wishlistProducts.length + " Items"} )
                <GoPrimitiveDot className="fs-6 ms-1" />
              </h3>

              <div className="row justify-content-center align-items-start">
                <div className="col-md-8 col-lg-7">
                  {wishlistProducts.length === 0 ? (
                    <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                      <p className="mb-0 text-center">
                        Your wishlist is empty!
                      </p>
                      <Link
                        to="/E-Commerce-Website-React-Class-Components/products"
                        className="text-decoration-none"
                      >
                        <button className="btn btn-lg btn-primary d-block mx-auto mt-2">
                          GO SHOPPING NOW
                        </button>
                      </Link>
                    </span>
                  ) : (
                    wishlistProducts.map((e) => (
                      <div
                        key={e.id}
                        className="cart-item border rounded py-2 d-flex align-items-center mb-3"
                      >
                        <Link
                          to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div className="image p-2 rounded">
                            <img
                              src={e.image}
                              className="img-fluid"
                              alt={e.title}
                            />
                          </div>
                        </Link>
                        <Link
                          to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                          className="d-flex align-items-center title text-dark text-center"
                        >
                          {e.title}
                        </Link>
                        <div className="cart-details d-flex align-items-center justify-content-evenly">
                          <p className="text-center mb-0">x {e.qty}</p>
                          <p className="text-center mb-0">
                            ${e.price.toFixed(2)}
                          </p>
                          <button
                            className="btn btn-primary p-0 close d-flex justify-content-center align-items-center rounded-circle"
                            onClick={() => removeProductFromWishlist(e)}
                          >
                            <RiCloseFill className="fs-5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </WishlistProductsContext.Consumer>
    );
  }
}

export default Wishlist;
