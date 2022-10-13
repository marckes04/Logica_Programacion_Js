//  Construir un programa Devuelve 100 hasta 0 de 8 en 8

/* 
Pasos para Hacerlo:

- Funcion que reciba un numero

- Inicializacion con encabezado

- concatenar guion y salto de linea

- Restar 8 a cada numero

- Concatenar

*/

function Reduccion(Numero) {
let resultado = `--- El resultado de los numeros del {Numero} al 0`

while(Numero > 0)
{
    resultado += `--- No ${Numero} \n`;
    Numero -=8
}


resultado += `---------------FIN---------------`;


return resultado;

}
console.log(Reduccion(100));

