function loadScript(src, echec=false){
    return new Promise((resolve, reject) => {
        
        let script = document.createElement('script');
        script.src = src;
        if (echec){
            throw new Error("dede")
            
        }
        document.head.append(script);
        script.onload = ()=> resolve('fichier ' + src + ' bien charger');
        script.onerror = ()=> reject(new error('echec de chargement ' + src ));
        
    });
}
let promesse1 = loadScript('cours1.js', true);
let promesse2 = loadScript('cours2.js', true);

promesse1.then(
    function(result){console.log(result);},
    function(error){console.log(error);}
);

promesse2.then(result => console.log(result), error => console.log(error));


async function test(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ok !'), 2000)
    });
    let result = await promise;
    console.log(result);
}





// try{
//     cheval
//     alert('bonjour');
// }catch(err){
//     console.log('lerreur complete : ', err)
//     console.log('nom de lerreur : ', err.name)
//     console.log('message de lerreur : ', err.message)
//     console.log('Emplacement de lerreur : ', err.stack)
    
    
// }finally{
//     console.log('test')
// }

    
// const promesse = new Promise((resolve, reject) => {
//      tache asynchrone à realiser

//      appel de resolve() si la promese est résolut
//      ou
//      appel de reject() et elle echoue
// })