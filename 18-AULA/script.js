/*
console.log("boa")

// lacos de repeticao

// for = para/ durante
// i = variavel de controle
// i < 10 = duracao do laco
// i++ = aumenta a interacao de 1 em 1
for(var i = 0; i < 3 ;i++ ){
    console.log("Eu sou 👾");
    console.log(i);
}

console.log("Fim")


// while = enquanto
var contagem = 1
while(contagem < 51){
    console.log("Oi, meu chapa 🦨");
    contagem = contagem + 5
}

console.log("finzinho ")

// array 
// var alunos = ["cirilo", "maria joaquina", "kokimoto"]
// var media = [5, 9, 10]

var lista = ['Arroz', 6, true, "outro",7.7,["sim",["nao"]]]
// mostra o array
console.log(lista);

//mostra um elemento especifico
console.log(lista[3]);

//length - retorna o numero de itens no array 
console.log(lista.length);

// lista de times
var times = ["sao paulo", "gama", "santos", "real madrid", "desportiva"]

// console.log(times[0]);
// console.log(times[1]);
// console.log(times[2]);
// console.log(times[3]);

//interage com valor fixo
for(var i = 0; i < 5; i++){
    console.log("O time atual é:", times[i]);
}

//interage com valor retornado
for(var i = 0; i < times.length ; i++){
    console.log("O time atual é:", times[i]);
}
*/
// funcoes para interagir com um array
var frutas = ["melancia", "maça", "morango","goiaba", "laranja" ]

// array original
console.log(frutas);

// para adicao de elementos
// push - adiciona no fim do arrray 
frutas.push("uva")
console.log(frutas);

//unshift - adiciona no inicio do array
frutas.unshift("maracuja")
console.log(frutas) ;

// para remocao de elementos
// pop - remove o ultimo elemento
var frutaretirada = frutas.pop()
console.log("a ultima fruta era: ", frutaretirada);

// shift - remove do inicio do array 
var exprimeirafruta = frutas.shift()
console.log("a ex primeira fruta era:", exprimeirafruta);

// descobrir se ha um valor especifico nesse array
console.log("garcom, tem pitu:", frutas.includes("pitu"));
console.log("garcom, tem maracuja?", frutas.includes("maracuja"));

// ordernar o array 
frutas.sort()
console.log(frutas);

// reverse - invertr o array
frutas.reverse()
console.log(frutas);

//convertendo o array
console.log(frutas.toString());

//junta o array, e troca o separador deles
console.log(frutas.join(" - "));

// slice - copia
// (em qual indice comeca, quantos elementos serao copiados)
// console.log(frutas.length);
var partecopiada = frutas.slice(2,3)
console.log("copia:", partecopiada);

// splice
//para removar 
var removidos = frutas.splice(1,2)
console.log("removidos:", removidos);

//para adicionar
frutas.splice(2,0,"coca-cola","melao", "caju")
console.log(frutas);

// adicionar com substituicao 
frutas.splice(1, 3, "computador", "mouse")
console.log(frutas);



 
console.log(prompt(roupas));
