let numbers = [1,2,3,6]

class Operacion {
    constructor(numeros,operador){
        this.numeros = numeros
        this.operador = operador  
    }

    get operar(){
        return this.calcOperation
    }

    calcOperation(){
        var suma = 0;
        var producto = 1;
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
            return suma || producto;
    }
}

var operationProducto = new Operacion(numbers,"producto");
var operationSuma = new Operacion(numbers,"suma");
console.log("Producto Resultado: ",operationProducto.operar())
console.log("Suma Resultado: ",operationSuma.operar())