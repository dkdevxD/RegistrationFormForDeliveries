import { useState } from 'react';

export default function useErros(validacoes) {
  const estadoInicial = criaEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function liberado() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return [erros, validarCampos, liberado]
}

function criaEstadoInicial(validacoes) {
  const estadoInicial = {}

  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, message: '' }
  }

  return estadoInicial;
}