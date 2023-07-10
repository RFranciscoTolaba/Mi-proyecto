let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [ cero, , dos, , cuatro, ...elResto ] = numeros

console.log(elResto) 

let mascota ={
    nombre: "paco",
    tipoDeMascota: "Perro",
    color: "negro",
    raza: "caniche",
}

const { nombre, tipoDeMascota, color, raza } = mascota

let nombrePerro = mascota.nombre
let tipo = mascota.tipoDeMascota
let colorPerro = mascota.color
let razaPerro = mascota.raza



console.log(`Hola les presento a mi ${tipo} su nombre es: ${nombrePerro} , es un hermoso Perro, de color: ${colorPerro} y su raza es: ${razaPerro}.`);