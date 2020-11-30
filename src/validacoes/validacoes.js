function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, message: 'O CPF precisa ter 11 dígitos!' }
  } else {
    return { valido: true, message: '' }
  }
}

function validaPassword(password) {
  if (password.length < 4 || password.length > 12) {
    return { valido: false, message: 'A senha precisa ter entre 4 e 12 dígitos!' }
  } else {
    return { valido: true, message: '' }
  }
}

export { validaCpf, validaPassword };