
var a = 13;

var b = 11;

var c = 12;

if (a > b && a > c && b > c) {
    console.log(a, b, c)
} else if (b > c && b > a && c > a) {
    console.log(b, c, a)
} else if (b > c && b > a && a > c) {
    console.log(b, a, c)
} else if (c > b && c > a && b > a) {
    console.log(c, b, a)
} else if (c > b && c > a && a > b) {
    console.log(c, a, b)
} else if (a > b && a > c && c > b) {
    console.log(a, c, b)
}

var mes = 5

switch (mes){
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    default:
        console.log("Diciembre")
}
console.log(`a vale ${a}`)