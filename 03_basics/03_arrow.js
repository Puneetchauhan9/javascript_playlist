// const user = {
//     userName:"puneet chauhan",
//     price:999,

//     welcomeMessage : function(){
//            console.log(`${this.userName} , Welcome to this website`)
//            console.log(this);
//     }
// }
// user.welcomeMessage()
// user.userName = "khushi"

// user.welcomeMessage()

// console.log(this)//this is the general instatance or live instance

// function chai(){
//     username ="himendar"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     username = "Om"
//     console.log(this.username);
// }
// chai()

// console.log(this)

// const addOne = (num1, num2) => { //   ()=>{} is scope declaraton
//     return num1 + num2
//  }
//  console.log(addOne(5,6))

//   const addTwo = (num1 , num2) => (num1+num2) //by explicit method without return statement
//  console.log(addTwo(5,6))
// const addTwo = (num1, num2) => ( num1 + num2 )

 const addTwo = (num1 ,num2) =>  ({usename:'puneet'}) //for object direct
console.log(addTwo())

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()