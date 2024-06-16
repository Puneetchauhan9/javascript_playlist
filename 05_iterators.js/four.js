const myObject = {
    game1 : 'Batball',
    game2: 'cricket'
}

// for (const [key , value] of myObject) {
//     console.log(key , '-:' , value); 
// } not iteratable by this method

for (const key in myObject) {
    
    //console.log(`${key} is ${myObject[key]}`); // this the method to iterate object... the loop is forin loop..
    
} // for object

const arr = ['js','ruby','py','swift','sql','c++']

for (const index in arr) {
   //console.log(`${index} has element ${arr[index]}`);
}

 const map = new Map()
 map.set('IN', "India")
  map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
   console.log(key);
 }


 // basic differnce between forin and forof loop  for loop picks directly keys value but for in picks keys...






