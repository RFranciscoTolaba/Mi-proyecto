const { log } = require('console')
const fs = require('fs')
const starWars = fs.readFileSync('./datos/figuras1.json')
const bandai = fs.readFileSync('./datos/figuras2.json')
const hotToys = fs.readFileSync('./datos/figuras3.json')
 
let importar = function(marca){
    if(marca == "starWars"){
        marca = starWars
    }else if(marca == "bandai"){
        marca = bandai
    }else if(marca == "hotToys"){
        marca = hotToys
    }
    return JSON.parse(marca)
}


module.exports = importar


