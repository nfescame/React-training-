/* eslint-disable import/no-anonymous-default-export */
import "./app.css";
import React from "react";
import Primeiro from "./components/Primeiro";
import ComParametros from "./components/ComParametros";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default (props) => (
  <div className='App'>
    <Card titulo='#06 - Condicional v2'>
      <CondicionalComIf numero={10} />
    </Card>

    <Card titulo='#05 - Condicional v1'>
      <Condicional numero={11} />
    </Card>

    <Card titulo='#04 - Repetição'>
      <Repeticao />
    </Card>

    <Card titulo='#03 - Componente Com Filhos'>
      <ComFilhos>
        <ul>
          <li>ana</li>
          <li>Nilton</li>
          <li>Jeneide</li>
          <li>Sophia</li>
          <li>Jose</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo='#02 - Componente com Parametros'>
      <ComParametros
        titulo='Esse é um Titulo'
        subtitulo='esse é um subtitulo'
      />
    </Card>

    <Card titulo='#01 - Primeiro Componete'>
      <Primeiro />
    </Card>
  </div>
);
