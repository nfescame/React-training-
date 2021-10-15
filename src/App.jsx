/* eslint-disable import/no-anonymous-default-export */
import "./app.css";
import React from "react";

//Componentes
import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/Pai";
import Super from "./components/comunicacao/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador ";
import MegaSena from "./components/megaSena/MegaSena";

export default (props) => (
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className='Cards'>
      <Card titulo='#11 - Mega Sena' color='#e75874'>
        <MegaSena qttNumeros={6}></MegaSena>
      </Card>

      <Card titulo='#10 - Contador' color='#be1558'>
        <Contador valueInitial={2}></Contador>
      </Card>

      <Card titulo='#09 - Input' color='#3b4d61'>
        <Input></Input>
      </Card>

      <Card titulo='#08 - Comunicação Indireta' color='#7a2048'>
        <Super></Super>
      </Card>

      <Card titulo='#07 - Comunicação direta' color='#d2601a'>
        <Pai sobrenome='Silva' nome='Nilton'></Pai>
      </Card>

      <Card titulo='#06 - Condicional v2' color='#FA6900'>
        <CondicionalComIf numero={10} />
      </Card>

      <Card titulo='#05 - Condicional' color='#d72631'>
        <Condicional numero={11} />
      </Card>

      <Card titulo='#04 - Repetição' color='#a2d5c6'>
        <Repeticao />
      </Card>

      <Card titulo='#03 - Componente Com Filhos' color='#077b8a'>
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

      <Card titulo='#02 - Componente com Parametros' color='#e2d810'>
        <ComParametros
          titulo='Esse é um Titulo'
          subtitulo='esse é um subtitulo'
        />
      </Card>

      <Card titulo='#01 - Primeiro Componete' color='#322e2f'>
        <Primeiro />
      </Card>
    </div>
  </div>
);
