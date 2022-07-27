import React, { Component } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./Cart.css";
import {
  CartProductsContext,
  // ProductQuantityContext,
  CartProductsTotalSalaryContext,
} from "../../App.js";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

export class Cart extends Component {
  render() {
    const { removeProductFromCart, deliveryCost } = this.props;
    return (
      <div className="cart-comp py-4">
        <div className="container">
          <CartProductsContext.Consumer>
            {(cartProducts) => {
              return (
                <h3 className="fw-bold mb-4 d-flex align-items-center">
                  <GoPrimitiveDot className="fs-6 me-1" />
                  Shopping Cart ( {cartProducts.length + " Items"} )
                  <GoPrimitiveDot className="fs-6 ms-1" />
                </h3>
              );
            }}
          </CartProductsContext.Consumer>
          <div className="row justify-content-center align-items-start">
            <div className="col-md-8 col-lg-7">
              <CartProductsContext.Consumer>
                {(cartProducts) =>
                  cartProducts.length === 0 ? (
                    <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                      <p className="mb-0 text-center">
                        Your shopping cart is empty!
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
                    cartProducts.map((e) => {
                      return (
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
                              onClick={() => removeProductFromCart(e)}
                            >
                              <RiCloseFill className="fs-5" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )
                }
              </CartProductsContext.Consumer>
            </div>
            <CartProductsContext.Consumer>
              {(cartProducts) =>
                cartProducts.length !== 0 && (
                  <div className="col-md-4">
                    <h4 className="fw-bold text-uppercase">Order Summary</h4>
                    <div className="order-summary bg-light rounded border p-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">
                          <CartProductsTotalSalaryContext.Consumer>
                            {(CartProductsTotalSalary) =>
                              "$" + CartProductsTotalSalary.toFixed(2)
                            }
                          </CartProductsTotalSalaryContext.Consumer>
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-0">Delivery</p>
                        <p className="mb-0">${deliveryCost.toFixed(2)}</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Order Total</p>
                        <p>
                          <CartProductsTotalSalaryContext.Consumer>
                            {(CartProductsTotalSalary) => {
                              const orderTotal =
                                CartProductsTotalSalary + deliveryCost;
                              return "$" + orderTotal.toFixed(2);
                            }}
                          </CartProductsTotalSalaryContext.Consumer>
                        </p>
                      </div>
                      <button className="btn btn-primary d-block w-100">
                        CHECKOUT
                      </button>
                    </div>
                  </div>
                )
              }
            </CartProductsContext.Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
