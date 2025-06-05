import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal, Button } from "react-bootstrap";
import brain from "../assets/brain.png";
import pin from "../assets/pin.png";
import check from "../assets/check.png";
import star from "../assets/star.png";
import imgImperativo from "../assets/imperativo.png";
import imgFuncional from "../assets/funcional.png";
import imgOO from "../assets/oop.png";
import imgLogico from "../assets/logico.png";
import imgImperativoModal from "../assets/imperativoModal.png";
import imgFuncionalModal from "../assets/funcionalModal.png";
import imgOOModal from "../assets/ooModal.png";
import imgLogicoModal from "../assets/logicoModal.png";


const paradigmas = [
  {
    nombre: " Paradigma Imperativo",
    imagen: imgImperativo,
    imagenModal: imgImperativoModal,
    descripcion: "Sigue instrucciones paso a paso.",
    descripcionLarga:
      "Idea: Le decimos a la computadora paso por paso lo que debe hacer. Ejemplo de lenguaje: C, Python (cuando se usa de forma básica). Es como una receta de cocina haces paso 1, luego paso 2, etc.",
  },
  {
    nombre: "Paradigma Funcional",
    imagen: imgFuncional,
    imagenModal: imgFuncionalModal,
    descripcion: "Usa funciones puras y evita estados.",
    descripcionLarga:
      "Idea: Se basa en funciones matemáticas puras. Evita cambiar variables o estados. Ejemplo de lenguaje: Haskell, partes de JavaScript. Es como una calculadora siempre te da el mismo resultado con los mismos números. ",
  },
  {
    nombre: "Paradigma Orientado a Objetos",
    imagen: imgOO,
    imagenModal: imgOOModal,
    descripcion: "Organiza el código en objetos y clases.",
    descripcionLarga:
      "Idea: Se organiza el código en “objetos”, que son como cosas del mundo real. Ejemplo de lenguaje: Java, Python, C++. Ideal para juegos o apps donde hay muchos elementos (usuarios, autos, enemigos, etc). ",
  },
  {
    nombre: "Paradigma Lógico",
    imagen: imgLogico,
    imagenModal: imgLogicoModal,
    descripcion: "Basado en lógica y reglas.",
    descripcionLarga:
      "Idea: En vez de dar pasos, se describe qué se quiere lograr, y el sistema lo resuelve. Ejemplo de lenguaje: Prolog.",
  },
];

function Paradigmas() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [show, setShow] = useState(false);
  const [paradigmaSeleccionado, setParadigmaSeleccionado] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="text-center fira-code">
        ¿Qué son los paradigmas de programación?
      </h2>

      <p className="mt-3 text-secondary">
        <img src={pin} alt="Pin" height="30" className="me-2" />
        <b>Definición simple:</b>
      </p>
      <p className="mt-3 text-secondary">
        Un <b>paradigma de programación</b> es como un estilo o enfoque
        diferente de escribir programas. Es{" "}
        <b>la forma de organizar las instrucciones</b> que le damos a la
        computadora.
      </p>

      <p className="mt-3 text-secondary">
        <img src={brain} alt="Cerebro" height="30" className="me-2" />
        <b>Analogía:</b>
      </p>
      <p className="mt-3 text-secondary">
        Imagina que vas a construir una casa. Podés usar distintos estilos
        arquitectónicos: moderno, clásico, minimalista. Todos construyen una
        casa, pero <b>con distintas ideas y herramientas</b>. Lo mismo pasa con
        los paradigmas en programación.
      </p>

      <h2 className="text-center fira-code">
        Ejemplos de paradigmas de programación
      </h2>

      <div className="row text-center mt-4">
        {paradigmas.map((tipo, i) => (
          <div className="col-12 col-md-3 p-2" key={i} data-aos="zoom-in">
            <div className="border rounded p-3 bg-light shadow-sm h-100 d-flex flex-column justify-content-between">
              <img
                src={tipo.imagen}
                alt={tipo.nombre}
                className="mb-2"
                style={{ height: "300px", objectFit: "contain" }}
              />

              <div className="d-flex justify-content-center mt-auto">
                <Button
                  className="btn-custom-hover"
                  size="lg"
                  onClick={() => {
                    setParadigmaSeleccionado(tipo);
                    setShow(true);
                  }}
                >
                  Ver más
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4 className="fira-code">Resumen final</h4>
        <p className="text-secondary">
          <img src={check} alt="Check" height="25" className="me-2" />
          Los lenguajes de programación son formas de darle órdenes a una
          computadora.
        </p>
        <p className="text-secondary">
          <img src={check} alt="Check" height="25" className="me-2" />
          Existen muchos lenguajes, cada uno con distintos usos y niveles de
          dificultad.
        </p>
        <p className="text-secondary">
          <img src={check} alt="Check" height="25" className="me-2" />
          Los paradigmas son estilos de organizar el código: algunos son paso a
          paso, otros con funciones, objetos o lógica.
        </p>
        <p className="text-secondary">
          <img src={check} alt="Check" height="25" className="me-2" />
          Entender esto es como aprender a usar distintas herramientas para
          resolver problemas en tecnología.
        </p>
      </div>

      <div className="mt-3">
        <h5 className="fira-code">Integrantes:</h5>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Barrionuevo, Lara
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Chalon, Milagros
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Fernández Diaz, Santiago
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Leiva, Omar
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Lopez, Santiago
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Marin, Zaira
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Miskevish, Nicolas
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Paz, Matias
        </p>
        <p className="text-secondary">
          <img src={star} alt="Star" height="30" className="me-2" />
          Soler, Ana Paula
        </p>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{paradigmaSeleccionado?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paradigmaSeleccionado?.descripcionLarga
            .split(".")
            .filter((frase) => frase.trim() !== "")
            .map((frase, i) => {
              const texto = frase.trim();
              const partes = texto.split(":");
              if (partes.length > 1) {
                return (
                  <p key={i}>
                    <b>{partes[0]}:</b> {partes.slice(1).join(":").trim()}.
                  </p>
                );
              } else {
                return <p key={i}>{texto}.</p>;
              }
            })}

          <img
            src={
              paradigmaSeleccionado?.imagenModal ||
              paradigmaSeleccionado?.imagen
            }
            alt={paradigmaSeleccionado?.nombre}
            className="img-fluid mb-3 mx-auto d-block"
            style={{ height: "300px", objectFit: "contain" }}
          />
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

export default Paradigmas;
