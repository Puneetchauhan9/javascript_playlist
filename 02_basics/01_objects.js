// object literals

//object declaration

//****** Interviewer question is that declare symbol and print them in keys of object??
const sym = Symbol("key1")

const jsUser = {
        name: "puneet chauhan",
        age:20,
        fullName:"puneet chauhan",
        gmail:"pc3622445@gmail.com",
        isLoggedIn:false,
        lastLoggedIndays:["monday", "tuesday"],
      //sym :"mykey1"  but it is wrong because it  cannot give a datatype of symbol
      [sym] :"mykey1" //it is correct syntax use in square barckets
}
// console.log(jsUser[sym]); //access bhi square barckets ke sath


// console.log(typeof jsUser[sym]);

// console.log(typeof jsUser.sym); //so it gives type as string so interview rejects..
// console.log(typeof sym1); type is undefined
//  console.log(jsUser.fullName)  // how to call properties of object objectname.property;
// dot(.) to access properties is good but it cannot access all the properties because it can understand
//any property like age:20; so here this take bydefault age as a string... but if we give a string in real 
// so it fails.........

// so we use the method to acces object is ::: object_name["properties"]

console.log(jsUser["gmail"]);   // other and best method to acces properties of object...
//console.log(jsUser.["age"]); here always error occur because it already thiks this as string**********

// jsUser.gmail="him234345.gmail.com"
// console.log(jsUser["gmail"]);
// Object.freeze(jsUser)// means ye freeze krde ga aage nahi change krne dega
// jsUser.gmail = "jatin@1234.gmail"
// console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hlo js user")
}
jsUser.greetingTwo = function () {
  console.log(`Hlo js User , ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());