
/* Dibujar un hueco con asteriscos 

ejemplos: 

    Cuadrado(4)

    devuelve:

    ****
    *  *
    *  *
    *  *
    ****

*/

function lado(numero) {
    let lado = "";

    for (let i = 0; i < numero; i++) {
        lado += "*";
    }

    return lado;
}

function Cuadrado(numero) {

    let dibujo = lado(numero) + "\n";


    let contenido = "";

    for (let i = 2; i < numero; i++) {
        contenido = "*";

        for (let i = 2; i < numero; i++) {
            contenido += " ";
        }

        contenido += "*";

        dibujo += contenido + "\n"

    }

    dibujo += lado(numero);

    return dibujo

}

console.log(Cuadrado(4))