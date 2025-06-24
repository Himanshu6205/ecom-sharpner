import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs.";
import { CartContext } from "./CartContext";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [showCart, setShowCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Header onCartClick={() => setShowCart(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>

      <Cart show={showCart} handleClose={() => setShowCart(false)} />
      <Footer />
    </>
  );
}

export default App;
