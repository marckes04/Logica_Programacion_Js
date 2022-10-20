/*
Dado un string y un numero, repetir el string tantas veces el numero indique
Ejemplos:  repitme(Mario,2)
Devuelve
MarioMario
como hacerlo:

-crear una funcion que reciba los dos parametros
-Bucle hasta numero establecido
-concatenar string

*/

function Repiteme(Nombre, Numero)
{
    let resultado = " "

    for(let i =0; i<Numero;i++)
    {
        resultado += Nombre
    }

    return resultado;

}

console.log(Repiteme("Mario",4))
// Funcion Prototipo


