

const vector = [0,1,4,8,5,-1];

vector.push(55)

vector[vector.length] = -1;


const aux = vector.pop()

//agregar
vector.unshift(44)

const auxFirst = vector.shift()

console.log(vector, " elemento retirado: ",aux, "Elemento extraido al princiio: ",auxFirst)