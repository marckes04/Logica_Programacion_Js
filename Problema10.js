/*Dado un Numero se requiere mostrar los escalones de "[-], usando una funcion 
con numero de parametro para obtener esos niveles" */


function escalera(numero){
let escalera_completa = "";

for (let nivel = 1; nivel <= numero; numero++){

    let escalones = " ";

    for(let es = 1 ; es <= numero; es++)
    {
        escalones += "[-]"
    }

    escalera_completa += escalones +"\n";

}

return escalera_completa

}

console.log(escalera(5))
console.log("Hola")