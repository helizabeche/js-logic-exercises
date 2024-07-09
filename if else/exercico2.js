const nome1 = prompt ("nome do primeiro veiculo")
const nome2 = prompt ("nome do segundo veiculo")
const velocidade1 = prompt ("velocidade do primeiro veiculo")
const velocidade2 = prompt ("velocidade do awgundo veiculo")

if (velocidade1 > velocidade2) {
    alert("o veiculo" + nome1 + " é mais veloz")
} else if (velocidade1 < velocidade2) {
    alert ("o veiculo: " + nome2 + " é mais veloz")
} else if (velocidade1 == velocidade2) {
    alert ("o veiculo: " + nome2 + "e o veiculo: " + nome1 + " teem a mesma velocidade")
}