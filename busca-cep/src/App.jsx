import { useState } from "react";
import "../src/app.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");

  async function searchCEP() {
    if (input == "") {
      alert("Preencha o campo de CEP");
    }

    try {
      const response = await api.get(`${input}/json/`);

      console.log(response);
    } catch (error) {
      alert("Erro ao buscar.");
    }
  }

  return (
    <main className="app">
      <div className="app_container">
        <h1 className="title">Busca CEP</h1>

        <section className="search_container">
          <input
            type="text"
            className="search_input"
            placeholder="digite seu CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search_button" onClick={searchCEP}>
            Pesquisar
          </button>
        </section>

        <section className="address_data">
          <p>CEP: 32165498</p>
          <p>Estado: Rio Grande do Sul - RS</p>
          <p>Cidade: Porto Alegre</p>
          <p>Logradouro: Avenida Protasio Alves</p>
          <p>Bairro: Assis Brasil</p>
        </section>
      </div>
    </main>
  );
}

export default App;
