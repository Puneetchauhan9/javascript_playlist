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


console.log(newArray1.includes(8))  //include is used to check whether the array has 8 or not...
//return true or false..

console.log(newArray1.indexOf('puneet')); // -1 gives array not found...

console.log(newArray1.indexOf(2))
//expected output is 1...

// console.log(newArray1.join()); //seprate the array using commas...
// console.log(newArray1.join(''));//' ' is used to print whole array in one
// console.log(newArray1.join("-"));//its work is to seprate using commas if not given if given 
//then uses given seprator...


//*******************important methods of array called slice and splice...******************
//slice  can use to print given(1 ,3) to 2 , 3..
//last index cannot include
//or can not change in whole array..array is same....

//whereas splice can be used as given (1 ,3) print 1 , 2, 3......
//****or in array print whole array except 1 , 2 ,3......

// console.log(newArray1);
// console.log(newArray1.slice(1 , 3)); //expected output 2 ,3....
// console.log(newArray1);//array cannot change expected output 1 , 2,3 ,4

let newArray2 = new Array('puneet','himender','chetan','jatin','khushi','yaman','shiv')
console.log(newArray2);
console.log(newArray2.splice(1 , 3));//expected output [himender,chetan, jatin]...because himender 1 index
//chetan is on 2 index and jatin is one 3 index.... 
//splice include last 
console.log(newArray2); //expected output all array except [himender,chetan,jatin]...


