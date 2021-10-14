import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const getProdutos = () => {
    return produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} -R$ {produto.preço}{" "}
        </li>
      );
    });
  };
  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProdutos()}</ul>
    </div>
  );
};
