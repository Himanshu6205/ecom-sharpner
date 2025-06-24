import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    title: "Band Tee - Limited Edition",
    price: 799,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Vinyl Poster - Retro Wave",
    price: 499,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
];

const Home = () => {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Welcome to MyShop</h1>
        <p>Official Music Merchandise for Real Fans</p>
        <Button as={Link} to="/products" variant="primary">
          Shop Now
        </Button>
      </div>

      <div className="mb-5">
        <h3 className="text-center mb-4">Featured Products</h3>
        <Row className="justify-content-center">
          {featuredProducts.map((product, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ₹{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button as={Link} to="/products" variant="outline-secondary">
            View All Products
          </Button>
        </div>
      </div>

      <div className="text-center mb-5">
        <h3>About MyShop</h3>
        <p>
          We support independent artists by delivering high-quality merch to
          their biggest fans. Music is our language, and style is our voice.
          MyShop is a passionate music company that supports rising artists by
          producing high-quality merchandise for fans who love to wear their
          vibe. From custom band tees to unique vinyl art, we bring the beat to
          your streetwear.
        </p>
        <Link to="/about">Learn more →</Link>
      </div>

      {/* Customer Reviews */}
      <div className="mb-5">
        <h4 className="text-center mb-3">What Our Fans Say</h4>
        <ul>
          <li> "The shirt fits great and looks awesome!" – Aayush</li>
          <li>
            {" "}
            "Cool packaging and fast delivery. Love the vinyl art!" – Priya
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Home;
