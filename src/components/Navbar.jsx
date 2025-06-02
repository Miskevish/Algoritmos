import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <BsNavbar className="bg-color" variant="dark" expand="lg">
      <Container>
        {/* Logo a la izquierda */}
        <BsNavbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            height="125"
            className="d-inline-block align-top"
          />
        </BsNavbar.Brand>

        {/* Botón hamburguesa para responsive */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Enlaces alineados a la derecha */}
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-row align-items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Lenguajes de Programación
            </NavLink>

            <NavLink
              to="/paradigmas"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Paradigmas
            </NavLink>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
