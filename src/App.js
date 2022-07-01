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
export const CartProductsTotalSalaryContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      productQuantity: 1,
      cartProductsTotalSalary: 0,
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
    const { cartProducts, productQuantity } = this.state;
    const cartProductsClone = cartProducts;
    let alreadyAdded = false;
    cartProductsClone.forEach((p) => {
      if (p.id === product.id) {
        alreadyAdded = true;
        p.qty++;
        console.log(p.qty);
        p.price = p.qty * product.price;
        this.calculateCartProductsTotalPrice();
      }
    });
    if (alreadyAdded === false) {
      if (productQuantity === 1) {
        cartProductsClone.push({ ...product, qty: 1 });
        this.setState({
          cartProductsTotalSalary: product.price,
        });
      } else {
        let productClone = { ...product };
        productClone.price *= productQuantity;
        cartProductsClone.push({ ...productClone, qty: productQuantity });
        this.calculateCartProductsTotalPrice();
      }
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
    const newCartProductsTotalSalary =
      this.state.cartProductsTotalSalary - product.price;
    this.setState({
      cartProducts: newCartProducts,
      cartProductsTotalSalary: newCartProductsTotalSalary,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.cartProductsTotalSalary !== this.state.cartProductsTotalSalary
    ) {
      this.calculateCartProductsTotalPrice();
    }
  }
  calculateCartProductsTotalPrice = () => {
    let { cartProducts } = this.state;
    let cartProductsClone = cartProducts;
    let totalSalary = cartProductsClone.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    this.setState({
      cartProductsTotalSalary: totalSalary,
    });
  };
  render() {
    const {
      product,
      productQuantity,
      productsDetailsLoading,
      cartProducts,
      cartProductsTotalSalary,
    } = this.state;
    return (
      <CartProducts.Provider value={cartProducts}>
        <ProductQuantityContext.Provider value={productQuantity}>
          <CartProductsTotalSalaryContext.Provider
            value={cartProductsTotalSalary}
          >
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
          </CartProductsTotalSalaryContext.Provider>
        </ProductQuantityContext.Provider>
      </CartProducts.Provider>
    );
  }
}

export default App;
