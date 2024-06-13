const userEmail = []
// if(userEmail){
//     console.log("got user email");
// }
// else {
//     console.log("don't get user email");
// }

// false, 0, -0, BigInt 0n, "", null, undefined, NaN  all taken as falsy value 

//truthy values
// "0", 'false', " ", [], {}, function(){}

//  if (userEmail.length === 0) {
//      console.log("Array is empty");
//  }

//  const emptyObj = {}

//  if(Object.keys(emptyObj.length === 0)){
//     console.log("object is empty");
//  }

 // *****************Nullish Coalescing Operator (??): null undefined**********************************

//  a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand


let val1;

// val1 = 5 ?? 10
// console.log(val1); //expected output 5.. (gives left hand)

// val1 = null ?? 10 
// console.log(val1); //expected output 10...(gives right hand value because left hand is null)

// val1 = undefined ?? 20
// console.log(val1);

//nullish coalishing operator is different from ternary operator because ternary have (?) one question mark but nullish operator have (??)

// Terniary Operator

// condition ? true : false

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

















