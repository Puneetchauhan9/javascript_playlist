//const newArray = [1 , 2 ,3 , 4 , "puneet"]
// console.log(newArray)
// console.log(typeof newArray)

const newArray1 = new Array(1 , 2 ,3 ,4 ,"puneet ")
//console.log(newArray1)
console.log(newArray1[2])

//*************************Array Methods*************************************

console.log(newArray1.pop()) //last array is deleted..
// console.log(newArray1.push(7))
// console.log(newArray1)
 
//use of unshift and shift.... unshift not much used bacause it can add on first position and
//har ek element ko sarakna padta hh...

let anA= newArray1.unshift(7)
 console.log(newArray1.shift());//first ko delete...
 console.log(newArray1);
