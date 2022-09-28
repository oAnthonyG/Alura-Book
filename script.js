async function buscaEndereco(cep) {
  const mensagemErro = document.querySelector('#erro');
  mensagemErro.innerHTML = '';
  try {
    const consultCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error('CEP não existente!');
    }
    const cidade = document.querySelector('#cidade');
    const logradouro = document.querySelector('#endereco');
    const estado = document.querySelector('#estado');
    const bairro = document.querySelector('#bairro');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;
    estado.value = consultaCEPConvertida.uf;

    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML =`<p>CEP inválido. Tente novamente!</p>`
  }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))