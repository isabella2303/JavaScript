let correo=document.querySelector("#correo")
let contrasena=document.querySelector("#contrasena")
let boton=document.querySelector("#enviarLogin")

boton.addEventListener("click",()=>{
    enviarDatos();
});

const enviarDatos=()=> {
    let usuario={
        correo:"",
        contrasena:""
    };
       usuario.correo=correo.value
       usuario.contrasena=contrasena.value

       let jsonUsuario=JSON.stringify(usuario)

       localStorage.setItem(correo.value, jsonUsuario);

       alert("Se ha enviado al local Storage");
       obtenerUsuario()
};

const obtenerUsuario=()=>{
    let usuario=document.querySelector("#usuario")
    let objUsuario=JSON.parse(localStorage.getItem("isazapata@yopmail.com"))

    usuario.innerHTML=objUsuario.correo
}