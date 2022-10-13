/* Dado un array dividirlo en Sub Arrays en un tamaño necesario como lo indique su tamaño

Dividirilo X elementos

Ejemplos:

dividirArrays([7,8,9,10],2)

//Devuelve :

[[7,8], [9,10],[5]]

*/



function Agregar_Array(Arreglo, No_elementos){

let arreglos = [];

for(let elemento of Arreglo){
    let ultimo = arreglos[arreglos.length -1] // ultima posicion de arreglo


if(!ultimo || ultimo.length == Arreglo.length) // Si no hay valor en el ultimo o alcanzo su maximo
                                               // limite de posiciones entonces 
{
    arreglos.push([elemento]); // Agrego sub array 
}
else
{
    ultimo.push(elemento); // Añadir el elemento al propio array
}

console.log(arreglos)

}

}

Agregar_Array([7,8,9,10,5],2);