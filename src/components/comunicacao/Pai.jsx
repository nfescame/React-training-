import React from "react";
import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho sobrenome='Escame'>{props.nome}</Filho>
      <Filho {...props}>Janeide</Filho>
      <Filho sobrenome='Escame'>Sophia</Filho>
    </div>
  );
}
