import React, { Component } from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./index.css";

class UpperHeader extends Component {
  render() {
    return (
      <nav className="links">
        <div className="container px-3 p-1 links position-relative d-flex justify-content-md-between">
          <div className="nav-links d-flex">
            <NavLink
              to="/E-Commerce-Website-React-Class-Components/"
              className="text-decoration-none d-flex justify-content-center align-items-center me-2"
            >
              <FaHome className="me-1" />
              Home
            </NavLink>
            <NavLink
              to="/E-Commerce-Website-React-Class-Components/products"
              className="text-decoration-none d-flex justify-content-center align-items-center me-2"
            >
              <IoStorefrontSharp className="me-1" />
              Shop
            </NavLink>
            <NavLink
              to="/E-Commerce-Website-React-Class-Components/about"
              className="text-decoration-none d-flex justify-content-center align-items-center me-2"
            >
              <BsExclamationCircleFill className="me-1" />
              About Us
            </NavLink>
            <NavLink
              to="/E-Commerce-Website-React-Class-Components/contact"
              className="text-decoration-none d-flex justify-content-center align-items-center me-2"
            >
              <FaEnvelope className="me-1" />
              Contact Us
            </NavLink>
          </div>
          <div
            className="delivery d-none d-md-flex justify-content-center align-items-center"
            role="button"
          >
            <MdDeliveryDining className="me-1" />
            Delivery
          </div>
          <span
            className="position-absolute top-50 start-50 p-1 d-lg-block d-none"
            role="button"
          >
            $ US Dollar
          </span>
        </div>
      </nav>
    );
  }
}

export default UpperHeader;
