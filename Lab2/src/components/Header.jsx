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
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logofashion}
            alt="Shop Fashion Logo"
            height="40"
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto fs-5">
            <Nav.Link href="#home" className="px-3 text-light-hover">Home</Nav.Link>
            <Nav.Link href="#products" className="px-3 text-light-hover">Products</Nav.Link>
            <Nav.Link href="#men" className="px-3 text-light-hover">Men</Nav.Link>
            <Nav.Link href="#women" className="px-3 text-light-hover">Women</Nav.Link>
            <Nav.Link href="#contact" className="px-3 text-light-hover">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link 
              href="#cart" 
              className="d-flex align-items-center text-white hover-zoom"
            >
              <BsCart size={22} className="me-2" />
              <span className="me-1">Cart</span>
              <Badge pill bg="danger" className="ms-1" style={{ fontSize: '0.85rem' }}>
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .text-light-hover {
          transition: color 0.25s ease, transform 0.2s ease;
        }
        .text-light-hover:hover {
          color: #ffc107 !important;
          transform: translateY(-1px);
        }
        .hover-zoom {
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.1);
          color: #ffc107 !important;
        }
        .tracking-wider {
          letter-spacing: 1.5px;
        }
      `}</style>
    </Navbar>
  );
};

export default Header;