function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    //todo: array auxiliar
    let invert = [];
    for(let element of array)
        if(element < 10  && element > -10) invert.unshift(element);
    return invert;
};

function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    
    //! forma 1 
    // for(let imtemI of array1){
    //     for(let imtemJ of array2){
    //         if(imtemI === imtemJ) return imtemI;
    //     }
    // }
    
    //! forma 2 
    for(let itemI of array1){
        if(array2.includes(itemI)) return itemI;
    }
    
    //!forma 3
    // for(let i = 0; i < array1.length; i++){
    //     for(let j = 0; j < array2.length; j++){
    //         if(array1[i] === array2[j]){
    //             return array1[i];
    //         }
    //     }
    // }
    return Math.min(...array1,...array2);
};

function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    
    //todo: array auxiliar
    let newArray = [];
    //!forma 1 con for y foreach
    // for(let i = 0; i < array.length; i++){
    //     if(Array.isArray(array[i])){
    //         let sum = 0;
    //         array[i].forEach(element => {
    //             sum += element;
    //         });
    //         newArray.push(sum);
    //     }else{
    //         newArray.push(array[i]);
    //     }
    // }
    // return newArray;

    //!forma 2 con for y reduce
    for(let item of array){
        if(Array.isArray(item)){
            //let sumInit = 0;
            let sum = item.reduce((x, y) => x + y); 
            newArray.push(sum);
        }else{
            newArray.push(item);
        }
    }
    return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos 
    // que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    if(numero%divisor !== 0) return false;
    
    var newArray = [];

    var cantidad = numero / divisor;

    while(divisor>0){
        newArray.push(cantidad);
        divisor--;
    }
    
    return newArray;
};


function elementoMenorYMayor(array){
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

    //var min = Infinity;
    //var max = -Infinity;
    //! 1ra  forma
    // array.forEach(element => {
    //     if(element > max) max = element;
    //     if(element < min) min = element;
    // });

    //! 2da  forma
    // for(let item of array) {
    //     if(item > max) max = item;
    //     if(item < min) min = item;
    // }

    // var min_max = [min, max]  
    // return min_max;

    //! 3ra forma
    // var minimo =  Math.min(...array);
    // var maximo = Math.max(...array);
    // return [minimo,maximo];

    //! 4ta forma
    return [Math.min(...array),Math.max(...array)];
};

module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};