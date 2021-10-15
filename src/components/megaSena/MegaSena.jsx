import React, { useState } from "react";

export default function MegaSena(props) {
  const [numeros, setNumeros] = useState(Array(props.qttNumeros).fill());

  const gerarNumeroNaoContido = (array) => {
    const max = 60;
    const min = 1;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;
    return array.includes(novoNumero)
      ? gerarNumeroNaoContido(array)
      : novoNumero;
  };

  const gerarNumeros = () => {
    limparNumeros();
    const novoArray = Array(props.qttNumeros)
      .fill(0)
      .reduce((acc) => [...acc, gerarNumeroNaoContido(acc)], [])
      .sort((a, b) => a - b);
    setNumeros([...numeros, novoArray]);
  };

  const limparNumeros = () => {
    setNumeros([numeros.pop()]);
  };

  return (
    <>
      <h2>Mega Sena</h2>
      <button onClick={gerarNumeros}>Gerar Numeros</button>
      <h5>{numeros.join(" ")}</h5>
    </>
  );
}
