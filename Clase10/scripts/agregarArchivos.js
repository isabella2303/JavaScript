let titulo=document.querySelectorAll('h1')

for (let i = 0; i < titulo.length; i++) {
    titulo[i].className="titulo";
    
}

titulo[1].id="titulo1"
titulo[2].id="titulo2"

console.log(titulo)

let imagen=document.getElementById("imagen")

imagen.setAttribute("src", "https://c0.klipartz.com/pngpicture/588/905/gratis-png-ariel-ilustracion-princesa-ariel-aurora-cenicienta-rapunzel-princesa-jazmin-ariel.png")

let enlace=document.querySelector("a")
enlace.setAttribute("href","https://www.google.com/")

