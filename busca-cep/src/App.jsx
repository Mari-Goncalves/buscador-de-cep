import { useState } from "react";
import "../src/app.css";
import api from "./services/api";
// 36:02
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
          <p>CEP: {data.cep}</p>
          <p>Estado: {data.estado} </p>
          <p>Cidade: {data.localidade}</p>
          <p>Logradouro: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
        </section>
      </div>
    </main>
  );
}

export default App;
