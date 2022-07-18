import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import React, { Component } from "react";
import "./index.css";
// import Loading from "./Loading";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
// import { CartProductsContext } from "../../App";
// import { RiCloseFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      error: "",
      productsLoading: false,
    };
    // this.addedToCartProductRef = createRef();
  }
  enableLoading() {
    if (this.state.productsLoading === true) {
      this.setState({
        productsLoading: false,
      });
    }
  }
  componentDidMount() {
    // console.log("componentDidMount");
    // setTimeout(() => {
    this.fetchApiData();
    // }, 3000);
    // console.log(this.addedToCartProductRef.current);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.enableLoading();
      // console.log("componentDidUpdate");
      // setTimeout(() => {
      this.fetchApiData();
      // }, 3000);
    }
    // if (this.addedToCartProductRef.current) {
    //   setTimeout(() => {
    //     this.addedToCartProductRef.current.style.setProperty(
    //       "display",
    //       "none",
    //       "important"
    //     );
    //   }, 3000);
    // }
  }
  fetchApiData() {
    axios
      .get(`https://fakestoreapi.com/products/${this.props.category}`)
      .then((res) => {
        this.setState({
          products: res.data,
          productsLoading: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }
  render() {
    const { products, productsLoading } = this.state;
    const { skeletonCardsNo, addToCart } = this.props;
    // console.log("products");
    // console.log(products);
    // console.log("loading", loading);
    return (
      <>
        <div className="products py-3">
          <div className="container">
            <div className="content d-flex w-100 flex-wrap justify-content-center justify-content-md-start">
              {productsLoading ? (
                products.map((p) => {
                  return (
                    <ProductCard product={p} key={p.id} addToCart={addToCart} />
                  );
                })
              ) : (
                // <Loading />
                <ProductCardSkeleton skeletonCardsNo={skeletonCardsNo} />
              )}
            </div>
          </div>
        </div>
        {/* <div className="cart-products-added-successfully position-fixed">
          <CartProductsContext.Consumer>
            {(cartProducts) =>
              cartProducts.map((p) => (
                <div
                  className="addedtocart-product bg-light mb-3 border px-4 py-3 rounded d-flex align-items-center position-relative"
                  ref={this.addedToCartProductRef}
                  key={p.id}
                >
                  <button
                    className="btn btn-primary p-0 position-absolute d-flex justify-content-center align-items-center rounded-circle"
                    onClick={(e) =>
                      e.currentTarget.parentElement.style.setProperty(
                        "display",
                        "none",
                        "important"
                      )
                    }
                  >
                    <RiCloseFill className="text-light" />
                  </button>
                  <div className="image rounded border p-2 me-3">
                    <img
                      src={p.image}
                      className="img-fluid"
                      alt={p.title + "Img"}
                    />
                  </div>
                  <div className="info">
                    <h6 className="fw-bold mb-1">{p.title}</h6>
                    <p className="mb-0">
                      Success: You have added <br />{" "}
                      <Link
                        to={`/E-Commerce-Website-React-Class-Components/products/${p.id}`}
                      >
                        {p.title}
                      </Link>{" "}
                      to your{" "}
                      <Link
                        to={`/E-Commerce-Website-React-Class-Components/cart`}
                      >
                        shopping cart!
                      </Link>
                    </p>
                  </div>
                </div>
              ))
            }
          </CartProductsContext.Consumer>
        </div> */}
      </>
    );
  }
}

export default Products;
