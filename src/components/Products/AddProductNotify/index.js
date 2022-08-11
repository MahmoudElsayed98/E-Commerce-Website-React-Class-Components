import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../App";
import "./index.css";

class AddProductNotify extends Component {
  render() {
    const { product, target, alreadyAdded } = this.props;
    return (
      <LanguageContext.Consumer>
        {(lang) => (
          <div
            className="product-added d-flex align-items-center justify-content-center"
            key={product.id}
          >
            <div className="image rounded border p-2 me-3">
              <img
                src={product.image}
                className="img-fluid"
                alt={product.title + "Img"}
              />
            </div>
            <div className="info">
              <h6 className="fw-bold mb-1">{product.title}</h6>
              <p className="mb-0">
                {lang === "Eng"
                  ? `You have ${
                      alreadyAdded ? "already" : "successfully"
                    } added `
                  : " تمت اضافة"}
                <br />{" "}
                <Link
                  to={`/E-Commerce-Website-React-Class-Components/products/${product.id}`}
                >
                  {product.title}
                  <br />
                </Link>{" "}
                {lang === "Eng" ? `to your ` : "الى "}
                <Link
                  to={`/E-Commerce-Website-React-Class-Components/${target}`}
                  className="text-capitalize"
                >
                  {target === "cart"
                    ? lang === "Eng"
                      ? "shopping cart"
                      : "عربة التسوق الخاصة بك"
                    : lang === "Eng"
                    ? "wishlist"
                    : "المفضلة"}
                </Link>
                {lang !== "Eng" ? (alreadyAdded ? " بالفعل" : " بنجاح") : ""}
              </p>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default AddProductNotify;
