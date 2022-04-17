/*
Dada una palabra buscar cuantas veces se repite en un texto dado. 
La palabra se representa en una funcion 
*/

function coincidencias(frase, busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++
            }else{
                mapa[palabra] = 1; 
            }
        }


        console.log(palabras);
        console.log(mapa);

        resultado = mapa[busqueda]

    }else{
        resultado = 0;
    }
    return resultado;
}

console.log(
    "Numero de coincidencias en la frase: ",
    coincidencias("Hola, que tal, Soy Mario espitia, mario","mario"))