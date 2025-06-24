import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Header = ({ onCartClick }) => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyShop
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">
              Contact Us
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={onCartClick}>
            Cart{" "}
            <Badge bg="light" text="dark">
              {totalItems}
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
