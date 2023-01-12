
/* 
Dado un numero, mostrar  numero 1 hasta numero,
Pero para los multiplos de tres debe imprimir "buzz"en lugar
del numero y para los multiplos de cinco imprimir "lightyear"
para los multiplos de tres y cinco imprimen "BuzzLightYear"
*/

function FizBuzz(numero) {
    let resultado = "";

    if (numero % 3 == 0 && numero % 5 == 0) {
        resultado = "Buzzlightyear";
    }
    else if (numero % 3 == 0) {
        resultado = "Buzz";
    }

    else if (numero % 5 == 0) {
        resultado = "lightyear";
    }

    else{
        return numero;
    }

    return resultado;
}

function imprimir(numero){
    for(let i = 1; i <numero; i++){
        console.log(FizBuzz(i))
    }
}

imprimir(200)