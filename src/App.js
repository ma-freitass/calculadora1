import { useState } from "react";
import "./style.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  //evento é para pegar as ações ou mudanças, nesse caso dentro do input
  //target - alvo, o que eu quero por isso será e.target que será o valor
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

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

      {/*onChange - evento de mudança, a cada alteraçao no input ele será acionado, ele captura as mudanças*/}

      <section>
        <div class="container">
          <input
            type="number"
            onChange={capturandoPrimeiroValor}
            placeholder="Primeiro valor"
          />
          <input
            type="number"
            onChange={capturandoSegundoValor}
            placeholder="Segundo valor"
          />
          <div class="button-group">
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
