const importar = require('./collectibles.js')

let starWars = importar('starWars')
let bandai = importar('bandai')
let hotToys = importar('hotToys')

let unifiedCollectibles = [ ...starWars, ...bandai, ...hotToys];

const collectibles={
    figuras: unifiedCollectibles,
    listFigures: function(){
        return this.figuras.forEach((list)=> {
            console.log(list)
        })
    },
    figuresByBrand: function(marcaDeLaFigura){
        return this.figuras.filter((figura)=>{
            return figura.marca===marcaDeLaFigura
        })
    },
}

collectibles.listFigures()
console.log(collectibles.figuresByBrand('starWars'))

