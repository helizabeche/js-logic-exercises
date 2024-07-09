let dinheiroDisponivel = parseFloat(prompt("quanto de dinheiro você tem disponivel?"));

let opcao = prompt ("Você tem:" + dinheiroDisponivel + "deseja adicionar ou remover alguma quantidade? (adicionar/remover/sair)" )
var adicionar= 0;

switch (opcao){
    case "adicionar":{
        adicionar= parseFloat(prompt("quanto vc deseja adicionar?"));
        dinheiroDisponivel += adicionar
        alert("seu dinheiro é igual a " + dinheiroDisponivel)
        

    }
    case "remover":{
        adicionar= parseFloat(prompt("quanto vc deseja remover?"));
        dinheiroDisponivel -= adicionar
        alert("seu dinheiro é igual a " + dinheiroDisponivel)
        
    }
    case "sair":{
       break
    }
    
}
