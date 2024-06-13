// IF 

//  const temprature = 60;

// if (temprature === 50) {
//     console.log("temprature is fifty");
// }
// else{
//     console.log("temprature is not equal to fifty");
// }


// *******************************operators in javaScript****************************************************

// const score = 200

// if (score > 100) {
//         let power = "fly"
//          console.log(`User power: ${power}`);
// }

// // console.log(`User power: ${power}`); Power is not defined..

const balance = 1000

//  if (balance > 500) console.log("test"),console.log("test2"); implicit function

 if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
 } else if (balance < 900) {
     console.log("less than 750");
    
 } else {
     console.log("less than 1200");

 }

 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

