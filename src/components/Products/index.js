import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import React, { Component } from "react";
import "./index.css";
// import Loading from "./Loading";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      error: "",
      productsLoading: false,
    };
    this.mounted = true;
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
    this.fetchApiData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.enableLoading();
      // console.log("componentDidUpdate");
      this.fetchApiData();
    }
  }
  fetchApiData() {
    axios
      .get(`https://fakestoreapi.com/products/${this.props.category}`)
      .then((res) => {
        if (this.mounted) {
          this.setState({
            products: res.data,
            productsLoading: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const { products, productsLoading } = this.state;
    const { skeletonCardsNo, addToCart, addToWishlist } = this.props;
    return (
      <>
        <div className="products">
          <div className="container">
            <div className="content d-flex w-100 flex-wrap justify-content-center justify-content-md-start">
              {productsLoading ? (
                products.map((p) => {
                  return (
                    <ProductCard
                      product={p}
                      key={p.id}
                      addToCart={addToCart}
                      addToWishlist={addToWishlist}
                    />
                  );
                })
              ) : (
                // <Loading />
                <ProductCardSkeleton skeletonCardsNo={skeletonCardsNo} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
