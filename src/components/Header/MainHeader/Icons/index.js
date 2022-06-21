import React, { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import "./index.css";

export class Icons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsNumber: 0,
      itemPrice: 0,
    };
  }
  render() {
    const { itemsNumber, itemPrice } = this.state;

    return (
      <>
        <div className="icons d-flex flex-column flex-lg-row align-items-center">
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <FaUserCircle className="fs-3" />
            <p>Sign In</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <RiEditCircleFill className="fs-3" />
            <p>Register</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <AiOutlineHeart className="fs-3" />
            <p>Wishlist</p>
          </div>
          <div className="sign-in d-flex flex-column justify-content-center align-items-center">
            <BiGitCompare className="fs-3" />
            <p>Compare</p>
          </div>
        </div>
        <div
          className="cart d-flex justify-content-center align-items-center"
          role="button"
        >
          <p>
            {itemsNumber} item(s) - $ {itemPrice.toFixed(2)}
          </p>
          <AiOutlineShoppingCart className="fs-1" />
        </div>
      </>
    );
  }
}

export default Icons;
