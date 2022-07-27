import React, { Component } from "react";
import "./index.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import Loading from "../Loading";
class ProductDetails extends Component {
  componentDidMount() {
    const id = window.location.href.split("/")[5];
    // console.log(id);
    // setTimeout(
    this.props.fetchApiProductDetails(id);
    // , 2000, id);
  }
  render() {
    const {
      product,
      productQuantity,
      productsDetailsLoading,
      addToCart,
      increaseProductQuantity,
      decreaseProductQuantity,
    } = this.props;
    return (
      <div className="product-details py-4 py-lg-0">
        <div className="container">
          <div className="row justify-content-center align-items-center py-lg-4">
            {productsDetailsLoading ? (
              <>
                <div className="left-side col-6 col-md-5 col-lg-4 me-lg-4">
                  <div className="image text-center">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
                <div className="right-side col-12 col-md-9 col-lg-7 text-center text-md-start ">
                  <h3 className="mb-2 mt-4 mt-lg-0 fw-bold d-flex justify-content-center justify-content-lg-start align-items-center text-center text-lg-start">
                    {product.title}
                  </h3>
                  <h4 className="mb-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                    {"$"}
                    {product.price}
                  </h4>
                  <div className="add-to-cart d-flex justify-content-center justify-content-lg-start align-items-center my-2">
                    <div className="product-quantity d-flex align-items-center rounded me-2">
                      <span className="d-flex justify-content-center align-items-center w-50 h-100 border-end">
                        {productQuantity}
                      </span>
                      <span className="up-down w-50 h-100 d-flex flex-column justify-content-center align-items-center pe-1">
                        <IoIosArrowUp
                          role="button"
                          onClick={increaseProductQuantity}
                          className="h-100 border-bottom"
                        />
                        <IoIosArrowDown
                          role="button"
                          className="h-100"
                          onClick={decreaseProductQuantity}
                        />
                      </span>
                    </div>
                    <button
                      className="btn btn-primary text-uppercase"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="desc mb-0">
                    <h5 className="mb-0 fw-bold d-flex justify-content-center justify-content-lg-start align-items-center">
                      <GoPrimitiveDot className="fs-6 me-1" /> Product Details{" "}
                      <GoPrimitiveDot className="fs-6 ms-1" />
                    </h5>
                    <p className="mb-0 text-center text-lg-start">
                      {product.description}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
