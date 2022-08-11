import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LanguageContext, WishlistProductsContext } from "../../../App";
import "./index.css";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWishlistIconFilled: false,
    };
  }
  render() {
    const { product, addToCart, addToWishlist } = this.props;
    const { isWishlistIconFilled } = this.state;
    return (
      <WishlistProductsContext.Consumer>
        {(wishlistProducts) => (
          <LanguageContext.Consumer>
            {(lang) => (
              <div className="product-card rounded-top position-relative">
                {/* {!isWishlistIconFilled ? (
                  <AiOutlineHeart
                    className="position-absolute"
                    role="button"
                    onClick={() => {
                      addToWishlist(product);
                      this.setState({ isWishlistIconFilled: true });
                    }}
                    title={`${
                      lang !== "Eng"
                        ? "إضافة المنتج إلى المفضلة"
                        : "Add Product To Wishlist"
                    }`}
                  />
                ) : (
                  <AiFillHeart
                    className="position-absolute"
                    role="button"
                    onClick={() => {
                      addToWishlist(product);
                      this.setState({ isWishlistIconFilled: true });
                    }}
                    title={`${
                      lang !== "Eng"
                        ? "إضافة المنتج إلى المفضلة"
                        : "Add Product To Wishlist"
                    }`}
                  />
                )} */}
                {wishlistProducts.length !== 0 ? (
                  wishlistProducts.map((p) => {
                    return p.id === product.id ? (
                      <AiFillHeart
                        key={p.id}
                        className="position-absolute fill-heart"
                        role="button"
                        onClick={() => {
                          addToWishlist(product);
                          this.setState({ isWishlistIconFilled: true });
                        }}
                        title={`${
                          lang !== "Eng"
                            ? "إضافة المنتج إلى المفضلة"
                            : "Add Product To Wishlist"
                        }`}
                      />
                    ) : (
                      <AiOutlineHeart
                        key={p.id}
                        className="position-absolute"
                        role="button"
                        onClick={() => {
                          addToWishlist(product);
                          this.setState({ isWishlistIconFilled: true });
                        }}
                        title={`${
                          lang !== "Eng"
                            ? "إضافة المنتج إلى المفضلة"
                            : "Add Product To Wishlist"
                        }`}
                      />
                    );
                  })
                ) : (
                  <AiOutlineHeart
                    className="position-absolute"
                    role="button"
                    onClick={() => {
                      addToWishlist(product);
                      this.setState({ isWishlistIconFilled: true });
                    }}
                    title={`${
                      lang !== "Eng"
                        ? "إضافة المنتج إلى المفضلة"
                        : "Add Product To Wishlist"
                    }`}
                  />
                )}
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
                    {/* {product.category} <br />
            <span className="d-flex justify-content-center align-items-center gap-1">
              {product.rating.rate} <AiFillStar />
            </span> */}
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
          </LanguageContext.Consumer>
        )}
      </WishlistProductsContext.Consumer>
    );
  }
}

export default ProductCard;
