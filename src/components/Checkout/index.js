import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import CountriesAR from "./CountriesAR";
import { LanguageContext } from "../../App";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
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
      phone: "",
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
      phone: "",
    });
  }

  render() {
    const {
      deliveryCost,
      cartProductsTotalSalary,
      cartProducts,
      handleCheckout,
    } = this.props;
    const {
      name,
      email,
      country,
      address,
      cardNumber,
      expirationDate,
      zipCode,
      phone,
    } = this.state;
    return (
      <LanguageContext.Consumer>
        {(lang) => (
          <div className="checkout py-4 position-relative">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="fw-bold pt-4 pb-md-3 mb-md-0 mb-1 text-center text-uppercase">
                {lang === "Eng" ? "Checkout" : "الدفع"}
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
                      {lang === "Eng" ? "Name" : "الإسم"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      placeholder={`${
                        lang === "Eng"
                          ? "Enter Full Name"
                          : "ادخل الإسم بالكامل"
                      }`}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                    controlId="formCheckoutEmail"
                  >
                    <Form.Label className="mb-md-0 mb-1 text-center">
                      {lang === "Eng" ? "Email Address" : "البريد الإلكترونى"}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      placeholder={`${
                        lang === "Eng"
                          ? "Enter Email Address"
                          : "ادخل البريد الالكترونى  "
                      }`}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                    controlId="formCheckoutAddress"
                  >
                    <Form.Label className="mb-md-0 mb-1 text-center">
                      {lang === "Eng" ? "Address" : "العنوان"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={address}
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                      placeholder={`${
                        lang === "Eng"
                          ? "Enter Street Address"
                          : "ادخل عنوانك   "
                      }`}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                    controlId="formCheckoutZipCode"
                  >
                    <Form.Label className="mb-md-0 mb-1 text-center">
                      {lang === "Eng" ? "Zip Code" : "الرمز البريدى"}
                    </Form.Label>
                    <Form.Control
                      type="Zip Code"
                      value={zipCode}
                      onChange={(e) =>
                        this.setState({ zipCode: e.target.value })
                      }
                      placeholder="xxxxx"
                    />
                  </Form.Group>
                </div>

                <div className="col-lg-6">
                  <Form.Group
                    className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                    // controlId="formCheckoutCountry"
                  >
                    <Form.Label className="mb-md-0 mb-1 text-center">
                      {lang === "Eng" ? "Country*" : "البلد"}
                    </Form.Label>
                    {lang === "Eng" ? (
                      <CountryDropdown
                        className="rounded"
                        name="country"
                        blacklist={["IL", "CX"]}
                        value={country}
                        onChange={(val) => this.setState({ country: val })}
                      />
                    ) : (
                      <select
                        // id="formCheckoutCountry"
                        className="rounded"
                        name="country"
                        value={country}
                        onChange={(e) =>
                          this.setState({ country: e.target.value })
                        }
                      >
                        <CountriesAR />
                      </select>
                    )}
                  </Form.Group>
                  {lang === "Eng" ? (
                    <Form.Group
                      className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                      controlId="formCheckoutExpirationDate"
                    >
                      <Form.Label className="mb-md-0 mb-1 text-center">
                        {lang === "Eng" ? "Phone Number" : "رقم الهاتف "}
                      </Form.Label>
                      <PhoneInput
                        country={"eg"}
                        value={phone}
                        excludeCountries={["il", "cx"]}
                        onChange={(phone) => this.setState({ phone })}
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group
                      className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                      controlId="formCheckoutExpirationDate"
                    >
                      <Form.Label className="mb-md-0 mb-1 text-center">
                        {lang === "Eng" ? "Phone Number" : "رقم الهاتف "}
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                        placeholder="ادخل رقم الهاتف"
                      />
                    </Form.Group>
                  )}
                  <Form.Group
                    className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                    controlId="formCheckoutCreditCardNumber"
                  >
                    <Form.Label className="mb-md-0 mb-1 text-center">
                      {lang === "Eng"
                        ? "Credit Card Number"
                        : "رقم بطاقة الائتمان"}
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      value={cardNumber}
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
                      {lang === "Eng"
                        ? "Expiration Date"
                        : "تاريخ إنتهاء الصلاحية"}
                    </Form.Label>
                    <Form.Control
                      type="date"
                      value={expirationDate}
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
                  {lang === "Eng" ? "PURCHASE" : "شراء"}
                  {cartProducts.length !== 0
                    ? " $" + (cartProductsTotalSalary + deliveryCost).toFixed(2)
                    : ""}
                </Button>
              </Form>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default Checkout;
