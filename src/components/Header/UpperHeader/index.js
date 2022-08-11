import React, { Component } from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./index.css";
import { ChangeLanguageContext, LanguageContext } from "../../../App";
import Language from "./Language";

class UpperHeader extends Component {
  render() {
    return (
      <ChangeLanguageContext.Consumer>
        {(changeLanguage) => (
          <LanguageContext.Consumer>
            {(lang) => (
              <nav className="links">
                <div className="container px-3 p-1 links position-relative d-flex justify-content-md-between">
                  <div className="nav-links d-flex">
                    <NavLink
                      to="/E-Commerce-Website-React-Class-Components/"
                      className="text-decoration-none d-flex justify-content-center align-items-center me-1"
                    >
                      <FaHome className="mx-1" />
                      {lang === "Eng" ? "Home" : "الرئيسية"}
                    </NavLink>
                    <NavLink
                      to="/E-Commerce-Website-React-Class-Components/products"
                      className="text-decoration-none d-flex justify-content-center align-items-center me-1"
                    >
                      <IoStorefrontSharp className="mx-1" />
                      {lang === "Eng" ? "Shop" : "المتجر"}
                    </NavLink>
                    <NavLink
                      to="/E-Commerce-Website-React-Class-Components/about"
                      className="text-decoration-none d-flex justify-content-center align-items-center me-1"
                    >
                      <BsExclamationCircleFill className="mx-1" />
                      {lang === "Eng" ? "About Us" : "نبذة عنا"}
                    </NavLink>
                    <NavLink
                      to="/E-Commerce-Website-React-Class-Components/contact"
                      className="text-decoration-none d-flex justify-content-center align-items-center me-1"
                    >
                      <FaEnvelope className="mx-1" />
                      {lang === "Eng" ? "Contact Us" : "تواصل معنا"}
                    </NavLink>
                  </div>
                  <div
                    className="delivery d-none d-md-flex justify-content-center align-items-center"
                    role="button"
                  >
                    <MdDeliveryDining className="mx-1" />
                    {lang === "Eng" ? "Delivery" : "الدليفري"}
                  </div>
                  <Language lang={lang} changeLanguage={changeLanguage} />
                </div>
              </nav>
            )}
          </LanguageContext.Consumer>
        )}
      </ChangeLanguageContext.Consumer>
    );
  }
}

export default UpperHeader;
