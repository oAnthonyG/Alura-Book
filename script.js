async function buscaEndereco(cep) {
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

    console.log(consultaCEPConvertida);
    
    return consultaCEPConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))