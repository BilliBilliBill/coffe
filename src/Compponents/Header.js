import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './style.scss'

import HomePage from '../pages/home'
import ONasPage from '../pages/oNas'
import KatalogPage from '../pages/katalog'
import ContactPage from '../pages/contact'
import SkidkiPage from '../pages/Skidki'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="light"
          bg="EDEBE5"
          className="navbar-dark"
        >
          <Container>
            <Navbar.Brand href="/" className="mr-auto">
              <img
                src="/images/CoFFeeForYou.png"
                height="21"
                width="109"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto justify-content-end flex-grow-1">
                <Nav.Link href="/" className="nav-link-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/katalog" className="nav-link-white">
                  Coffe
                </Nav.Link>
                <Nav.Link href="/Skidki" className="nav-link-white">
                  History
                </Nav.Link>
                <Nav.Link href="/contact" className="nav-link-white">
                  Contacts
                </Nav.Link>
                <Nav.Link href="/Onas" className="nav-link-white">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Onas" element={<ONasPage />} />
            <Route path="/katalog" element={<KatalogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Skidki" element={<SkidkiPage />} />
          </Routes>
        </Router>
        <footer />
      </>
      
    )
  }
}
