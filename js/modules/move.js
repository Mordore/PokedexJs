import { Player, player } from "../modules/character.js";



export function movePlayer(){

   
//let player = document.getElementById("playerLeVrai")

//let move = 
document.addEventListener('keydown', e => {
    let pos = document.getElementById(`x${player.posX} y${player.posY}`);


    
        if((e.key == "z") && (player.posY > 0)){
            player.posY -= 1
            pos.innerHTML = " "
            pos = document.getElementById(`x${player.posX} y${player.posY}`)
            pos.innerHTML = player.img
           
        }
        if((e.key == "s") && (player.posY < 11)){
            player.posY += 1
            pos.innerHTML = " "
            pos = document.getElementById(`x${player.posX} y${player.posY}`)
            pos.innerHTML = player.img
        
        }
        
        if((e.key == "d") && (player.posX < 11)){
            player.posX += 1
            pos.innerHTML = " "
            pos = document.getElementById(`x${player.posX} y${player.posY}`)
            pos.innerHTML = player.img
      
        }
        if((e.key == "q") && (player.posX > 0)){
            player.posX -= 1
            pos.innerHTML = " "
            pos = document.getElementById(`x${player.posX} y${player.posY}`)
            pos.innerHTML = player.img
          
        }
       
})
   
    
   
} 

