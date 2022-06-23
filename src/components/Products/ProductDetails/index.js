import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { useParams } from "react-router-dom";
function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`http://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <div className="product-details d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="left-side col-3">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="right-side col-8 offset-1">
            <h3 className="fw-bold mb-0 d-flex align-items-center">
              {product.title}
            </h3>
            <h4 className="mb-0 mt-2 d-flex align-items-center">
              {"$"}
              {product.price}
            </h4>
            <div className="add-to-cart d-flex align-items-center my-3">
              <div className="product-quantity d-flex align-items-center rounded me-2">
                <span className="w-50 text-center border-end">
                  {productQuantity}
                </span>
                <span className="up-down w-50 h-100 d-flex flex-column justify-content-center align-items-center pe-1">
                  <IoIosArrowUp role="button" className="h-100 border-bottom" />
                  <IoIosArrowDown role="button" className="h-100" />
                </span>
              </div>
              <button className="btn btn-primary">Add To Card</button>
            </div>
            <div className="desc">
              <h5 className="mb-1 fw-bold d-flex align-items-center">
                <GoPrimitiveDot className="fs-6 me-1" /> Product Details{" "}
                <GoPrimitiveDot className="fs-6 ms-1" />
              </h5>
              <p className="mb-0">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
