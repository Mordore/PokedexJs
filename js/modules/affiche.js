export class Pokemon {

    static async test(){
        console.log("bonjour je marche")
    }
    static async getPokemon(url){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
             for (let i = 0; i < data.results.length; i++){
                let fiche =  document.getElementById('demo')
                let poke = data.results[i]
                let url = poke.url 
                // console.log(poke.url)
                    fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        let sprites = data.sprites
                        let position = sprites.front_default
                        let type = data.types 
                        let type_name = type[0].type.name
                        let type_name2 = "LVL 1"
        fiche.innerHTML += '<div class="pokedex" id="nemo"><p class="typo">'+ poke.name +'</p>'+'<p class="type">'+ type_name +'</p>'+
                            '<a href="#">'+ '<img src="'+ position +'"/>' +'</a>'+'<p>'+type_name2+'</p>'+'<img src="../asset/img/pokeball.png">'+'</img>'+'</div>'
            }
                
      
            )}})   
    }
}


