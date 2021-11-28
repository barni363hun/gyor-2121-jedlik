import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import NewLogoImg from "../../images/new_gyor_logo_big.png";
import { UpcScan } from "react-bootstrap-icons";
import { Translate } from "react-bootstrap-icons";

export default function HuNavBar() {
  return (
    <>
      <Navbar bg="dark" className="navbar-dark" expand="md">
        <Container>
          <Navbar.Brand className="p-0">
            <div className="myCenter">
              <img
                className="d-inline-block align-top brandImage"
                src={NewLogoImg}
                alt="New_Logo"
              />
              <Link to="/hu" className="myTitle">
                Gyõr
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className="myMenuPoint">
                <Link to="/hu/article">Cikk</Link>
              </Nav.Link>
              <Nav.Link className="myMenuPoint">
                <Link to="/hu/map">Térkép</Link>
              </Nav.Link>
              <Nav.Link className="myMenuPoint">
                <Link to="/hu/time_capsule">Időkapszula</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                className="myDropDownText"
                title="Nyelv"
                id="basic-nav-dropdown bg-dark"
              >
                <NavDropdown.Item
                  onClick={() => (document.body.style.fontFamily = "PFW")}
                >
                  <Link to="/">Ember</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="alien"
                  onClick={() => (document.body.style.fontFamily = "Alien")}
                >
                  Lorem, ipsum.
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="h4"
                  onClick={() => (document.body.style.fontFamily = "PFW")}
                >
                  <UpcScan /> <Translate />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
