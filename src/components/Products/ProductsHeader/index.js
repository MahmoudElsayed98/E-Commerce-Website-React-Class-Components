import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

class ProductsHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.productsRef = createRef();
  // }
  // componentDidMount() {
  //   Object.values(this.productsRef.current.children).forEach((e) => {
  //     e.addEventListener("click", () => {
  //       Object.values(this.productsRef.current.children).forEach((e) => {
  //         e.classList.remove("active");
  //       });
  //       e.classList.add("active");
  //     });
  //   });
  // }
  // componentDidCatch() {
  //   Object.values(this.productsRef.current.children).forEach((e) => {
  //     e.removeEventListener("click", () => {
  //       Object.values(this.productsRef.current.children).forEach((e) => {
  //         e.classList.remove("active");
  //       });
  //       e.classList.add("active");
  //     });
  //   });
  // }
  render() {
    return (
      <>
        <div className="categories-links">
          <nav
            className="container list-unstyled mb-0 d-flex flex-wrap justify-content-center text-center text-md-start fw-bold"
            // ref={this.productsRef}
          >
            <NavLink to="" className="text-light text-decoration-none" end>
              All Products
            </NavLink>

            <NavLink
              to="men's%20clothing"
              className="text-light text-decoration-none"
            >
              Men's clothing
            </NavLink>

            <NavLink
              to="women's%20clothing"
              className="text-light text-decoration-none"
            >
              Woman's clothing
            </NavLink>

            <NavLink to="jewelery" className="text-light text-decoration-none">
              Jewelery
            </NavLink>

            <NavLink
              to="electronics"
              className="text-light text-decoration-none"
            >
              Electronics
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </>
    );
  }
}

export default ProductsHeader;
