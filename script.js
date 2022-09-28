async function buscaEndereco(cep) {
  try {
    const consultCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error('CEP não existente!');
    }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))