import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  LanguageContext,
  WishlistProductsContext,
  RemoveProFromWishlistContext,
} from "../../../App";
import "./index.css";

class ProductCard extends Component {
  render() {
    const { product, addToCart, addToWishlist } = this.props;
    return (
      <WishlistProductsContext.Consumer>
        {(wishlistProducts) => (
          <LanguageContext.Consumer>
            {(lang) => (
              <RemoveProFromWishlistContext.Consumer>
                {(removeProductFromWishlist) => (
                  <div className="product-card rounded-top position-relative">
                    {wishlistProducts.length === 0
                      ? !product.isAddedToWishlist && (
                          <AiOutlineHeart
                            // key={p.id}
                            className="position-absolute"
                            role="button"
                            onClick={() => {
                              addToWishlist(product);
                            }}
                            title={`${
                              lang !== "Eng"
                                ? "إضافة المنتج إلى المفضلة"
                                : "Add Product To Wishlist"
                            }`}
                          />
                        )
                      : wishlistProducts.map((p) => {
                          return p.id === product.id ? (
                            <AiFillHeart
                              key={p.id}
                              className="position-absolute fill-heart"
                              role="button"
                              onClick={() => {
                                removeProductFromWishlist(product);
                              }}
                              title={`${
                                lang !== "Eng"
                                  ? "حذف المنتج من المفضلة"
                                  : "Remove Product From Wishlist"
                              }`}
                            />
                          ) : (
                            !product.isAddedToWishlist && (
                              <AiOutlineHeart
                                key={p.id}
                                className="position-absolute"
                                role="button"
                                onClick={() => {
                                  addToWishlist(product);
                                }}
                                title={`${
                                  lang !== "Eng"
                                    ? "إضافة المنتج إلى المفضلة"
                                    : "Add Product To Wishlist"
                                }`}
                              />
                            )
                          );
                        })}
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
                    <div className="text p-2 text-center bg-light">
                      <h6>
                        <Link
                          to={`/E-Commerce-Website-React-Class-Components/products/${product.id}`}
                          className="d-flex justify-content-center align-items-center text-decoration-none fw-bold"
                        >
                          {product.title}
                        </Link>
                      </h6>
                      <p className="text-capitalize mb-0 d-flex flex-column justify-content-center align-items-center">
                        {"$"}
                        {product.price} <br />
                      </p>
                    </div>
                    <button
                      className="add-to-card-btn btn btn-primary w-100 text-uppercase"
                      onClick={() => addToCart(product)}
                    >
                      {lang === "Eng" ? "Add To Cart" : "إضافة الى السلة"}
                    </button>
                  </div>
                )}
              </RemoveProFromWishlistContext.Consumer>
            )}
          </LanguageContext.Consumer>
        )}
      </WishlistProductsContext.Consumer>
    );
  }
}

export default ProductCard;
