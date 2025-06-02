import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gifUnsta from "../assets/Gif_UNSTA.gif";
import python from "../assets/Python.png";
import js from "../assets/JavaScript.png";
import cpp from "../assets/C++.png";
import java from "../assets/java.png";
import csharp from "../assets/csharp.png";
import htmlcss from "../assets/HTML-CSS.jpeg";
import { Button, Modal } from "react-bootstrap";

const languages = [
  {
    name: "Python",
    image: python,
    info: "Lenguaje de alto nivel, usado en ciencia de datos, automatización y más.",
  },
  {
    name: "JavaScript",
    image: js,
    info: "Lenguaje esencial para desarrollo web frontend y backend (Node.js).",
  },
  {
    name: "C++",
    image: cpp,
    info: "Lenguaje poderoso para sistemas embebidos, videojuegos y rendimiento crítico.",
  },
  {
    name: "Java",
    image: java,
    info: "Popular en aplicaciones empresariales, Android y plataformas grandes.",
  },
  {
    name: "C#",
    image: csharp,
    info: "Lenguaje de Microsoft, usado en apps Windows, videojuegos (Unity) y más.",
  },
  {
    name: "HTML/CSS",
    image: htmlcss,
    info: "Base de toda página web: estructura (HTML) y estilos (CSS).",
  },
];

function Home() {
  const [show, setShow] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleShow = (lang) => {
    setSelectedLang(lang);
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Columna principal */}
        <div className="col-lg-9">
          <h1 className="text-center fira-code mb-4" data-aos="fade-down">
            Lenguajes de Programación
          </h1>
          <div className="row justify-content-center">
            {languages.map((lang, i) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mb-4"
                key={i}
                data-aos="zoom-in"
              >
                <div className="card shadow-sm h-100">
                  <img
                    src={lang.image}
                    className="card-img-top p-3"
                    alt={lang.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{lang.name}</h5>
                    <Button variant="warning" onClick={() => handleShow(lang)}>
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna del anuncio */}
        <div className="col-lg-3 d-none d-lg-block" data-aos="fade-left">
          <div className="position-sticky" style={{ top: "177px" }}>
            <img
              src={gifUnsta}
              alt="Anuncio UNSTA"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLang?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedLang?.info}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
