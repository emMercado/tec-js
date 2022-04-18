
let vec1 = [1,12,3,4]

let vec2 = [1,4,4]


vec1 = vec1.concat(vec2)

const otro = [...vec1, ...vec2]

console.log(vec1)
console.log(otro)