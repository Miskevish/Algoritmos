function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center fira-code">Lenguajes de Programación</h1>
      <div className="row text-center mt-4">
        {["Python", "JavaScript", "C++", "Java", "C#", "HTML/CSS"].map(
          (lang, i) => (
            <div className="col-6 col-md-4 p-2" key={i}>
              <div className="border rounded p-3 bg-light shadow-sm">
                <strong>{lang}</strong>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
