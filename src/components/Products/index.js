import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import React, { Component } from "react";
import "./index.css";
// import Loading from "./Loading";
import { AiFillStar } from "react-icons/ai";
import CardSkeleton from "./CardSkeleton";
export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      error: "",
      loading: false,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
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
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      console.log("componentDidUpdate");
      axios
        .get(`https://fakestoreapi.com/products/${this.props.category}`)
        .then((res) => {
          this.setState({
            products: res.data,
            // loading: true,
          });
        })
        .catch((err) => {
          this.setState({
            error: err,
          });
        });
    }
  }
  render() {
    const { products, loading } = this.state;
    console.log("products");
    console.log(products);
    return (
      <>
        <div className="products py-4">
          <div className="container">
            <div className="content">
              {loading ? (
                products.map((e) => {
                  return (
                    <div className="product-card rounded-top" key={e.id}>
                      <div className="image d-flex justify-content-center align-items-center rounded-top">
                        <img
                          src={e.image}
                          alt={e.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="text px-2 text-center bg-light">
                        <h6 className="d-flex justify-content-center align-items-center">
                          {e.title}
                        </h6>
                        <p className="text-capitalize mb-0 d-flex flex-column justify-content-center align-items-center">
                          {"$"}
                          {e.price} <br />
                          {e.category} <br />
                          <span className="d-flex justify-content-center align-items-center gap-1">
                            {e.rating.rate} <AiFillStar />
                          </span>
                        </p>
                      </div>
                      <button className="add-to-card-btn btn btn-primary w-100 text-uppercase">
                        Add To Cart
                      </button>
                    </div>
                  );
                })
              ) : (
                // <Loading />
                <CardSkeleton />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
