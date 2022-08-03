import React, { Component, createRef } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/images/e-commerce website logo.png";
import Icons from "./Icons";
import { FaBars } from "react-icons/fa";
import "./index.css";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.barsRef = createRef();
  }
  // hideNavbarNav = () => {
  //   this.barsRef.current.click();
  // };
  render() {
    const { removeProductFromCart } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/E-Commerce-Website-React-Class-Components/">
            <img src={logo} className="img-fluid" alt="website logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            ref={this.barsRef}
            // onClick={(e) =>
            //   e.currentTarget.nextElementSibling.classList.contains("show")
            //     ? (e.currentTarget.nextElementSibling.firstElementChild.style.left =
            //         "0")
            //     : (e.currentTarget.nextElementSibling.firstElementChild.style.left =
            //         "120%")
            // }
          >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Form className="d-none d-lg-flex my-auto ms-3">
                <select name="categories" role="button" className="px-1">
                  <option value="all">All Products</option>
                  <option value="men's clothing">Mens</option>
                  <option value="woman's clothing">Womans</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
                <FormControl
                  type="search"
                  placeholder="Search here..."
                  className="search-input"
                  aria-label="Search"
                />
                <Button variant="outline-dark search d-flex justify-content-center align-items-center">
                  <FaSearch />
                </Button>
              </Form>
              <Icons
                removeProductFromCart={removeProductFromCart}
                hideNavbarNav={this.hideNavbarNav}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainHeader;
