import React, { Component } from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import englishLogo from "../../../assets/images/english logo.png";
import arabicLogo from "../../../assets/images/arabic logo.png";
import "./index.css";
import { Dropdown } from "react-bootstrap";

class UpperHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "Eng",
    };
  }
  render() {
    const { lang } = this.state;
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
          <Dropdown className="position-absolute top-50 start-50 d-lg-block d-none">
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className="d-md-flex align-items-center"
            >
              <img
                src={lang === "Eng" ? englishLogo : arabicLogo}
                alt={lang === "Eng" ? "English Logo" : "Arabic Logo"}
                className="me-2"
              />
              <p className="mb-0">{lang === "Eng" ? "English" : "Arabic"}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="d-md-flex align-items-center"
                onClick={() => this.setState({ lang: "Eng" })}
              >
                <img src={englishLogo} alt="English Logo" className="me-2" />
                <p className="mb-0">English</p>
              </Dropdown.Item>
              <Dropdown.Item
                className="d-md-flex align-items-center"
                onClick={() => this.setState({ lang: "Ar" })}
              >
                <img src={arabicLogo} alt="Arabic Logo" className="me-2" />
                <p className="mb-0">Arabic</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default UpperHeader;
