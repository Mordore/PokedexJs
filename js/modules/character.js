// import { map } from "../modules/map.js";

export class Player{

   constructor(name, posX, posY, starter, img){
    this.name = name
    this.posX = posX
    this.posY = posY
    this.starter = starter
    this.img = img
   }
}
    
export var player = new Player(localStorage.name, 3, 3, localStorage.starter, "<img id='playerLeVrai' src='../../asset/img/player.png'>")  


console.log(player)









// localStorage.clear();
if(localStorage.getItem('starter') == null){
    let starter = prompt('Choose your starter : ')
    localStorage.setItem("starter", starter)  
}
if(localStorage.getItem('name') == null){
    let name = prompt('Your name :')
    localStorage.setItem("name",name)
}








// let playerStart = document.getElementById("00")
// playerStart.innerHTML += '<img src="../../asset/img/pokeball.png"></img>'
