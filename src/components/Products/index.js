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
  }
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.enableLoading();
      // console.log("componentDidUpdate");
      // setTimeout(() => {
      this.fetchApiData();
      // }, 3000);
    }
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
      </>
    );
  }
}

export default Products;
