import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";

export class ProductCard extends Component {
  render() {
    const { id, category, price, title, ratingRate, image } = this.props;
    return (
      <div className="product-card rounded-top">
        <div className="image rounded-top">
          <Link
            to={`/E-Commerce-Website-React-Class-Components/products/${id}`}
            className="h-100 d-flex justify-content-center align-items-center"
          >
            <img src={image} alt={title + " Img"} className="img-fluid" />
          </Link>
        </div>
        <div className="text px-2 text-center bg-light">
          <h6>
            <Link
              to={`/E-Commerce-Website-React-Class-Components/products/${id}`}
              className="d-flex justify-content-center align-items-center text-decoration-none"
            >
              {title}
            </Link>
          </h6>
          <p className="text-capitalize mb-0 d-flex flex-column justify-content-center align-items-center">
            {"$"}
            {price} <br />
            {category} <br />
            <span className="d-flex justify-content-center align-items-center gap-1">
              {ratingRate} <AiFillStar />
            </span>
          </p>
        </div>
        <button className="add-to-card-btn btn btn-primary w-100 text-uppercase">
          Add To Cart
        </button>
      </div>
    );
  }
}

export default ProductCard;
