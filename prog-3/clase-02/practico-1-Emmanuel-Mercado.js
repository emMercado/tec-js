//Mercado Babi Emmanuel E.

const array = [1,2,3]

const suma = (valores, multi) => {
    const reducer = (acu, curr) => acu + curr
    return valores.reduce(reducer) * multi
 }

console.log("Por 3",suma(array, 3))

const valor = suma(array, 5)


const decompose =(value)=>{
    let newArray = []
    
    let veces = value.toString()
    
    for(let i=0; i <=veces.length; i++){
        let num = parseInt(veces[i])
        switch (num) {
            case 0:
                newArray.push("cero")
                break;
            case 1:
                newArray.push("uno")
                break;
            case 2:
                newArray.push("dos")
                break;
            case 3:
                newArray.push("tres")
                break;
            case 4:
                newArray.push("cuatro")
                break;
            case 5:
                newArray.push("cinco")
                break;
            case 6:
                newArray.push("seis")
                break;
            case 7:
                newArray.push("siete")
                break;
            case 8:
                newArray.push("ocho")
                break;
            case 9:
                newArray.push("nueve")
                break;
        }
    }
    return newArray
}

console.log("Por 5",decompose(valor))