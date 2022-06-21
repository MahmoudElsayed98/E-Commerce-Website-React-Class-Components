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
            <Route index element={<Products category="" />} />
            <Route path="all" element={<Products category="" />} />
            <Route
              path="men's%20clothing"
              element={<Products category={"category/men's%20clothing"} />}
            />
            <Route
              path="woman's%20clothing"
              element={<Products category={"category/women's%20clothing"} />}
            />
            <Route
              path="jewelery"
              element={<Products category="category/jewelery" />}
            />
            <Route
              path="electronics"
              element={<Products category="category/electronics" />}
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
    );
  }
}

export default App;
