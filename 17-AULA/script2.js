//  desvios condicionais 

// if = se
var estaVivo = true

//primeira comparação 
if(estaVivo){
    console.log("Parabéns, que legal")
}
//segunda comparação
else if (estaVivo == undefined){
    console.log("Mano, sei como c~e tá.")
} 
//ultimo caso, so entra aqui se todos acima derem errado 
else{
    console.log("Morreu, mas passa bem")
}

//switch/case
var camisa = "Marrom"

switch(camisa){
    case "Preta": 
        console.log("Parabéns, acaba de ganhar um vinil da sabrina carpenter")
    break
    case "Branca":
        console.log("Voce ganhou, um body splash da virginia")
    break
    case "Vermelha":
        console.log("Você ganhou uma ferrare, 3 portas, comteto solar e escada")
    break 
    default:
        console.log("Puxa, não foi dessa vez que você conseguiu")
    break
}

/*
// prompt - interage com o usuario e coleta um valor 
var preferido = prompt("Qual é o seu pet favorito do mundo dos filmes: ")

console.log("Seu PET preferido é:", preferido)
*/

console.log("Coloque apenas valores acima de 1, e menor que 1000")
var caixa1 = Number(prompt("Valor da caixa 1:"))
var caixa2 = Number(prompt("Valor da caixa 2:"))
var caixa3 = Number(prompt("Valor da caixa 3:"))

// 1 viagem
// && = e , || = ou
if((caixa1 < caixa2 && caixa2 < caixa3) || (caixa1 + caixa2 < caixa3)) {
    console.log("1 viagem necessária");
}
else if((caixa1 < caixa2 && caixa2 == caixa3) || (caixa1 == caixa2 && caixa2 < caixa3)){
    console.log("2 viagens necessárias")
}
else{
    console.log("3 viagens necessárias")
}
                                          