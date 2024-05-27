// const score = 500
// console.log(score);

const Balance = new Number(502.78)
// console.log(Balance);

// console.log(Balance.toString())

//console.log(Balance.toFixed(2));//used to fixed the value
// console.log(Balance.toPrecision(3));
//expected output:500.8
//for (3) expected output is 501

const Rupees = 1000000
//console.log(Rupees.toLocaleString('en-IN'))//without descibe standard it answer in us standard but "en-IN"
//is indian standard so commas according ti indian system 10,00,000...


//*******************************************Maths*****************************************************

// console.log(Math)
// console.log(Math.abs(-6))//abs means absolute value used for make - to +...
// console.log(Math.round(5.4))
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4 , 5 , 6, 7 ,2));
// console.log(Math.max(4 , 5 , 6, 7 ,2));

console.log(Math.random());//digit given between 0 t0 1..

console.log(Math.random()*10)+1  //To avoid 0.01 or something 0.0___ we add 1 so value always > than 1..

console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;
 console.log(Math.floor(Math.random() * (max - min + 1)) + min)// Important******
