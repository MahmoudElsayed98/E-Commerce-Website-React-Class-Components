import React, { Component, createContext, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
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
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import AddProductNotify from "./components/Products/AddProductNotify";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import "./App.css";

export const CartProductsContext = createContext();
export const WishlistProductsContext = createContext();
export const ProductQuantityContext = createContext();
export const CartProductsTotalSalaryContext = createContext();
export const IsCartProductsChangedContext = createContext();
export const IsWishlistProductsChangedContext = createContext();
export const DeliveryCostContext = createContext();
export const ChangeLanguageContext = createContext();
export const LanguageContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "Eng",
      wishlistProducts: [],
      cartProducts: [],
      productQuantity: 1,
      deliveryCost: 50,
      cartProductsTotalSalary: 0,
      product: {},
      productsDetailsLoading: false,
      isCartProductsChanged: false,
      ProductDetailsFetchingFailed: false,
      isWhislistProductsChanged: false,
    };
    this.websiteRef = createRef();
  }
  changeLanguage = (language) => {
    if (language === "Eng") {
      this.websiteRef.current.style.direction = "ltr";
      this.setState({ lang: "Eng" });
    } else {
      this.websiteRef.current.style.direction = "rtl";
      this.setState({ lang: "Ar" });
    }
  };
  fetchApiProductDetails = (id) => {
    const { ProductQuantity, productsDetailsLoading } = this.state;
    if (id < 20) {
      this.setState({
        ProductDetailsFetchingFailed: false,
      });
    }
    if (ProductQuantity !== 1) {
      this.resetProductQuantity();
    }
    if (productsDetailsLoading === true) {
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
    if (id > 20) {
      this.setState({
        ProductDetailsFetchingFailed: true,
      });
    }
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
  //
  addToWishlist = (product) => {
    const { wishlistProducts, lang } = this.state;
    const whislistProductsClone = wishlistProducts;
    let alreadyAdded = false;
    whislistProductsClone.forEach((p) => {
      if (p.id === product.id) {
        alreadyAdded = true;
        // Already Added
        toast.success(
          <AddProductNotify
            product={p}
            target="wishlist"
            alreadyAdded={true}
            goal={"add"}
          />,
          {
            position: `${lang === "Eng" ? "top-right" : "top-left"}`,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    });
    if (alreadyAdded === false) {
      let productClone = { ...product };
      whislistProductsClone.push({ ...productClone });
      // Added
      toast.success(
        <AddProductNotify
          product={productClone}
          target="wishlist"
          goal="add"
        />,
        {
          position: `${lang === "Eng" ? "top-right" : "top-left"}`,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    this.setState({
      wishlistProducts: whislistProductsClone,
      isWhislistProductsChanged: true,
    });
  };
  //
  addToCart = (product) => {
    const { cartProducts, productQuantity, lang } = this.state;
    const cartProductsClone = cartProducts;
    let alreadyAdded = false;
    cartProductsClone.forEach((p) => {
      if (p.id === product.id) {
        alreadyAdded = true;
        // if (productQuantity === 1) {
        // p.qty++;
        p.qty += productQuantity;
        p.price = p.qty * product.price;
        toast.success(
          <AddProductNotify product={p} target="cart" goal="add" />,
          {
            position: `${lang === "Eng" ? "top-right" : "top-left"}`,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        this.calculateCartProductsTotalPrice();
        this.resetProductQuantity();
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
      toast.success(
        <AddProductNotify product={productClone} target="cart" goal="add" />,
        {
          position: `${lang === "Eng" ? "top-right" : "top-left"}`,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
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
    const { cartProducts, cartProductsTotalSalary, lang } = this.state;
    const cartProductsClone = cartProducts;
    const newCartProducts = cartProductsClone.filter(
      (p) => p.id !== product.id
    );
    const newCartProductsTotalSalary = cartProductsTotalSalary - product.price;
    this.setState({
      cartProducts: newCartProducts,
      cartProductsTotalSalary: newCartProductsTotalSalary,
    });
    toast.success(
      <AddProductNotify product={product} target="cart" goal={"remove"} />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    //if cartProducts is empty
    if (cartProducts.length === 1) {
      this.setState({
        isCartProductsChanged: false,
      });
    }
  };
  removeProductFromWishlist = (product) => {
    const { wishlistProducts, lang } = this.state;
    const wishlistProductsClone = wishlistProducts;
    const newWishlistProducts = wishlistProductsClone.filter(
      (p) => p.id !== product.id
    );
    this.setState({
      wishlistProducts: newWishlistProducts,
    });
    toast.success(
      <AddProductNotify product={product} target="wishlist" goal={"remove"} />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    //if wishlistProducts is empty
    if (wishlistProducts.length === 1) {
      this.setState({
        isWhislistProductsChanged: false,
      });
    }
  };
  handleCheckout = () => {
    this.setState({
      cartProducts: [],
      cartProductsTotalSalary: 0,
      isCartProductsChanged: false,
      isWhislistProductsChanged: false,
    });
    // alert("Purchased Successfully");
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
      ProductDetailsFetchingFailed,
      wishlistProducts,
      isWhislistProductsChanged,
      lang,
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
              <DeliveryCostContext.Provider value={deliveryCost}>
                <WishlistProductsContext.Provider value={wishlistProducts}>
                  <IsWishlistProductsChangedContext.Provider
                    value={isWhislistProductsChanged}
                  >
                    <ChangeLanguageContext.Provider value={this.changeLanguage}>
                      <LanguageContext.Provider value={lang}>
                        <div
                          className="e-commerce-website"
                          ref={this.websiteRef}
                        >
                          <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                          />
                          <Header
                            removeProductFromCart={this.removeProductFromCart}
                          />
                          <Routes>
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/"
                              element={<Home lang={lang} />}
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/cart"
                              element={
                                <Cart
                                  removeProductFromCart={
                                    this.removeProductFromCart
                                  }
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
                                    addToWishlist={this.addToWishlist}
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
                                    addToWishlist={this.addToWishlist}
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
                                    addToWishlist={this.addToWishlist}
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
                                    addToWishlist={this.addToWishlist}
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
                                    addToWishlist={this.addToWishlist}
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
                                    productsDetailsLoading={
                                      productsDetailsLoading
                                    }
                                    fetchApiProductDetails={
                                      this.fetchApiProductDetails
                                    }
                                    addToCart={this.addToCart}
                                    increaseProductQuantity={
                                      this.increaseProductQuantity
                                    }
                                    decreaseProductQuantity={
                                      this.decreaseProductQuantity
                                    }
                                    ProductDetailsFetchingFailed={
                                      ProductDetailsFetchingFailed
                                    }
                                  />
                                }
                              />
                            </Route>
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/about"
                              element={<About lang={lang} />}
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/contact"
                              element={<Contact lang={lang} />}
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/sign-in"
                              element={<SignIn lang={lang} />}
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/register"
                              element={<Register lang={lang} />}
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/wishlist"
                              element={
                                <Wishlist
                                  removeProductFromWishlist={
                                    this.removeProductFromWishlist
                                  }
                                />
                              }
                            />
                            <Route
                              path="/E-Commerce-Website-React-Class-Components/checkout"
                              element={
                                <Checkout
                                  cartProductsTotalSalary={
                                    cartProductsTotalSalary
                                  }
                                  deliveryCost={deliveryCost}
                                  cartProducts={cartProducts}
                                  handleCheckout={this.handleCheckout}
                                />
                              }
                            />
                            <Route
                              path="*"
                              element={
                                // <Navigate
                                //   to="/E-Commerce-Website-React-Class-Components/"
                                // />
                                <NotFound />
                              }
                            />
                          </Routes>
                          <Footer lang={lang} />
                        </div>
                      </LanguageContext.Provider>
                    </ChangeLanguageContext.Provider>
                  </IsWishlistProductsChangedContext.Provider>
                </WishlistProductsContext.Provider>
              </DeliveryCostContext.Provider>
            </IsCartProductsChangedContext.Provider>
          </CartProductsTotalSalaryContext.Provider>
        </ProductQuantityContext.Provider>
      </CartProductsContext.Provider>
    );
  }
}

export default App;
