import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/layout/Card';
import Primeiro from './components/Primeiro';
//import Card1 from './components/layout/Card1';

ReactDOM.render(
  <div>
    <Card titulo ="Exercicio">
      Conteudo
    </Card>
    <Card titulo ="Exercicio">
      <Primeiro/>
    </Card>
  </div>,
  document.getElementById('root')
);

