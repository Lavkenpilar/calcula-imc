const estatura = document.querySelector ('#input1').value
console.log (input1)
const peso = document.querySelector('#input2'). value
console.log (input2)
const imc = peso / (estatura*estatura)
console.log (imc)
const resultado = document.querySelector ('#resultado')
console.log (resultado)
const button = document.querySelector('button')

button.addEventListener("click", function() { 
if (imc < 18.5 ) {
    console.log ("IMC bajo")
    resultado.innerHTML = "Tu IMC es bajo"
}
else if (imc < 24.9 ) {
    console.log ("IMC normal")
    resultado.innerHTML = "Tu IMC es normal"
} else if  (imc >25 ) {
    console.log ("IMC Alto")
    resultado.innerHTML = "Tu IMC es Alto"
}
})