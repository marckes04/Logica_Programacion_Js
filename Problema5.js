/* Calcular porcentaje de numero x es numero x:

Ejemplo:

Entrada: 
Numero = 100
porcentaje = 50

Salida:

Resultado = 50


*/

function porcentaje(numero,porcentaje)
{
    let operacion = numero * (porcentaje/100);

    let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`

    return resultado;
}

console.log(porcentaje(900,30));
