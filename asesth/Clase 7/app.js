//AQUI VIMOS El OPERADOR &&
const entrarAlBar = (edad, pago) => {
  if (edad >= 18 && pago == true) {
    console.log('Puede entrar al Bar')
  } else {
    console.log('No puede entrar al Bar')
  }
}
let edadPersona = Number(prompt('Ingrese su edad'))
let pagoEntrada = Boolean(prompt('¿Usted pago?'))
entrarAlBar(edadPersona, pagoEntrada)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
