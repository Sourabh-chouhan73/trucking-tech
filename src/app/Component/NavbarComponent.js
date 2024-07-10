'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


const NavbarComponent = () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <Navbar expanded={expanded}   expand="lg"  className='navbar'>
      <Container>
          <Link href="/">
              <Navbar.Brand className='navbar-brand'>Trucking Techs</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                  <Link href="/dispatch-software-demo" className='nav-link text-center' onClick={() => setExpanded(false)} ><i class="fa fa-laptop"></i> Dispatch Software Demo</Link>
                  <Link href="/hire-trained-logistic-team-from-us" className='nav-link text-center' onClick={() => setExpanded(false)}><i class="fa fa-group"></i> Hire Trained Logistic Team From Us</Link>

                  <Link href="/about-us" className='nav-link text-center' onClick={() => setExpanded(false)} ><i class="fa fa-info-circle"></i> About Us</Link>
                  <Link href="/contact-us" className='nav-link text-center' onClick={() => setExpanded(false)} ><i class='fa fa-phone-square'></i> Contact Us</Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    );
};

export default NavbarComponent;
