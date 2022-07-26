let numeros = [5, 2, 3, 4, 1, 3]

console.log(numeros) //Imprime el vector
console.log(numeros.length) //Imprime el tamaño del vector

console.warn('Ciclo PARA con Vector')
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
  if (numeros[i] % 2 == 0) {
    console.log(`El numero ${numeros[i]} es par`)
  
  } else {
    console.log(`El numero ${numeros[i]} es impar`)
  }
}

console.warn(`Ciclo FOR OF`)//Imprime lops datos que estan dentro del vector
for (const numero of numeros) {
    console.log(numero)
    
}

console.warn(`Ciclo FOR IN`)//Imprime los indices
  if(key==2){
    console.log(numeros[key])
  }
    
  console.warn(`forEACH`)//Para mostrar cada uno de los elementos que esta en el vector

  numeros.forEach(element=> {
    console.log(element)
  });