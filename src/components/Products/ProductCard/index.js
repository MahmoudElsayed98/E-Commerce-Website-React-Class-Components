import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="product-card rounded-top">
        <div className="image rounded-top">
          <Link
            to={`/E-Commerce-Website-React-Class-Components/products/${product.id}`}
            className="h-100 d-flex justify-content-center align-items-center"
          >
            <img
              src={product.image}
              alt={product.title + " Img"}
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="text px-2 text-center bg-light">
          <h6>
            <Link
              to={`/E-Commerce-Website-React-Class-Components/products/${product.id}`}
              className="d-flex justify-content-center align-items-center text-decoration-none"
            >
              {product.title}
            </Link>
          </h6>
          <p className="text-capitalize mb-0 d-flex flex-column justify-content-center align-items-center pb-1">
            {"$"}
            {product.price} <br />
            {product.category} <br />
            <span className="d-flex justify-content-center align-items-center gap-1">
              {product.rating.rate} <AiFillStar />
            </span>
          </p>
        </div>
        <button
          className="add-to-card-btn btn btn-primary w-100 text-uppercase"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}

export default ProductCard;
