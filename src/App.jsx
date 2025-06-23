import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

const productsArr = [
  /* same as before */
];

function Home() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ₹{product.price}</Card.Text>
                <Button variant="primary" disabled>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header onCartClick={() => setShowCart(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Cart show={showCart} handleClose={() => setShowCart(false)} />
      <Footer />
    </div>
  );
}

export default App;
