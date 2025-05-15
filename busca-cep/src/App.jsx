import { useState } from "react";
import "../src/app.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [campoVazio, setCampoVazio] = useState(false);
  const [erro, setErro] = useState(false);

  async function searchCEP() {
    if (input == "") {
      setCampoVazio(true);
      return;
    }

    try {
      const response = await api.get(`${input}/json/`);
      setData(response.data);
      setInput("");
      setCampoVazio(false);
      setErro(false);
    } catch (error) {
      setCampoVazio(false);
      setErro(true);
      setInput("");
    }
  }

  return (
    <main className="app">
      <div className="app_container">
        <h1 className="title">Busca CEP</h1>

        <div className="main_content">
          <section className="search_container">
            <div>
              <input
                type="text"
                className="search_input"
                placeholder="Digite seu CEP"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div>
                {campoVazio == true && <p className="alert">O campo está vazio! Digite seu cep.</p>}
                {erro == true && <p className="alert">Erro ao buscar. Tente novamente!</p>}
              </div>
            </div>

            <button className="search_button" onClick={searchCEP}>
              Pesquisar
            </button>
          </section>

          {Object.keys(data).length > 0 && (
            <section className="address_data">
              <p>
                <strong>CEP:</strong> {data.cep}
              </p>
              <p>
                <strong>Estado:</strong> {data.estado}
              </p>
              <p>
                <strong>Cidade:</strong> {data.localidade}
              </p>
              <p>
                <strong>Logradouro:</strong> {data.logradouro}
              </p>
              <p>
                <strong>Bairro:</strong> {data.bairro}
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
