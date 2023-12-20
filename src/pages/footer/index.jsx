import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss'
const Footer = () => {
  return (

          <footer className="bg-white-translucent py-1">
      <div className="overlay">  </div> {/* Semi-transparent overlay */}
      <div className="image-container">
        <img src="/images/image 1.png" alt="Background" /> {/* Replace with actual image */}
      </div>
      <Container>
        <Row>
          <Col md={4}>
                <Nav.Link href="/contact" className="nav-link-white">
                  Contacts
                </Nav.Link>
          </Col>
          <Col md={8} className="d-flex justify-content-end">
            <ul className="list-inline mb-0 align-self-center">
              <li className="list-inline-item">
              </li>
              <Nav className="ml-auto justify-content-end flex-grow-1">
                <Nav.Link href="/" className="nav-link-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/katalog" className="nav-link-white">
                  Coffee
                </Nav.Link>
                <Nav.Link href="/Skidki" className="nav-link-white">
                  History
                </Nav.Link>
                <Nav.Link href="/Onas" className="nav-link-white">
                  About
                </Nav.Link>
              </Nav>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
