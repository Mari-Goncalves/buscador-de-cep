import "../src/app.css";

function App() {
  return (
    <main className="app">
      <div className="app_container">
        <h1 className="title">Busca CEP</h1>

        <section className="search_container">
          <input
            type="text"
            name=""
            id=""
            className="search_input"
            placeholder="digite seu CEP"
          />
          <button className="search_button">Pesquisar</button>
        </section>

        <section className="address_data">
          <p>CEP: </p>
          <p>Estado: </p>
          <p>Cidade: </p>
          <p>Logradouro: </p>
          <p>Bairro: </p>
        </section>
      </div>
    </main>
  );
}

export default App;
