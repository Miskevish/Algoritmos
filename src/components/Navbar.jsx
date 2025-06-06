import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <BsNavbar className="bg-color" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            height="125"
            className="d-inline-block align-top logo"
          />
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

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
<div id="textCarousel" className="carousel slide" data-bs-ride="false">
  <div className="carousel-inner text-center bg-light py-4">
    <div className="carousel-item active">
      <div className="px-3 px-md-5">
        <h5 className="fira-code fs-6 fs-md-5">1. ¿Qué son los lenguajes de programación? (5 minutos)</h5>
        <p className="mb-0">
          📌 Explicación sencilla:<br />
          Un lenguaje de programación es como un idioma que usamos para comunicarle instrucciones a una computadora. Así como nosotros usamos el español o el inglés para hablar entre personas, los programadores usan lenguajes como Python, Java o C++ para decirle a una computadora qué hacer.
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="px-3 px-md-5">
        <h5 className="fira-code fs-6 fs-md-5">🧠 Analogía:</h5>
        <p className="mb-0">
          Imaginemos que la computadora es un robot. Para que haga cosas (como mostrar una imagen, hacer cálculos, o mover un brazo), necesitamos darle instrucciones claras en un idioma que pueda entender. Ese idioma es el lenguaje de programación.
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="px-3 px-md-5">
        <h5 className="fira-code fs-6 fs-md-5">💡 ¿Qué se puede hacer con un lenguaje de programación?</h5>
        <ul className="mb-0 text-start d-inline-block">
          <li>Crear sitios web y aplicaciones (como Instagram o MercadoLibre).</li>
          <li>Hacer videojuegos.</li>
          <li>Automatizar tareas (como ordenar miles de archivos).</li>
          <li>Programar robots o sensores.</li>
          <li>Desarrollar inteligencia artificial.</li>
        </ul>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>


export default Navbar;
