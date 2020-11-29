import React, { Component } from 'react';
import Formulario from './FormularioCadastro/Formulario';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">Formulario de cadastro</Typography>
        <Formulario sendForm={sendForm} validacoes={validacoes} />
      </Container>
    );
  }
}

function validacoes(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, message: 'O CPF precisa conter 11 dígitos!' }
  } else {
    return { valido: true, message: '' }
  }
}

function sendForm(dados) {
  console.log(dados)
}

export default App;