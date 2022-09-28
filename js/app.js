import {Pokemon} from './modules/affiche.js'

let offset = 0
let limit = 50

Pokemon.getPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)


window.onscroll = function(){
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 20) {
       offset = (offset+1)
       console.log(offset)
       Pokemon.getPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset*limit}`)
    }
}

// function getAllPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0')
//         .then(response => response.json())
//         .then(data => {   
                
//         for (let i = 0; i < 25; i++){
//                 let fiche =  document.getElementById('demo')
//                 let poke = data.results[i]
//                 let url = poke.url
//                     fetch(url)
//                     .then(response => response.json())
//                     .then(data => {
//                         let sprites = data.sprites
//                         let type = data.types  
//                         let type_name = type[0].type.name
//                         let type_name2 = type[1].type.name
//                         let position = sprites.front_default
//                     fiche.innerHTML += '<div class="pokedex"><p class="typo">'+ poke.name +'</p>'+'<p class="type">'+ type_name +'</p>'+'<p class="type2">'+ type_name2 +'</p>'+
//                                        '<a href="#">'+ '<img src="'+ position +'"/>' +'</a>'+'<img src="../asset/img/pokeball.png">'+'</img>'+'</div>'
//                     console.log(type_name)
//                     })    
//                 } 
//             } )  
// }
// getAllPokemon()

// try{
//     Pokemon.getPokemon()
// }catch(err){
//     console.log(err)
//     console.log(err.message)
// }finally{
//     console.log('test')
// }

