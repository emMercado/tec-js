
class algo {
    constructor(x,y) {
        this.x;
        this.y;
    }

    mostrar(){
        console.log(`x: ${this.x} , y: ${this.y}`)
    }

    get distancia (){
        return Math.sqrt(this.x ** 2 * this.y ** 2)
    }
    set distancia(value) { 
        this.x = (Math.sqrt(2) * value) / 2;
        this.y = (Math.sqrt(2) * value) / 2;
    }

}

const variable = new algo (1,2);

variable.mostrar()
console.log(variable.distancia)
variable.distancia = 5

class Rectangulo extends algo {}