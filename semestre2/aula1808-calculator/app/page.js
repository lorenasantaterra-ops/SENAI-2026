"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular(operacao) {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    // Validação dos campos
    if (numero1 === "") {
      setResultado("Digite o primeiro número.");
      return;
    }

    // Operações que precisam apenas de um número
    if (operacao === "raiz") {
      if (n1 < 0) {
        setResultado("Não é possível calcular a raiz de um número negativo.");
        return;
      }

      setResultado(Math.sqrt(n1));
      return;
    }

    // Para as outras operações, o segundo número é obrigatório
    if (numero2 === "") {
      setResultado("Digite o segundo número.");
      return;
    }

    // Validação da divisão por zero
    if (operacao === "dividir" && n2 === 0) {
      setResultado("Erro: não é possível dividir por zero.");
      return;
    }

    switch (operacao) {
      case "subtrair":
        setResultado(n1 - n2);
        break;

      case "multiplicar":
        setResultado(n1 * n2);
        break;

      case "dividir":
        setResultado(n1 / n2);
        break;

      case "potencia":
        setResultado(Math.pow(n1, n2));
        break;

      default:
        setResultado("Operação inválida.");
    }
  }

  function limpar() {
    setNumero1("");
    setNumero2("");
    setResultado("");
  }

  return (
    <div className={styles.page}>
      <main className={styles.calculadora}>
        <h1>Calculadora</h1>

        <div className={styles.inputs}>
          <input
            type="number"
            placeholder="Primeiro número"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Segundo número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div className={styles.botoes}>
          <button onClick={() => calcular("subtrair")}>
            Subtrair
          </button>

          <button onClick={() => calcular("multiplicar")}>
            Multiplicar
          </button>

          <button onClick={() => calcular("dividir")}>
            Dividir
          </button>

          <button onClick={() => calcular("raiz")}>
            √ Raiz Quadrada
          </button>

          <button onClick={() => calcular("potencia")}>
            Potência
          </button>

          <button onClick={limpar}>
            Limpar
          </button>
        </div>

        <div className={styles.resultado}>
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      </main>
    </div>
  );
}