import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Countries from "./Countries";
import "./index.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      address: "",
      cardNumber: "",
      expirationDate: "",
      zipCode: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      country: "",
      address: "",
      cardNumber: "",
      expirationDate: "",
      zipCode: "",
    });
  }

  render() {
    const {
      deliveryCost,
      cartProductsTotalSalary,
      cartProducts,
      handleCheckout,
    } = this.props;
    return (
      <div className="checkout py-4 position-relative">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="fw-bold pt-4 pb-md-3 mb-md-0 mb-1 text-center text-uppercase">
            Checkout
          </h1>
          <Form
            id="checkout-form"
            onSubmit={this.handleSubmit}
            method="POST"
            className="row"
          >
            <div className="col-lg-6">
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutName"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="Full Name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutEmail"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutAddress"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Address
                </Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                  placeholder="Street Address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutZipCode"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Zip Code
                </Form.Label>
                <Form.Control
                  type="Zip Code"
                  value={this.state.zipCode}
                  onChange={(e) => this.setState({ zipCode: e.target.value })}
                  placeholder="xxxxx"
                />
              </Form.Group>
            </div>

            <div className="col-lg-6">
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutCountry"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Country*
                </Form.Label>
                <select
                  id="formCheckoutCountry"
                  className="rounded"
                  name="country"
                  defaultValue="Egypt"
                  onChange={(e) => this.setState({ country: e.target.value })}
                >
                  <Countries />
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutCreditCardNumber"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Credit Card Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  value={this.state.cardNumber}
                  onChange={(e) =>
                    this.setState({ cardNumber: e.target.value })
                  }
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutExpirationDate"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  Expiration Date
                </Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.expirationDate}
                  onChange={(e) =>
                    this.setState({ expirationDate: e.target.value })
                  }
                />
              </Form.Group>
            </div>
            <Button
              variant="primary"
              type="submit"
              className=" d-block mx-auto text-center"
              onClick={() => handleCheckout()}
            >
              PURCHASE
              {cartProducts.length !== 0
                ? " $" + (cartProductsTotalSalary + deliveryCost).toFixed(2)
                : ""}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Checkout;
