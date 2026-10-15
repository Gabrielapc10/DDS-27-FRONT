// console - terminal do navegador 
// console.log(console);

// window - janela do navegador  
// window.alert()
// window.prompt()
// console.log(window);

// document - DOM, seu codigo html inteiro
console.log(document);
console.log(document.head);
console.log(document.body);

//  seção 1

// selelciona elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

// seleciona elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

//  seleciona elemento por id 
var especifico = document.getElementById("p3")
console.log(especifico);

// alteração de estilos 
// pego pelo id 
especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"


// pela class
paragrafos[0].style.backgroundColor = "pink"

// pela tag 
titulos[2].style.backgroundColor = "orange"

// seção 2
// função ativada, mas criada pelo javasctipt
function cliquei(){
    console.log("SAAAAIIII");
}

// função ativada, mas criada pelo javasctipt, via eventListener
let qtdcliques = 0

document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {
    qtdcliques++

    console.log(`Cliques:${qtdcliques}`);    
})

// botão clicavel, que altera varios 
document.getElementById("shazam").addEventListener("click", () =>{
    for(var i= 0; i < titulos.length; i++ ){
    titulos[i].style.backgroundColor = "red"
    titulos[i].style.color = "yellow"
    titulos[i].style.fontSize = "100px"
    }
})

// uso o this 
// função ativada, e o parametro veio com o this
function quemFoi(elementoQueChamou){
    console.log(elementoQueChamou); 
}

// seção 3 
// altra o texto
document.getElementById("criaTexto").addEventListener("click", () => {

    // innertext - textcontent - altera o texto do elemento 
    document.getElementById("textoCriado").innerText = "Falei que ia mudar, toma ai"

})
// altera o html
document.getElementById("criaHtml").addEventListener("click", () =>{
    // innertext - textcontent - altera o elemento 

    document.getElementById("vazia").innerHTML += "<h2> ahahahaha </h2>"
})