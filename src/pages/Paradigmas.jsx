function Paradigmas() {
  return (
    <div className="container mt-5">
      <h2 className="text-center fira-code">
        ¿Qué son los paradigmas de programación?
      </h2>
      <p className="mt-3 text-secondary">
        Un paradigma es un enfoque o estilo de programación que guía cómo se
        estructura y escribe el código.
      </p>
      <div className="row text-center mt-4">
        {["Orientado a Objetos", "Imperativo", "Funcional", "Lógico"].map(
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
          Cada paradigma tiene sus ventajas y se adapta a diferentes tipos de
          problemas.
        </p>
      </div>
      <div className="mt-3">
        <h5 className="fira-code">Integrantes:</h5>
        <p>
          Ana, Milagros, Matías, Nicolás, Omar, Santiago F., Santiago L., Zaira
        </p>
      </div>
    </div>
  );
}

export default Paradigmas;
