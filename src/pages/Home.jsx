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

const slides = [
  {
    title: "📌¿Qué son los lenguajes de programación?",
    body: "\nUn lenguaje de programación es como un idioma que usamos para comunicarle instrucciones a una computadora. Así como nosotros usamos el español o el inglés para hablar entre personas, los programadores usan lenguajes como Python, Java o C++ para decirle a una computadora qué hacer.",
  },
  {
    title: "🧠 Analogía:",
    body: "Imaginemos que la computadora es un robot. Para que haga cosas (como mostrar una imagen, hacer cálculos, o mover un brazo), necesitamos darle instrucciones claras en un idioma que pueda entender. Ese idioma es el lenguaje de programación.",
  },
  {
    title: "💡 ¿Qué se puede hacer con un lenguaje de programación?",
    body: "● Crear sitios web y aplicaciones (como Instagram o MercadoLibre).\n● Hacer videojuegos.\n● Automatizar tareas (como ordenar miles de archivos).\n● Programar robots o sensores.\n● Desarrollar inteligencia artificial.",
  },
];

function Home() {
  const [show, setShow] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleShow = (lang) => {
    setSelectedLang(lang);
    setShow(true);
  };

  return (
    <div className="container-fluid px-0">
      {/* Carrusel personalizado */}
      <div className="bg-light py-4 px-3 px-md-5" data-aos="fade-up">
        <div
          className="rounded shadow-sm p-4 w-100 px-2 px-md-4 px-lg-5"
          style={{ maxWidth: "100%" }}
        >
          <h5 className="fira-code fs-1 fs-md-3 fs-lg-4 mb-3 text-center">
            {slides[currentSlide].title}
          </h5>
          <p
            className="fs-4 fs-md-6 fs-lg-5"
            style={{ whiteSpace: "pre-line" }}
          >
            {slides[currentSlide].body}
          </p>
          <div className="d-flex justify-content-center gap-2 mt-2">
            <Button
              className="btn-custom-hover"
              variant="outline-dark"
              size="md"
              disabled={currentSlide === 0}
              onClick={() => setCurrentSlide((prev) => prev - 1)}
            >
              Anterior
            </Button>
            <Button
              className="btn-custom-hover"
              variant="dark"
              size="md"
              disabled={currentSlide === slides.length - 1}
              onClick={() => setCurrentSlide((prev) => prev + 1)}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 px-4">
        <div className="row">
          {/* Columna principal */}
          <div className="col-lg-9">
            <h1 className="text-center fira-code mb-5" data-aos="fade-down">
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
    </div>
  );
}

export default Home;
