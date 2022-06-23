import React, { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <div className="E-Commerce Website">
        <Header />
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
              element={<Products category="" skeletonCardsNo={20} />}
            />
            <Route
              path="all"
              element={<Products category="" skeletonCardsNo={20} />}
            />
            <Route
              path="men's%20clothing"
              element={
                <Products
                  category={"category/men's clothing"}
                  skeletonCardsNo={4}
                />
              }
            />
            <Route
              path="women's%20clothing"
              element={
                <Products
                  category={"category/women's clothing"}
                  skeletonCardsNo={6}
                />
              }
            />
            <Route
              path="jewelery"
              element={
                <Products category="category/jewelery" skeletonCardsNo={4} />
              }
            />
            <Route
              path="electronics"
              element={
                <Products category="category/electronics" skeletonCardsNo={6} />
              }
            />
            <Route path=":id" element={<ProductDetails />} />
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
    );
  }
}

export default App;
