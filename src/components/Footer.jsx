import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-color text-white text-center p-3 mt-5">
      <NavLink to="/" className="ms-md-3 mt-3 mt-md-0">
        <img src={logo} alt="Logo" height="100" className="footer-logo" />
      </NavLink>
      <p className="mb-0 fira-code">
        Materia: Algoritmos y Paradigmas - Profesora: Rivas, Viviana
      </p>
    </footer>
  );
}

export default Footer;
