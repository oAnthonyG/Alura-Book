const consultCEP = fetch('https://viacep.com.br/ws/01001000/json/')
.then(Response => Response.json()
.then(r => {
  if(r.erro){
    throw Error('Esse CEP não existe')
  }else  
  console.log(r)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento conclúido!')));

console.log(consultCEP)