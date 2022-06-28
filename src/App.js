import React, { Component, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductsHeader from "./components/Products/ProductsHeader";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/Products/ProductDetails";
import axios from "axios";

export const CartProducts = createContext();
export const ProductQuantityContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      productQuantity: 1,
      product: {},
      productsDetailsLoading: false,
    };
  }
  fetchApiProductDetails = (id) => {
    if (this.state.productsDetailsLoading === true) {
      this.setState({
        productsDetailsLoading: false,
      });
    }
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      this.setState({
        product: res.data,
        productsDetailsLoading: true,
      });
    });
  };
  increaseProductQuantity = () => {
    this.setState({
      productQuantity: this.state.productQuantity + 1,
    });
  };
  decreaseProductQuantity = () => {
    if (this.state.productQuantity !== 1) {
      this.setState({
        productQuantity: this.state.productQuantity - 1,
      });
    }
  };
  addToCart = (product) => {
    const { cartProducts } = this.state;
    const cartProductsClone = cartProducts;
    let alreadyAdded = false;
    cartProductsClone.forEach((p) => {
      if (p.id === product.id) {
        alreadyAdded = true;
        p.qty++;
      }
    });
    if (alreadyAdded === false) {
      cartProductsClone.push({ ...product, qty: 1 });
    }
    this.setState({
      cartProducts: cartProductsClone,
    });
  };
  removeProductFromCart = (product) => {
    const { cartProducts } = this.state;
    const cartProductsClone = cartProducts;
    const newCartProducts = cartProductsClone.filter(
      (p) => p.id !== product.id
    );
    this.setState({
      cartProducts: newCartProducts,
    });
  };
  render() {
    const { product, productQuantity, productsDetailsLoading, cartProducts } =
      this.state;
    return (
      <CartProducts.Provider value={cartProducts}>
        <ProductQuantityContext.Provider value={productQuantity}>
          <div className="E-Commerce Website">
            <Header removeProductFromCart={this.removeProductFromCart} />
            <Routes>
              <Route
                path="/E-Commerce-Website-React-Class-Components/"
                element={<Home />}
              />
              <Route
                path="/E-Commerce-Website-React-Class-Components/products"
                element={<ProductsHeader />}
              >
                <Route
                  index
                  element={
                    <Products
                      category=""
                      skeletonCardsNo={20}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path="all"
                  element={
                    <Products
                      category=""
                      skeletonCardsNo={20}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path="men's%20clothing"
                  element={
                    <Products
                      category={"category/men's clothing"}
                      skeletonCardsNo={4}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path="women's%20clothing"
                  element={
                    <Products
                      category={"category/women's clothing"}
                      skeletonCardsNo={6}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path="jewelery"
                  element={
                    <Products
                      category="category/jewelery"
                      skeletonCardsNo={4}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path="electronics"
                  element={
                    <Products
                      category="category/electronics"
                      skeletonCardsNo={6}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <ProductDetails
                      cartProducts={cartProducts}
                      product={product}
                      productQuantity={productQuantity}
                      productsDetailsLoading={productsDetailsLoading}
                      fetchApiProductDetails={this.fetchApiProductDetails}
                      addToCart={this.addToCart}
                      increaseProductQuantity={this.increaseProductQuantity}
                      decreaseProductQuantity={this.decreaseProductQuantity}
                    />
                  }
                />
              </Route>
              <Route
                path="E-Commerce-Website-React-Class-Components/about"
                element={<About />}
              />
              <Route
                path="E-Commerce-Website-React-Class-Components/contact"
                element={<Contact />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ProductQuantityContext.Provider>
      </CartProducts.Provider>
    );
  }
}

export default App;
