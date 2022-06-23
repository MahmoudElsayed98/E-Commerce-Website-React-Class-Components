import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import logo from "../../../assets/images/logo.png";
import Icons from "./Icons";
import { FaBars } from "react-icons/fa";
import "./index.css";

export class MainHeader extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/E-Commerce-Website-React-Class-Components/">
            <img src={logo} className="img-fluid" alt="website logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="d-flex justify-content-center align-items-center"
          >
            <FaBars className="d-block d-lg-none" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Form className="d-none d-lg-flex my-auto">
                <select
                  name="categories"
                  id="categories"
                  role="button"
                  className="px-1"
                >
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
              <Icons />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainHeader;
