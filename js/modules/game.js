let pokemon = document.getElementById("demo")
let game = document.getElementById("gameaffiche")


document.getElementById('battle').onclick = function(){
    pokemon.style.display = 'none'
    game.style.display = 'flex'
}
document.getElementById('poked').onclick = function(){
    pokemon.style.display = 'flex'
    game.style.display = 'none'
}


