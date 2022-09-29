import { player } from "../modules/character.js";

export function map(){
    let tr, td
    var table = document.createElement('table'); 
    var tbody = document.createElement('tbody');

    // create Map 12x12
    for (let row = 0; row < 12; row++) {
        
        tr = document.createElement('tr');
        for (let cell = 0; cell < 12; cell++) {
            td = document.createElement('td');
            td.setAttribute('id', 'x' + `${row}` + ' ' + 'y' + `${cell}`)
            tr.appendChild(td);
            table.appendChild(tbody);
            tbody.appendChild(tr);
        }
        
       document.getElementById('mappok').appendChild(table);
        
    }
    // Started player position
   
    
    let startpos = document.getElementById(`x${player.posX} y${player.posY}`);
    startpos.innerHTML = player.img;
}

// img.src = "../../asset/img/pokeball.png"


