import React, { Component } from "react";
import MainHeader from "../Header/MainHeader";
import UpperHeader from "./UpperHeader";
export class Header extends Component {
  render() {
    return (
      <header>
        <UpperHeader />
        <MainHeader />
      </header>
    );
  }
}

export default Header;
