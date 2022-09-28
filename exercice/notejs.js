try{
    cheval
    alert('bonjour');
}catch(err){
    console.log('lerreur complete : ', err)
    console.log('nom de lerreur : ', err.name)
    console.log('message de lerreur : ', err.message)
    console.log('Emplacement de lerreur : ', err.stack)
    
    
}finally{
    console.log('test')
}