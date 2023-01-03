
/*
Dado un enunciado  devolver cuantas vocales posee este 
Por ejemplo: 

Entrada = Murcielago
Salida = 5

*/


function CountVocals(texto){
 
    letra = texto.split('')

    let conteo = 0;

for( let i = 0 ; i < letra.length; i++)
{
    if(letra[i] == 'a' || letra[i] == 'e' || letra[i] == 'i' || letra[i] == 'o' || letra[i] == 'u')
    {
        conteo++;
    }
}

    return conteo;
}

console.log(CountVocals('te amo mi amor'));