
/*
Se espera que dada una palabra, se invierta unicamente con estructuras de control
y no se permite usar estructuras propias del lenguaje JavaScript.

Por ejemplo: 

Entrada1:

Mario

Salida1:

oiraM

Entarada2

Bogota

salida2

atogoB
*/


function invertir(palabra)

{

    let reves = " "

    for(let caracter of palabra)
    {
        reves = caracter + reves
    }

    return reves;

}

console.log("su palabra invertida es:  ", invertir("Mario"));
console.log("su palabra invertida es:  ", invertir("Bogota"));


