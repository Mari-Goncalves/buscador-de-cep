import { useState } from "react";
import "../src/app.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  async function searchCEP() {
    if (input == "") {
      alert("Preencha o campo de CEP");
    }

    try {
      const response = await api.get(`${input}/json/`);
      setData(response.data);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar.");
      setInput("");
    }
  }

  return (
    <main className="app">
      <div className="app_container">
        <h1 className="title">Busca CEP</h1>

        <div className="main_content">
          <section className="search_container">
            <input
              type="text"
              className="search_input"
              placeholder="Digite seu CEP"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="search_button" onClick={searchCEP}>
              Pesquisar
            </button>
          </section>

          <section className="address_data">
            <p><strong>CEP:</strong> {data.cep}</p>
            <p><strong>Estado:</strong> {data.estado} </p>
            <p><strong>Cidade:</strong> {data.localidade}</p>
            <p><strong>Logradouro:</strong> {data.logradouro}</p>
            <p><strong>Bairro:</strong> {data.bairro}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
