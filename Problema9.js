/* Dados dos arrays  devolver elementos comunes entre ellos */

function similarArray(arr1,arr2){
    const similar = arr1.filter(elemento =>{
        return arr2.includes(elemento);
    });
    
    return similar;
}

console.log(similarArray([4,5,6,8],[5,7,9,8]))