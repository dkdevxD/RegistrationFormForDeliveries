import React, { Component } from 'react';
import Formulario from './FormularioCadastro/Formulario';
import { Container, Typography } from '@material-ui/core';
import validacoesCadastro from './context/context';
import { validaCpf, validaPassword } from './validacoes/validacoes';

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">Formulario de cadastro</Typography>
        <validacoesCadastro.Provider value={{ cpf: validaCpf, password: validaPassword }}>
          <Formulario sendForm={sendForm} />
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}

function sendForm(dados) {
  console.log(dados)
}

export default App;