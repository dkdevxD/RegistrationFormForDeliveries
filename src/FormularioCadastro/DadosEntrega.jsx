import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export function DadosEntrega({ proximoPasso }) {
  const [cep, setCep] = useState('12345000');
  const [endereco, setEndereco] = useState('localhost');
  const [numero, setNumero] = useState('3000');
  const [estado, setEstado] = useState('Santa Catarina');
  const [cidade, setCidade] = useState('Itapiranga');

  const dadosEntrega = { cep, endereco, numero, estado, cidade };

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      proximoPasso(dadosEntrega);
    }}>
      <TextField
        onChange={(event) => setCep(event.target.value)}
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        onChange={(event) => setEndereco(event.target.value)}
        value={endereco}
        id="endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        onChange={(event) => setNumero(event.target.value)}
        value={numero}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="dense"
      />

      <TextField
        onChange={(event) => setEstado(event.target.value)}
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="dense"
      />

      <TextField
        onChange={(event) => setCidade(event.target.value)}
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="dense"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth>
        Finalizar Cadastro
      </Button>

    </form>
  );
}