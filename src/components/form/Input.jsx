import React, { useState } from "react";

export default function Input(props) {
  const [nome, setNome] = useState("pedro");

  return (
    <>
      <h3>{nome}</h3>
      <input
        type='text'
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
    </>
  );
}
