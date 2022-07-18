import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  resetForm() {
    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div className="login">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="login-form my-5 py-4 rounded d-flex flex-column align-items-center">
            <h1 className="fw-bold mb-0 text-center text-uppercase">login</h1>
            <Form id="login-form" onSubmit={this.handleSubmit} method="POST">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
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
                  placeholder="Enter password"
                  id="password"
                  value={this.state.password}
                  className="input"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me?" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                LOGIN
              </Button>
              <Form.Text className="d-flex justify-content-end">
                <a
                  href="sign-in/forgot-password"
                  className="text-decoration-none"
                >
                  Forgot Password?
                </a>
              </Form.Text>
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
                Need an account?{" "}
                <Link to="/E-Commerce-Website-React-Class-Components/register">
                  SIGN UP
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
