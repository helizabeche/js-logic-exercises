let valorMetro = parseFloat (prompt("digite o valor a ser convertido"))
const unidadeDeMedida = prompt ("  digite para converter:" +
    "\n  centímetro - cm" + 
    "\n decímetro - dm" +
    "\n decâmetro - dam" +
    "\n hectômetro - hm" +
    "\n quilômetro - km ")

var milimetro = valorMetro*1000
var centimetro = valorMetro*100
var decimetro =valorMetro*10
var decametro = valorMetro*0.1
var hectometro = valorMetro* 0.01
var quilometro = valorMetro*0.001

switch (unidadeDeMedida) {
    case "m": 
    alert("o valor em milimetro é:" + milimetro );
    break;
    case "cm":
    alert("o valor em centrimentros é:"+ centimetro);
    break;
    case "dm":
    alert("o valor em decimentros é:" + decimetro);
    break;
    case "dam":
    alert("o valor em decametro é:"+ decametro);
    break;
    case "hm":
    alert("o valor em hectometro é:"+ hectometro);
    break;
    case "km":
    alert("o valor em kilometros é:"+ quilometro);
    break;
    default:
        alert("Desculpe, nao temos essa opcao");


}