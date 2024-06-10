// function myName(){
//     console.log("P")
//     console.log("u")
//     console.log("n")
//     console.log("e")
//     console.log("e")
//     console.log("t")
// }
// myName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumber()//returns  nan

// function addTwoNumber(number1 , number2){
//     // let Result = number1 + number2

//     // return Result
//     return number1+number2
// }

// const Result = addTwoNumber(5 , 7)
// console.log(Result);


// function userNameLogin(username ='om'){
//    if(!username === ''){
//     console.log("please enter user name")
//     return
//    }
//    return `${username} is just logged in`

// }
// console.log(userNameLogin('puneet'))

// function calculateCartPrice( val1 , val2 , ...num1){  
// return num1    //rest operator which make coleection of rest objects  as (...)
// }
// console.log(calculateCartPrice(200 , 300 , 400 ,500)) //expected output is 400 nd 500 because value 1 \
// takes 200 val2 tkes 300 and rest all have with rest opertaor...

const user = {
    username:"chetan",
     age:20,
     price:499
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age} where price is ${anyObject.price}`);
}
// handleObject(user)//pass object by making full object 

// handleObject({
//    username:"puneetchauhan", 
//    age:20,
//    price:1000
// })  pass object by passing directly value..

const newarray = [400 , 500 , 600 ,700]
function returnValue (anyArray){
    return anyArray[1]
}
let arrayValue = returnValue(newarray)
console.log(arrayValue)



