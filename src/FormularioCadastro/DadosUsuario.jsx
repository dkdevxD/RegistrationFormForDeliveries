import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import validacoesCadastro from '../context/context';
import useErros from '../hooks/useErros';

export function DadosUsuario({ proximoPasso }) {
  const [email, setEmail] = useState('email@qualquer.com');
  const [password, setPassword] = useState('123456');
  
  const validacoes = useContext(validacoesCadastro);  
  const [erros, validarCampos, liberado] = useErros(validacoes);
  
  const dadosUsuario = { email, password };

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (liberado()) {
        proximoPasso(dadosUsuario);
      }
    }}>
      <TextField
        onChange={(event) => {
          const novoEmail = event.target.value;
          setEmail(novoEmail);
        }}
        value={email}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        onChange={(event) => {
          const novoPassword = event.target.value;
          setPassword(novoPassword);
        }}
        onBlur={validarCampos}
        error={!erros.password.valido}
        helperText={erros.password.message}
        id="senha"
        name="password"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="dense"
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