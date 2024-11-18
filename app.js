"use strict"

class Persona {
    //con # son privados y hay que declararlos
    #nombre
    #apellidos
    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }
}
class Empleado  {
    #nombre
    #apellidos
    #nacimiento
    #sueldo
    constructor(nombre, apellidos, nacimiento, sueldo) {
        //tiene que incializar la clase padre
        this.#nombre=nombre;
        this.#apellidos=apellidos;
        this.#nacimiento=nacimiento;
        this.#sueldo=sueldo;
    }

    toString(){
        return `<tr><td>${this.#nombre}</td>
            <td> ${this.#apellidos}</td>
            <td> ${this.#nacimiento}</td>
            <td>${this.#sueldo}</td></tr>`;
        
    }
}

let empleados=[
    new Empleado("Paco","Fiestas",1997,33000),
    new Empleado("Chindas","Vinto",2001,27000),
    new Empleado("Juan","Cruz",2000,34000),
    new Empleado("Misty","Perez",2003,78000),
    new Empleado("Joan","Laporta",1975,56000),
    new Empleado("Sabrina","Carpenter",1984,344444),
    new Empleado("Eulalio","carrion",1999,120000),
]

let tabla=document.getElementById("lista-empleados");
empleados.forEach(empleado=>{
    tabla.innerHTML += empleado;
});

const nombre= document.getElementById("nombre");
nombre.addEventListener("click",()=>{
    empleados.sort();
});

const ape= document.getElementById("apellidos");
ape.addEventListener("click",()=>{
    empleados.sort();
});

const anio= document.getElementById("anio");
anio.addEventListener("click",()=>{
    empleados.sort();
});

const sueldo= document.getElementById("sueldo");
sueldo.addEventListener("click",()=>{
    empleados.sort();
});


