import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container
} from 'react-bootstrap';
import {
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineShop,
  AiOutlineShoppingCart
} from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Kangadelic</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                {' '}
                <AiOutlineShoppingCart /> Cart
              </Nav.Link>

              <Nav.Link href='/login'>
                {' '}
                <AiOutlineUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
