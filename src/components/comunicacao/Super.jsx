import React, { useState } from "react";
import Sub from "./SubSuper";

export default function Super(props) {
  const [num, setNum] = useState(0);
  const [label, setLabel] = useState("");

  function handleClick(valor, texto) {
    setNum(valor.toFixed(0));
    setLabel(texto);
  }
  return (
    <div>
      <h4>
        Valor {label}:{num}
      </h4>
      <Sub handleClick={handleClick}></Sub>
    </div>
  );
}
