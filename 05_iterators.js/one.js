// for loop

// for(let i = 0; i<=10; i++){
//     console.log(i);
// }


for (let i = 1;  i<=10; i++){
    //console.log(`outer loop is ${i}`);
   for(let j =1; j<=10; j++){
    //console.log(`inner loop is ${j} and outer loop is ${i}`);
    //console.log(i + '*' + j +' = '  +i*j );
   } 
}

 const myArray = ['Dhunibaba','Kirmada','Bheem']
//  let arrayLength =myArray.length
//  console.log(arrayLength);
 for(let i = 0; i<myArray.length; i++){
    // console.log(i);
    let arrayAccess = myArray[i]
    //console.log(arrayAccess);
 }

//********************************** BREAK AND CONTINUE********************************

for (let i = 1; i<=10; i++){
    if(i ==4)
        break;
 //console.log(i);
}


for (let i = 1; i<=10; i++){
    if(i ==4){
console.log("detected four");
        continue;
    }
 console.log(`value of i is ${i}`);
}










