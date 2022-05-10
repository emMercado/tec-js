
//base por altura / 2
const triangulo = {
    ladoA : 0,
    ladoB : 0,
    ladoC : 0,
    get perimetro(){
        return this.ladoA + this.ladoB + this.ladoC 
    },
    set perimetro(value){
        this.ladoA = value
        this.ladoB = value
        this.ladoC = value    
    },
    get tipo(){
        if(this.ladoA === this.ladoB && this.ladoB === this.ladoC){
            return "equilatero"
        }
        
    },
    set tipo(value){
        this.ladoA = value
        this.ladoB = value
        this.ladoC = value    
    },



}

triangulo.perimetro = 5
triangulo.tipo = 5

console.log(triangulo.perimetro)
console.log(triangulo.tipo)

const rectangulo = {
    alto: 0, 
    ancho: 0,
    perimetro: 0,
    superficie: 0,
    esCuadrado: Boolean,
}