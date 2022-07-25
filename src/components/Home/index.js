import React, { Component } from "react";
import "./index.css";
import image from "../../assets/images/glossy-e-commerce.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home d-flex justify-content-center align-items-center d-lg-block py-2">
        <div className="container">
          <div className="row align-items-center flex-column flex-lg-row">
            <div className="position-relative col-11 col-md-8 col-lg-6 mb-1 mb-lg-0">
              <img src={image} className="img-fluid " alt="Welcome Img" />
            </div>
            <div className="col-11 col-md-8 col-lg-6 text-center text">
              <h1 className="text-uppercase mb-lg-3">
                <span>*</span> All The <span>Best</span> <br /> &nbsp; &nbsp;
                You Can Get <span>*</span>
              </h1>
              <Link
                className="btn btn-lg btn-primary mt-2 mt-lg-3 text-uppercase mx-auto d-flex justify-content-center align-items-center ok"
                to="/E-Commerce-Website-React-Class-Components/products"
              >
                Shop Now <HiOutlineArrowNarrowRight className="ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
