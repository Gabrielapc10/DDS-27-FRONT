// cria uma funcao externa
function opcoes(){
// this nesse contexto, e o cara qua esta chamando a funcao
    console.log("as opcões são:", this.tamanho.toString());
    
}

var produto1 = {
    nome:"Coca-Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho:["200ml", "Lata", "600ml", "3L", "ks"],
    // cria um metodo interno
    descricao: function (){
        // this - referencia o proprio
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
    // usa uma funcao externa como seu metodo
    verTamanhos : opcoes
}
produto1.descricao()
produto1.verTamanhos()

var produto2 = {
    nome:"Coxinha",
    categoria: "salgado",
    quantidade: 3,
    tamanho:["P", "M", "G"],
    descricao: function (){
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    }, 
    verTamanhos : opcoes
}
produto2.descricao()
produto2.verTamanhos() 

// metendo o loko (por causa do lucas )
var aluno = {
    nome: "Cristiano Ronaldo",
    anoescolar : "7°",
    turma: "c",
    notas: [6,7,8],
    media: function() {
        let n1 = this.notas[0]
        let n2 = this.notas[1]
        let n3 = this.notas[2]
        
        return ((n1+n2+n3) / 3)
    }
}
console.log(aluno.media());
