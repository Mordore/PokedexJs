

let pokemon = document.getElementById("demo")
let game = document.getElementById("mappok")


document.getElementById('battle').onclick = function(){
    pokemon.style.display = 'none'
    game.style.display = 'flex'
}
document.getElementById('poked').onclick = function(){
    pokemon.style.display = 'flex'
    game.style.display = 'none'
}


