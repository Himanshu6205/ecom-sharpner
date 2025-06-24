// src/components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

// Reuse your product list here (you can later import from a separate file)
const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsArr.find((p) => p.id === productId);

  if (!product) return <p>Product not found</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <h4>₹{product.price}</h4>
          <p>
            Lorem ipsum dolor sit amet. This is a sample product description.
          </p>
          <h5>Reviews:</h5>
          <ul>
            <li>⭐️⭐️⭐️⭐️ - Great quality!</li>
            <li>⭐️⭐️⭐️ - Worth the price</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
