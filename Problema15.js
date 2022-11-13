/*
Dada una cadena de texto, devolver el caracter mas repetido. 

Pasos a realizar: 

- Crear una funcion que reciba el texto

- Mapear letras en un JSON

- Recorrer el mapeo

- Hacer condicion para ver que contador es mayor

*/

function masUsado(texto){
    let mapeoletras = {};
    let maximoRepeticiones = 0;
    let letraMasRepetida = "";

    for(let letra of texto)
    {
        if(!mapeoletras[letra])
        {
        mapeoletras[letra] = 1;
        }
        else{
            mapeoletras[letra]++;
        }

    }

    for(letra in mapeoletras)
    {
        if(mapeoletras[letra] > maximoRepeticiones){
            maximoRepeticiones = mapeoletras[letra];
            letraMasRepetida = letra;
        }
    }

    return letraMasRepetida;
}

console.log("la letra mas repetida es: ",masUsado("marioespitia"));