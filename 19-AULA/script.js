console.log("Oi");

// funcoes
// so executa
function teste() {
    console.log("estou funcionando");    
}

//executando a funcao
teste()

// com retorno
function soma(){
    return 3 + 4 
}
console.log(soma());

//mostra apenas o texto da funcao, nao executa
console.log(soma);

// com parametros 
function teste2(parametro){
    console.log("O parametro enviado foi:", parametro);    
}

//executado
teste2("Arroz")

var nome = "samara"
teste2(nome)

// faz acoes e retorna resultados 
function media(n1,n2){
    let resultado = (n1 + n2) / 2
    return resultado
}

// guarda resultado em variavel, para depois utilizar 
var final = media(9,7)
console.log("Resultado da media:" ,final);

// funcao anonima 

var mensagem = function (){
    console.log("Oii ");    
}

// mostra o texto da funcao
console.log(mensagem);

// apenas o texto da funcao 
mensagem

//executa a funcao, coloco os ()
mensagem() 

// arrow function - funcao de seta
// forma mais comum de escrever funcao no javascript
const multiplicar = (x,y) => {
    let result,primeiro = x, segundo =y
    result = primeiro * segundo
    return result
}

console.log("O resultado da multiplicacao é:", multiplicar(7,4));

// mais menor ainda 
// quando so tem uma linha de retorno, o retorn pode ser omitido tambem
const dobro = numero => numero * 2

console.log("o dobro é:", dobro(42));

// faça um pedido de um numero ao usuario, e utilize o valor informado para passar a uma funcao de seta,e retornar a divisao por dois daquele valor. e mostre no console o resultado

