//Ciclo for en JavaScript
let cont=0,acum=0
for (let i = 0; i <= 100; i+=2) {
   // acum=acum+1
   acum+=i
   if (i%2==0){
    console.log(`El numero ${i} es par`)
   }else{
    console.log(`El numero ${i} es impar`)
   }

}
console.log(`El acumulador esta en: ${acum}`)

//fUNCION PARA SABER SI EL NUMERO ES PAR

const isPair=(num)=>{
    if (num%2==0){
        console.log(`el numero es par`);
    }else{
        console.log(`El numero es impar`)
    }
}
isPair(122);
isPair(125);