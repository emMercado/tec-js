let numbers = [1,2,3,6]

class Operacion {
    constructor(numeros){
        this.numeros = numeros  
    }

    get suma(){
        return this.calcSuma
    }
    get multiplicacion(){
        return this.calcMulti
    }

    calcSuma(){
        let suma = 0
        for(let i=0; i<this.numeros.length; i++){
            suma = suma + this.numeros[i]
        }
        return suma
    }
    calcMulti(){
        let mult = 1
        for(let i=1; i<this.numeros.length; i++){
            mult = mult * this.numeros[i]
        }
        return mult
    }
}

var operation = new Operacion(numbers);
console.log(operation.suma())
console.log(operation.multiplicacion())

//1 solo metodo dependiendo del parametro de entrada va a multiplicar o sumar
//se puede agregar resta y division, condiciones no se puede dividir por cero
//y el divisor tiene q ser mayor que el dividendo