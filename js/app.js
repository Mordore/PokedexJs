import {Pokemon} from './modules/affiche.js'
import { movePlayer } from "./modules/move.js";
import { map } from "./modules/map.js";
import {  } from "./modules/game.js";


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

map()
movePlayer()

