function censurado(texto = false,busqueda= false){

    let resultado = "";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda"
    }

    else if(!texto && busqueda)
    {
        resultado = "No puedes leer el texto y la busqueda"
    } 
    else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda"
    } else if(texto && busqueda)
    {
        //resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO-]");
        resultado =  texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
    }

    return resultado;
}

console.log(censurado("hola hola hola","hola"))