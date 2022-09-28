export function Player(name, posX, posY, image){
    this.name = name
    this.posX = posX
    this.posY = posY
    this.image = image

}

let player = new Player("morgan", 0, 1, "<img src='../../asset/img/pokeball.png'>")

let playerStart = document.getElementById("00")
playerStart.innerHTML += '<img src="../../asset/img/pokeball.png"></img>'

console.log(player)