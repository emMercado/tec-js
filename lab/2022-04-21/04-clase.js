//map
//find
//filter
//reduce

const array = [1,1,1,1]

/* const res = array.map((e) => e+1)
 */
/* const res = array.filter((e)=> e % 2 === 0)
 */
/* const res = array.find((e)=> e % 2===0)
 */
const res = array.reduce((value,acu) => value + acu)

console.log(res)