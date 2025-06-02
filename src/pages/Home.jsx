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
    info: "Muy usado en ciencia de datos, inteligencia artificial, automatización.",
  },
  {
    name: "JavaScript",
    image: js,
    info: "Para páginas web interactivas (menús, animaciones).",
  },
  {
    name: "C++",
    image: cpp,
    info: "Videojuegos, sistemas operativos, apps que necesitan velocidad.",
  },
  {
    name: "Java",
    image: java,
    info: "Aplicaciones móviles, bancos, sistemas grandes.",
  },
  {
    name: "C#",
    image: csharp,
    info: "Usado para desarrollo de videojuegos (con Unity), apps de escritorio y web (con .NET).",
  },
  {
    name: "HTML/CSS",
    image: htmlcss,
    info: "(No son lenguajes de programación puros) pero sirven para crear la estructura y diseño de páginas web.",
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
    <div className="container-fluid mt-5 px-4">
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
                    <Button
                      className="btn-custom-hover"
                      onClick={() => handleShow(lang)}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna del anuncio a la derecha */}
        <div
          className="col-lg-3 d-none d-lg-flex align-items-center justify-content-end"
          data-aos="fade-left"
        >
          <div style={{ width: "100%" }}>
            <img
              src={gifUnsta}
              alt="Anuncio UNSTA"
              className="img-fluid rounded shadow-sm w-100"
              style={{ objectFit: "contain" }}
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
          <Button className="btn-custom-hover" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
