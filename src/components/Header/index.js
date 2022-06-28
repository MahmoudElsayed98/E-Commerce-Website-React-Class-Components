import React, { Component } from "react";
import MainHeader from "../Header/MainHeader";
import UpperHeader from "./UpperHeader";
class Header extends Component {
  render() {
    const { removeProductFromCart } = this.props;
    return (
      <header>
        <UpperHeader />
        <MainHeader removeProductFromCart={removeProductFromCart} />
      </header>
    );
  }
}

export default Header;
