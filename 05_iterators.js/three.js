// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

//  const myHeroes =  ["baba latadhari","panch veer","shiv"]

//  for (const value of myHeroes) {
//      console.log(value);
//  }

// const greetings = "Good Morning"
// for (const greet of greetings) {
//     console.log(greet);
// }

//*************************************************** MAP**************************************************************

const map = new Map()

map.set("IN" , "INDIA")
map.set("US", "UNITED STATES OF AMERICA")
map.set("FR" , "France")
map.set("IN","INDIA") // india can not repeat because it can contain only unique value..

// console.log(map.get("IN"));

// console.log(map);

for (const [key , value] of map) {
    //console.log(key , '-:' , value);
    
}

const myObject = {
    game1 : 'Batball',
    game2: 'cricket'
}

for (const [key , value] of myObject) {
    console.log(key , '-:' , value); 
} // map is iteratable but object is not iteratable by this method..
 
// object also iteratable but by another method...
