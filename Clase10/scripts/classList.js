document.getElementById("titulo").classList.remove('titulo')

let titulo=document.querySelectorAll('h1')

titulo.forEach(element=>{
    element.classList.add("titulo2")
})

console.log(titulo[0].classList.contains("titulo2"))

titulo[1].classList.toggle("titulo")