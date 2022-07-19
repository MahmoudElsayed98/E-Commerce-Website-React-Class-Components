import React, { Component } from "react";
// import axios from "axios";
import "./index.css";
import { Form, Button } from "react-bootstrap";

class App extends Component {
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
    return (
      <div className="contact">
        <div className="container d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="fw-bold pb-md-4 mb-0 text-center text-uppercase">
            Contact Us
          </h1>
          <Form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <Form.Group className="mb-3 d-md-flex align-items-center justify-content-between">
              <Form.Label className="mb-0 text-center">Full Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Enter your full name"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-md-flex align-items-center justify-content-between">
              <Form.Label className="mb-0 text-center">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-md-flex justify-content-end align-items-center">
              <Form.Label className="mb-0 text-center ">Subject</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Leave Your Message Here..."
                id="message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className=" d-block ms-md-auto"
            >
              Send Your Message
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
