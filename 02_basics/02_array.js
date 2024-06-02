const newHeroes = ["puneet","jatin" , "zilesingh"]
const newHeroes1 = ["khushi","sudesh","sheetal"]

//newHeroes.push(newHeroes1);

//console.log(newHeroes);
//console.log(newHeroes[3][1]) //expected output is sudesh..


// const allArrayInOne = newHeroes.concat(newHeroes1)
// console.log(allArrayInOne) //concat add two array and make a new array..
//concate is not best practice.............

const new_Heroes = [...newHeroes , ...newHeroes1] //... named as spread used to ekk ekk element alag krdega..

console.log(new_Heroes);

const another_Array = [1 , 2 ,3 , 4 ,[5 , 6] , [7 , 5 ,6 ,[8 ,9]]] //rare situation ajaiya
//to hame sab to alag alag krna he to kya krre ge
const real_Another_Array = another_Array.flat(Infinity) //in this flat is use to seprator all
//and give them in single... here syntax:flat(depth)..depth means hoe many new brackets in array
// so hack is use infinity so it handle all depths by its own..
// console.log(real_Another_Array);

console.log(Array.isArray("puneet")); //static method determines whether the passed value is an Array.
console.log(Array.from("puneet"));    //from is used to convert array like or iterable object in array.

console.log(Array.from({name :"puneet"})); //it will give [] means you can define what can  be solve
//a key or  value..

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1 , score2 ,score3))
// created a new array instance...