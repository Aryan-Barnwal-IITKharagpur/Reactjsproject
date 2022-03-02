import React from 'react'
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { FaDownload } from 'react-icons/fa';
import '../Styles/Header.css'

export default function AdminHeader() {
    const logOut = () => {
        console.log("log out");
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        // Toast
        window.location.replace("/");
      };
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Career Development Center</Navbar.Brand>
    <Navbar.Toggle className='AdminNav' aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
      <Button className='mx-3' ><FaDownload className='mx-3'></FaDownload> HR Information</Button>
      <Button className='mx-3' onClick={logOut}>Log Out</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
