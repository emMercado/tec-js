//objetos\


const punto = {
    x: 2,
    "y": 4,

}
/* 
console.log(punto.x)
console.log(punto.y)

punto["x"] = -2;

console.log(punto["x"])

punto.z = 5

console.log(punto.z) */

for (let props in punto) {
    console.log(punto[props])
}

for (let i = 0; i < 5; i++) {
 
    punto[`direccion-${i}`] = i * 2
}

/* console.log(punto) */

const object = {}

/* console.log(object.asd?.asd?.asd) */ //undefined

const objectMath = {
    x:2,
    y:2,
    dist : function(){
        return Math.sqrt(this.x ** 2);
    }, 
    get fun(){
        return Math.sqrt(this.x ** 4)
    },
    set fun(value){
        this.x = value
    }
}

console.log(objectMath.dist())
objectMath.fun = 7
console.log(objectMath.fun)
