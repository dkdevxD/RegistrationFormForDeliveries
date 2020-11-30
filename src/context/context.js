import React from 'react';

const validacoesCadastro = React.createContext({ cpf: semValidacao, password: semValidacao });

function semValidacao(dados) {
  console.log(dados);
  return { valid: true, message: "" }
}

export default validacoesCadastro;