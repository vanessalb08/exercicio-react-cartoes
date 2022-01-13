import React from "react";
import ComFilhos from './componentes/basico/ComFilhos';
import ComParametro from './componentes/basico/ComParametro';
import Card from './componentes/layout/Card';
import Primeiro from './componentes/basico/Primeiro';
import './App.css'
import Repeticao from "./componentes/basico/Repeticao";
import Condicional from "./componentes/basico/Condicional";
import CondicionalComIf from "./componentes/basico/CondicionalComIf";
import Pai from "./componentes/comunicacao/direta/Pai";
import Super from "./componentes/comunicacao/indireta/Super";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div className="App">
    <Card titulo="#01 - Primeiro Componente" color="#9c95d0">
      <Primeiro/>
    </Card>
    <Card titulo="#02 - Componente Com Parametro" color="#eca4f4">
      <ComParametro titulo="Título" subtitulo="Subtitulo"></ComParametro>
    </Card>
    <Card titulo="#03 - Componente Com Filhos" color="#9c95d0">
    <ComFilhos>
      <ul>
        <li>Maça</li>
        <li>Banana</li>
        <li>Laranja</li>
        <li>Bergamota</li>
      </ul>
    </ComFilhos>
    </Card>
    <Card titulo="#04 - Repetição" color="#eca4f4">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#05 - Condicional v1" color="#9c95d0">
      <Condicional numero={1266}></Condicional>
    </Card>
    <Card titulo="#06 - Condicional v2" color="#eca4f4">
      <CondicionalComIf numero={27}></CondicionalComIf>
    </Card>
    <Card titulo="#07 - Comunicação Direta" color="#9c95d0">
      <Pai sobrenome="Lima"></Pai>
    </Card>
    <Card titulo="#08 - Comunicação Indireta" color="#eca4f4">
      <Super></Super>
    </Card>
  </div>
)