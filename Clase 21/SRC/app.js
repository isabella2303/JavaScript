
class persona{
    constructor(nombre,edad,genero,pais,cedula){
        this.nombre=nombre;
        this.edad=edad;
        this.genero=genero;
        this.pais=pais;
        this.cedula=cedula;
    }
    mostrarPais(){
        console.log(this.pais)
    }
    get getNombre() {
        return this.nombre
        
    }
}

const persona2 = new persona("Isabella", 18, "Femenino", "Colombia", 666) 
const persona3 = new persona("Sofia", 25, "Lesbiana", "Estados Unidos", 777)
console.log(persona2.mostrarPais())
console.log(persona3.getNombre )

    