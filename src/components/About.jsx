import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>MyShop</strong>, the official merchandise store for
        independent music lovers. We are more than just a brand — we’re a
        movement built by musicians, for musicians.
      </p>

      <h4 className="mt-4"> Who We Are</h4>
      <p>
        MyShop is a passionate music company that supports rising artists by
        producing high-quality merchandise for fans who love to wear their vibe.
        From custom band tees to unique vinyl art, we bring the beat to your
        streetwear.
      </p>

      <h4 className="mt-4"> What We Sell</h4>
      <ul>
        <li>T-Shirts, Hoodies, and Jackets with band logos</li>
        <li>Signed Vinyl Albums and Posters</li>
        <li>Limited edition collectibles and accessories</li>
        <li>Exclusive pre-release music drops for fans</li>
      </ul>

      <h4 className="mt-4"> Why Choose Us</h4>
      <p>
        Every purchase you make helps support independent artists and live
        events. We use sustainable materials and collaborate directly with
        creators to ensure that your merch is not just cool — it's meaningful.
      </p>

      <h4 className="mt-4"> Get In Touch</h4>
      <p>
        Have questions or want to suggest an artist for our next launch? Reach
        out to us at <a href="mailto:support@myshop.com">support@myshop.com</a>
      </p>
    </Container>
  );
};

export default About;
