import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  resetForm() {
    this.setState({ email: "", password: "", userName: "" });
  }
  render() {
    return (
      <div className="register">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="register-form my-4 py-4 rounded d-flex flex-column align-items-center">
            <h1 className="fw-bold mb-0 text-center text-uppercase">Sign Up</h1>
            <Form id="register-form" onSubmit={this.handleSubmit} method="POST">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  id="user-name"
                  value={this.state.userName}
                  onChange={(e) => this.setState({ userName: e.target.value })}
                  placeholder="Username"
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email-sign-up"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="name@example.com"
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New password"
                  id="password-sign-up"
                  value={this.state.password}
                  className="input"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-3">
                SIGN UP
              </Button>
              <div className="or position-relative">
                <hr />
                <span className="position-absolute start-50 top-50 rounded d-flex justify-content-center align-items-center">
                  OR
                </span>
              </div>
              <div className="socials text-center">
                <IconContext.Provider value={{ size: "2.25rem" }}>
                  <a href="#facebook">
                    <IoLogoFacebook className="me-2" />
                  </a>
                  <a href="#gmail">
                    <AiFillGoogleCircle className="me-2" />
                  </a>
                  <a href="#twitter">
                    <AiFillTwitterCircle />{" "}
                  </a>
                </IconContext.Provider>
              </div>
              <div className="go-to-sign-up text-center mt-3">
                Already a user?{" "}
                <Link to="/E-Commerce-Website-React-Class-Components/sign-in">
                  LOGIN
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
