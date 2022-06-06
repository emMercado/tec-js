//1) Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

/* Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por
pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
 */

//PADRE : Persona
//Estudiante : Hijo de Persona
//Profesor : Hijo de Persona

/* class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        return `${this.nombre} ${this.edad} ${this.genero}`
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero,)
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        return `Estudiante Registrado`
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        return `Asign`
    }
}

const profe = new Profesor("juaan", "23", "masculino", "geografia", "secundario")
const person = new Persona("juaan", "23", "masculino", "geografia", "secundario")
const estudent = new Estudiante("juaan", "23", "masculino", "geografia", "secundario")

console.log(person.obtDetalles())
console.log(profe.asignar())
console.log(estudent.registrar()) */



/* Contexto global
En el contexto de ejecución global (fuera de cualquier función), this se refiere al objeto global, ya sea en modo estricto o no. */


/* const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};

console.log(test.func()); */
// expected output: 42

/*   8) El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los
factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 =
120. Utilizando la estructura for, crear un script que calcule el factorial de un número entero. */

/* function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        console.log(total)
        console.log("i",i)
        total = total * i;

    }
    return total;
}

console.log(factorial(5)) */

/* 9) Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural */





let cadena = "La ruta nos aporto otro paso natural"

let invert = cadena.split("").reverse()

let unir = invert.join("");

let final = unir.replace(/ /g, "").toLocaleLowerCase()

let finalC = cadena.replace(/ /g, "").toLocaleLowerCase()


if(finalC === final){
    console.log("es palurdo")
}
else{
    console.log("no es palurdo")
}


console.log(final)
console.log(finalC)



