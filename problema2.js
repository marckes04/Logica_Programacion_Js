/*
Corroborrar si una palabras es palindromo o no 
palindromo son aquellas palabras que normales e invertidas en posiciones son iguales
por ejemplo: Otto, Bob,ana
*/

function palindromo(texto){
    let invertido = texto.split('').reverse().join('')
    return (texto === invertido);
}

console.log("Es un palindromo"+ " "+ palindromo("mom"))