//Regex



//const texto ='ñofia'

//let patron= new RegExp(/\W/)

//console.log(patron.test(texto))

const txt ='Python es el mejor lenguaje de programacion del 2022, pero Python tiene una curva de aprendizaje'

const txtReplaced =txt.replace(/\d/g,"$")

console.log(txtReplaced)

const user="Steven"

const patronUser= /^[a-zA-Z0-9-]{3,16}$/

console.log(patronUser.test(user))

