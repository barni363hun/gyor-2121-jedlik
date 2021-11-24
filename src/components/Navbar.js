import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import NewLogoImg from "../images/new_gyor_logo_big.png";
import { UpcScan } from "react-bootstrap-icons";
import { Translate } from "react-bootstrap-icons";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="p-0">
            <div className="myCenter">
              <img
                className="d-inline-block align-top brandImage"
                src={NewLogoImg}
                alt="New_Logo"
              />
              <Link to="/" className="myTitle">
                Gyõr
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className="myMenuPoint">Article</Nav.Link>
              <Nav.Link className="myMenuPoint">Map</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item>Human</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="alien">
                  Lorem, ipsum.
                </NavDropdown.Item>
                <NavDropdown.Item>Latine</NavDropdown.Item>
                <NavDropdown.Item className="h4">
                  <UpcScan /> <Translate />
                </NavDropdown.Item>
              </NavDropdown>
              <Button onClick={setLang("hu")}>hu</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
