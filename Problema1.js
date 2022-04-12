
/*
Codigo para realizar la funcion de las tablas de multiplicar en un numero
*/

function tabla_multiplicar(param)
{

    console.log("La tabla de multiplicar del numero"+ " "+ param)
    let resultado = 0;
    for(let i = 1; i < 10; i++){

        
        resultado = param * i;

        let final = param +" "+ "x"+ " "+ i + " = " + resultado;
        console.log(final);
    }
}


tabla_multiplicar(5);