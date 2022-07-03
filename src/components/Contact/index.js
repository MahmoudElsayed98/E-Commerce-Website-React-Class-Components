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
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
    return (
      <div className="contact py-4">
        <div className="container">
          <Form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Enter your full name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="name@example.com"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Leave Your Message Here..."
                id="message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
