/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// evento change
//  change dispara quando o usuario sai da caixinha

document.getElementById("campoChange").addEventListener("change", () =>{
    
    // pega o valor digitado pelo usuario
    const textoDigitado = document.getElementById("campoChange").value

    //  pega o texto de baixo e troca o valor, pelo que a pessoa digitou e guardei na variavel
    document.getElementById("resultadoChange").innerText = "Você digitou:" + textoDigitado   

}) 

// evento input
// input dispara quando o usuario altera o valor da caixinha
document.getElementById("campoInput").addEventListener("input", function(){

    // pega o valor digitado pelo usuario
    const textoDigitado = this.value

    //  pega o texto de baixo e troca o valor, pelo que a pessoa digitou e guardei na variavel
    document.getElementById("resultadoInput").innerText = textoDigitado
})

// =====================================================

// guarda todo o hmtl do formulario 
const formulario = document.getElementById("formJogador")

// guarda o html da lista de jogadores (que se inicia vazia)
const lista = document.getElementById("listaJogadores")

// funcao para ativar quando o usuario tentar enviar os dados
formulario.addEventListener("submit", function(evento){

    // parar de recarregar a pagina quando tenta enviar, alem de outras
    evento.preventDefault()

    // verifica o conteudo digitado nas caixinhas, e guarda em variaveis
    const inputNome = document.getElementById("nome").value
    const inputcamisa = document.getElementById("camisa").value
    const inputposicao = document.getElementById("posicao").value
    const inputtime = document.getElementById("time").value

    // criar um objeto com as informacoes 
    const jogador = {
        nome: inputNome,
        camisa: Number(inputcamisa),
        posicao: inputposicao,
        time: inputtime
    }
    console.log(jogador);
    // chama a funcao para adicionar o card
    adicionarJogador(jogador)
})

// funcao para criar um card
function adicionarJogador(JogadorAtual){
    
    //  cria o elemento card - pai de todos
    const card = document.createElement("div")

    // cria elementos do card
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa = document.createElement("p")
    const textoTime = document.createElement("p")

    // preencher os elementos, com os valores do objeto
    titulo.textContent = JogadorAtual.nome
    textoPosicao.textContent = "Posição:" + JogadorAtual.posicao
    textoCamisa.textContent = "Camisa:" + JogadorAtual.camisa
    textoTime.textContent = "Time:" + JogadorAtual.time
    // Construo o card
    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)
    card.appendChild(textoTime)

    // adiciona o card, com filho da lista de jogadores
    lista.appendChild(card)
    
}






