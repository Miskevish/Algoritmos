import brain from "../assets/brain.png";
import pin from "../assets/pin.png";
import check from "../assets/check.png";
import star from "../assets/star.png"

function Paradigmas() {
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
        los paradigmas en programación.{" "}
      </p>
      <h2 className="text-center fira-code">
        Ejemplos de paradigmas de programación
      </h2>

      <div className="row text-center mt-4">
        {["Imperativo", "Funcional", "Orientado a Objetos", "Lógico"].map(
          (tipo, i) => (
            <div className="col-6 col-md-3 p-2" key={i}>
              <div className="border rounded p-3 bg-light shadow-sm">
                <strong>{tipo}</strong>
              </div>
            </div>
          )
        )}
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
    </div>
  );
}

export default Paradigmas;
