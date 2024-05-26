//Primitive Data type : Are Of 7 Types:
// Number , bigInt , Null , Undefined , String , Boolean , Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null

let userEmail;
//console.log(typeof scoreValue);

const  Id = Symbol("235")
const anotherId = Symbol("235")
//console.log(Id === anotherId);
// jo bhi symbol melikhe ge vo kabhi same nhi hoga because symbol ka kaam hi yahi hh

//const bigNumber = 45678654736273n//n is used for to convert number into bigINt
//console.log(typeof bigNumber);




// Reference or Non Primitive Data type:
// Array , Function , Object

const Bhagwan = ["shiv" , "bramha" ,"vishnu"];

 let myObj = {
           Name : "puneet",
           age: 20
}

const myFunction = function() {

    console.log("puneet chauhan")
    
}


//***************************Stack and Heap***************************************

//Stack(primitive)    and   heap(non-primitive)

//Means in stack we have give the copy of data not actual value
//so change in stack are in copy value not original value....
//whereas in heap we have the reference of original value
//so change occur in original value

//*************For example**************
let userOne ={

    email :"pc3633433@gmail.com",
    Upi  : "abc.ybl"
}
 
let userTwo = userOne;
 userTwo.email = "him@135236.com"//in object we can access any value by .(dot)and name of objet

console.log(userOne.email);
console.log(userTwo.email);



//****************Example of stack********************

let userName = "puneet singh chauhan"

let userThree = userName;
userThree = "jatin singh"

console.log(userName);
console.log(userThree);


