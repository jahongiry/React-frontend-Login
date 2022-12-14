import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const name = useSelector((state) => state.login.username);
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand as={Link} to='/'>
          JWT HTTP-Only Cookie Auth Demo
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <h3>{name}</h3>
          <Nav.Link as={Link} to='/login'>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to='/signup'>
            Sign up
          </Nav.Link>
          <Nav.Link as={Link} to='/notes'>
            Notes
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
