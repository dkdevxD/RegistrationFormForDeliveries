import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import validacoesCadastro from '../context/context';
import useErros from '../hooks/useErros';

export function DadosPessoais({ proximoPasso }) {
  const [nome, setNome] = useState("Dk");
  const [sobrenome, setSobrenome] = useState("Dev");
  const [cpf, setCpf] = useState("01234567891");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos] = useErros(validacoes);

  const dadosPessoais = { nome, sobrenome, cpf, promocoes, novidades };

  function liberado() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (liberado()) {
          proximoPasso(dadosPessoais);
        }
      }}>

      <TextField
        onChange={(event) => setNome(event.target.value)}
        value={nome}
        id="nome"
        type="text"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"

      />

      <TextField
        onChange={(event) => setSobrenome(event.target.value)}
        value={sobrenome}
        id="sobrenome"
        type="text"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        onChange={(event) => { setCpf(event.target.value) }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.message}
        value={cpf}
        id="cpf"
        name="cpf"
        type="text"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          onChange={(event) => setPromocoes(event.target.checked)}
          name="promoções"
          checked={promocoes}
          color="primary"
        />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch
          onChange={(event) => setNovidades(event.target.checked)}
          name="novidades"
          checked={novidades}
          color="primary"
        />}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary">
        Cadastrar
      </Button>
    </form>
  );
}