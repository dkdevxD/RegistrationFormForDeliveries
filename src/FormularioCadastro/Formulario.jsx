import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function Formulario({ sendForm, validacoes }) {
  const [nome, setNome] = useState("Dk");
  const [sobrenome, setSobrenome] = useState("Dev");
  const [cpf, setCpf] = useState("01234567891");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, message: '' } });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendForm({ nome, sobrenome, cpf, promocoes, novidades });
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
        onBlur={(event) => {
          const valido = validacoes(cpf);
          setErros({ cpf: valido })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.message}
        value={cpf}
        id="cpf"
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
          checked={promocoes} color="primary"
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