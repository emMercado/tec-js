let numbers = [1,2,3,6]

class Operacion {
    constructor(numeros,operador){
        this.numeros = numeros
        this.operador = operador  
    }

    get operar(){
        return this.calcOperation
    }

    /* get suma(){
        return this.calcSuma
    }
    get multiplicacion(){
        return this.calcMulti
    } */

    /* get resta(){
        return this.calcResta
    }

    get division(){
        return this.calcDivision
    } */

   /*  calcSuma(){
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
    } */

    calcOperation(){
        var suma = 0;
        var producto = 1;
        var ordenado = []
        var resta = 0;
        var division=0;
            this.numeros.forEach(element => {
                switch (this.operador){
                    case "suma": 
                        suma += element;
                        break;
                    case "producto":
                        producto *= element;
                        break;
                    case "resta":
                        break;
                    case "division":
                        break;
                    default: 
                        console.log("Operation undefined. Choice suma, producto, resta or division")
                        break;
                }
            });
            return suma || producto || resta;
    }
}

var operation = new Operacion(numbers,"resta");
/* console.log(operation.suma())
console.log(operation.multiplicacion()) */
console.log(operation.operar())

//1 solo metodo dependiendo del parametro de entrada va a multiplicar o sumar
//se puede agregar resta y division, condiciones no se puede dividir por cero
//y el divisor tiene q ser mayor que el dividendo