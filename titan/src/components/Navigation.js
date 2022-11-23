import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://user-images.githubusercontent.com/110724575/203436958-6b2292fb-89cd-4736-9c69-bc8e5c936922.png"
            width="90"
            height="90"
            className="d-inline-block align-center"
            alt="TITAN logo"
          />{" "}
          <img
            src="https://user-images.githubusercontent.com/110724575/203625397-fa877591-e85e-41ec-9b5b-814870d8a982.png"
            width="140"
            height="70"
            className="d-inline-block align-center"
            alt="TITAN"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Member Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add Member</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Edit Member
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Delete Member
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Certification Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Add Certification
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Edit Certification
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Delete Certification
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Member"
              className="me-2"
              aria-label="Search Member"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
