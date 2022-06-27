/* Dado un numero entero, Inviertalo y devuelvalo numero entero */

function Entero(numero){
    let invertido = parseInt(numero.toString().split('').reverse().join('') ) * Math.sign(numero);

    return invertido;
}

console.log(Entero(67));