import { useState } from "react";
import "./style.scss";

export default function App() {
  // Inicializando com string vazia, pois inputs numéricos no React funcionam bem com string vazia
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [resultado, setResultado] = useState("");

  // Captura o primeiro valor digitado no input
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(e.target.value); // Mantém o valor do input como string
  };

  // Captura o segundo valor digitado no input
  const capturandoSegundoValor = (e) => {
    setSegundoValor(e.target.value); // Mantém o valor do input como string
  };

  // Função para calcular a soma
  const soma = () => {
    setResultado(Number(primeiroValor) + Number(segundoValor)); // Converte para número antes de calcular
  };

  // Função para calcular a subtração
  const subtracao = () => {
    setResultado(Number(primeiroValor) - Number(segundoValor)); // Converte para número antes de calcular
  };

  // Função para calcular a multiplicação
  const multiplicacao = () => {
    setResultado(Number(primeiroValor) * Number(segundoValor)); // Converte para número antes de calcular
  };

  // Função para calcular a divisão
  const divisao = () => {
    if (segundoValor === "" || segundoValor === "0") {
      setResultado("Não é possível dividir por zero ou valor vazio");
    } else {
      setResultado(Number(primeiroValor) / Number(segundoValor)); // Converte para número antes de calcular
    }
  };

  // Função para limpar todos os campos
  const limpar = () => {
    setPrimeiroValor(""); 
    setSegundoValor(""); 
    setResultado("");
  };

  return (
    <main>
      <h1>
        <a href="https://fontmeme.com/pt/fonte-de-stranger-things/">
          <img
            src="https://fontmeme.com/permalink/241107/68f720eebc21d1e46446f38b482f0525.png"
            alt="fonte-de-stranger-things"
            border="0"
          />
        </a>
      </h1>

      <section>
        <div className="container">
          {/* Inputs de valores, sempre mantemos string vazia ao limpar */}
          <input
            type="number"
            onChange={capturandoPrimeiroValor}
            placeholder="Primeiro valor"
            value={primeiroValor}
          />
          <input
            type="number"
            onChange={capturandoSegundoValor}
            placeholder="Segundo valor"
            value={segundoValor}
          />
          <div className="button-group">
            <button onClick={soma}>+</button>
            <button onClick={subtracao}>-</button>
            <button onClick={multiplicacao}>*</button>
            <button onClick={divisao}>/</button>
            <button onClick={limpar} className="clear">
              C
            </button>
          </div>

          <h3>{resultado}</h3>
        </div>
      </section>
    </main>
  );
}
