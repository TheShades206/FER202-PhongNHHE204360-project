import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import logofashion from '../assets/logofashion.png';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartCount((prev) => prev + 1);
    };
    window.addEventListener('cart-update', handleCartUpdate);
    return () => window.removeEventListener('cart-update', handleCartUpdate);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logofashion}
            alt="Shop Fashion Logo"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <BsCart size={22} className="me-2" />
              <span>Cart</span>
              <Badge pill bg="danger" className="ms-1">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
