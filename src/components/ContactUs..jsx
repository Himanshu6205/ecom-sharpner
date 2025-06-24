import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        "https://ecomm-21178-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      {submitted && <Alert variant="success">Submitted successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
