import React from "react";
import { Navbar, Nav, Container,Form, FormControl, Button } from "react-bootstrap";

export default function Header() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">CDC IITISM Dhanbad</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#about">About </Nav.Link>
    //         <Nav.Link href="#contact">Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg="light" expand="lg">
  <Container className="navbarContainer">
      <Navbar.Brand href="#home" className="navbarBrand"><strong>CDC</strong> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#Contacts">Contacts</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
  );
}
