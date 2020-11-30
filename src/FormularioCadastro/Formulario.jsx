import React, { useState, useEffect, Fragment } from 'react';
import { DadosPessoais, DadosEntrega, DadosUsuario } from './index';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

export default function Formulario({ sendForm }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      sendForm(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario proximoPasso={coletaDados} />,
    <DadosPessoais proximoPasso={coletaDados} />,
    <DadosEntrega proximoPasso={coletaDados} />,
    <Typography variant="h5" align="center">Cadastro concluido com sucesso!</Typography>
  ];

  function coletaDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  };

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  };

  return (
    <Fragment>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </Fragment>
  );
}