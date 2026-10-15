console.log("shazam");

var musicas = ["Pera ai", "Se...", "Secredos"]
var cantores = ["cirilo", "Djavan", "Frejat"]
for(var i=0; i < musicas.length; i++){
    console.log(musicas[i] ,"-", cantores[i]);    
}

// objeto
var filme1 = {
    // "chave" : "valor"
    titulo: "rei leão",
    genero: "animação",
    anoLan: 1996
}
console.log(filme1);

//acessando uma chave especifica com o nome
console.log(filme1.titulo);

console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLan}`);

console.log(`Genero: ${filme1["genero"]}`);


// criar um objeto com 4 atributos e criar uma frase com os 4
var intervalo = {
    hora: 10,
    lugar: "patio",
    onde: "senai",
    comida: "coxinha"
}

console.log(`a hora do intervalo é ${intervalo.hora}, no ${intervalo.lugar} do ${intervalo.onde} e comprei e comi ${intervalo["comida"]}`);

// objeto vazio 
var garrafa = {}

console.log(garrafa);

// criar as propriedades 
garrafa.cor = "Bege"
garrafa.preco = 99
garrafa.tamanho = "710ml"
garrafa["tampada"] = false
console.log(garrafa);

// altera uma propriedade existente
garrafa.cor = "vermelho"
console.log(garrafa);

//peca ap usuario uma nova propriedade para adicionar na garrafa 
// em seguida, peca o valor dessa nova propriedade 
// ao fim, adicione-as no objeto garrafa

var novapropriedade = prompt("Nova propriedade: ")
garrafa[novapropriedade] = prompt("valor:")
console.log(garrafa[novapropriedade]);

// ainda sobre objetos 
var leao = {
    // propriedades
    nome: "Simba",
    tempelo: true,
    especie: "domestico",
    peso: 60,
    // metodos 
    andar: function(){
        console.log("Estou andando, confia");
    },
    falar: () =>{
        console.log("Miau");         
    }
}

console.log(leao);
// mostra o texto do metodo
console.log(leao.andar);
// executar o metodo do leao
leao.falar()
