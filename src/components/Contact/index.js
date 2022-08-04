import React, { Component } from "react";
// import axios from "axios";
import "./index.css";
import { Form, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3002/send",
    //   data: this.state,
    // }).then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     this.resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //   }
    // });
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="contact py-4">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="fw-bold pt-4 pb-md-3 mb-0 text-center text-uppercase">
            {lang === "Eng" ? "Contact Us" : "التواصل معنا"}
          </h1>
          <Form onSubmit={this.handleSubmit} method="POST">
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-between"
              controlId="formControlName"
            >
              <Form.Label className="mb-0 text-center">
                {" "}
                {lang === "Eng" ? "Full Name" : "الاسم بالكامل"}
              </Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder={`${
                  lang === "Eng" ? "Enter Full Name" : "ادخل الاسم بالكامل"
                }`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-between"
              controlId="formControlEmail"
            >
              <Form.Label className="mb-0 text-center">
                {lang === "Eng" ? "Email Address" : "البريد الالكترونى"}
              </Form.Label>
              <Form.Control
                type="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder={`${
                  lang === "Eng"
                    ? "Enter Email Address"
                    : "ادخل البريد الالكترونى"
                }`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-md-flex justify-content-end align-items-center"
              controlId="formControlMessage"
            >
              <Form.Label className="mb-0 text-center ">
                {" "}
                {lang === "Eng" ? "Subject" : "الموضوع"}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={`${
                  lang === "Eng" ? "Leave Your Message Here" : "اترك رسالتك هنا"
                }...`}
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className=" d-block ms-md-auto"
            >
              {lang === "Eng" ? "Send Your Message" : "ارسل رسالتك"}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
