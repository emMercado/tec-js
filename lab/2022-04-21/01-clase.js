//Funciones
//arguments -- casi un vector -- es un objeto
function sumar(...values){
    /* return a+b; */
    let suma = 0
    for(let i=0 ; i<values.length; i ++){
        suma = suma + values[i]
    }
    console.log("suma de todos los argumentos: ",suma)
}

sumar(1,2,3,4,5,6,6,77)