let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let cero = numeros[0]
let dos = numeros[2]
let cuatro = numeros[4]
let otros = [1, 3, 5, 6, 7, 8, 9, 10]

let mascota ={
    nombre: "paco",
    tipoDeMascota: "Perro",
    color: "negro",
    raza: "caniche",
}

let nombrePerro = mascota.nombre
let tipo = mascota.tipoDeMascota
let colorPerro = mascota.color
let razaPerro = mascota.raza

let respuesta = `Hola les presento a mi ${tipo} su nombre es: ${nombrePerro}, es un hermoso Perro, de color: ${colorPerro} y su raza es: ${razaPerro}.`

console.log(respuesta);