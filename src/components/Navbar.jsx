import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand className="fira-code">Algorithm</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Lenguajes de Programación
            </NavLink>
            <NavLink to="/paradigmas" className="nav-link">
              Paradigmas
            </NavLink>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
