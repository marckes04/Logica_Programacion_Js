// Dados dos numeros, Devolver cuantos impares hay impares entre ellos

function pares(x,y){

    let contador =  0;

    for(let i = x + 1 ; i < y ; i++)
    {
        if(i % 2 === 0)
        {
            contador = contador + 1;
            resultado = contador + 1;
        }
    }

    return resultado;
}

console.log(pares(1,1009))

function impares(x,y){

    let contador =  0;

    for(let i = x + 1 ; i < y ; i++)
    {
        if(i % 2 != 0)
        {
            contador = contador + 1;
            resultado = contador + 1;
        }
    }

    return resultado;
}

console.log(impares(1,100))


