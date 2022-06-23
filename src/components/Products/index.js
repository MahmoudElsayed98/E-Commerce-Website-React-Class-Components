import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import React, { Component } from "react";
import "./index.css";
// import Loading from "./Loading";
import CardSkeleton from "./CardSkeleton";
import ProductCard from "./ProductCard";
export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      error: "",
      loading: false,
    };
  }
  enableLoading() {
    if (this.state.loading === true) {
      this.setState({
        loading: false,
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
      setTimeout(() => {
        this.fetchApiData();
      }, 3000);
    }
  }
  fetchApiData() {
    axios
      .get(`https://fakestoreapi.com/products/${this.props.category}`)
      .then((res) => {
        this.setState({
          products: res.data,
          loading: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }
  render() {
    const { products, loading } = this.state;
    const { skeletonCardsNo } = this.props;
    // console.log("products");
    // console.log(products);
    // console.log("loading", loading);
    return (
      <>
        <div className="products py-4">
          <div className="container">
            <div className="content">
              {loading ? (
                products.map((e) => {
                  return (
                    <ProductCard
                      key={e.id}
                      id={e.id}
                      title={e.title}
                      image={e.image}
                      category={e.category}
                      price={e.price}
                      ratingRate={e.rating.rate}
                    />
                  );
                })
              ) : (
                // <Loading />
                <CardSkeleton skeletonCardsNo={skeletonCardsNo} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
