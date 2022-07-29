import React, { Component, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsHeader from "./components/Products/ProductsHeader";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/Products/ProductDetails";
import axios from "axios";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import AddProductNotify from "./components/Products/AddProductNotify";

export const CartProductsContext = createContext();
export const ProductQuantityContext = createContext();
export const CartProductsTotalSalaryContext = createContext();
export const IsCartProductsChangedContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      productQuantity: 1,
      deliveryCost: 50,
      cartProductsTotalSalary: 0,
      product: {},
      productsDetailsLoading: false,
      isCartProductsChanged: false,
    };
  }
  fetchApiProductDetails = (id) => {
    const { ProductQuantity } = this.state;
    if (ProductQuantity !== 1) {
      this.resetProductQuantity();
    }
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
        // if (productQuantity === 1) {
        // p.qty++;
        p.qty += productQuantity;
        p.price = p.qty * product.price;
        toast.success(<AddProductNotify product={p} />, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.calculateCartProductsTotalPrice();
        // } else {
        // p.price = p.qty * product.price;
        // this.calculateCartProductsTotalPrice();
        this.resetProductQuantity();
        // }
      }
    });
    if (alreadyAdded === false) {
      let productClone = { ...product };
      productClone.price *= productQuantity;
      cartProductsClone.push({ ...productClone, qty: productQuantity });
      this.setState({
        cartProductsTotalSalary: productClone.price,
      });
      this.calculateCartProductsTotalPrice();
      this.resetProductQuantity();
      toast.success(<AddProductNotify product={productClone} />, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    this.setState({
      cartProducts: cartProductsClone,
      isCartProductsChanged: true,
    });
  };
  resetProductQuantity = () => {
    this.setState({
      productQuantity: 1,
    });
  };
  removeProductFromCart = (product) => {
    const { cartProducts, cartProductsTotalSalary } = this.state;
    const cartProductsClone = cartProducts;
    const newCartProducts = cartProductsClone.filter(
      (p) => p.id !== product.id
    );
    const newCartProductsTotalSalary = cartProductsTotalSalary - product.price;
    this.setState({
      cartProducts: newCartProducts,
      cartProductsTotalSalary: newCartProductsTotalSalary,
    });
    //if cartProducts is empty
    if (cartProducts.length === 1) {
      this.setState({
        isCartProductsChanged: false,
      });
    }
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
      deliveryCost,
      isCartProductsChanged,
    } = this.state;
    return (
      <CartProductsContext.Provider value={cartProducts}>
        <ProductQuantityContext.Provider value={productQuantity}>
          <CartProductsTotalSalaryContext.Provider
            value={cartProductsTotalSalary}
          >
            <IsCartProductsChangedContext.Provider
              value={isCartProductsChanged}
            >
              <div className="E-Commerce Website">
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <Header removeProductFromCart={this.removeProductFromCart} />
                <Routes>
                  <Route
                    path="/E-Commerce-Website-React-Class-Components/"
                    element={<Home />}
                  />
                  <Route
                    path="/E-Commerce-Website-React-Class-Components/cart"
                    element={
                      <Cart
                        removeProductFromCart={this.removeProductFromCart}
                        deliveryCost={deliveryCost}
                      />
                    }
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
                    path="/E-Commerce-Website-React-Class-Components/about"
                    element={<About />}
                  />
                  <Route
                    path="/E-Commerce-Website-React-Class-Components/contact"
                    element={<Contact />}
                  />
                  <Route
                    path="/E-Commerce-Website-React-Class-Components/sign-in"
                    element={<SignIn />}
                  />
                  <Route
                    path="/E-Commerce-Website-React-Class-Components/register"
                    element={<Register />}
                  />
                  <Route
                    path="*"
                    element={
                      <Navigate
                        to="/E-Commerce-Website-React-Class-Components/"
                        // replace
                      />
                      // <NotFound />
                    }
                  />
                </Routes>
                <Footer />
              </div>
            </IsCartProductsChangedContext.Provider>
          </CartProductsTotalSalaryContext.Provider>
        </ProductQuantityContext.Provider>
      </CartProductsContext.Provider>
    );
  }
}

export default App;
