//sessionStorage.setItem("id", 123)
//console.log(sessionStorage.getItem("id"));
//console.log(localStorage)

const usuario={
    nombre:"Isabella Zapata",
  edad:18,
  correo: "isabellazapatapulgarin@gmail.com"
}

const jsonUsuario=JSON.stringify(usuario,undefined,4)

localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem(usuario.correo))