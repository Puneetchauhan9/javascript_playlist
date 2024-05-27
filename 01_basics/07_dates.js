//      Dates    //

// let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

// console.log(typeof myDates);//intervew question type of my date is object..


//let myCreatedDate = new Date(2024 , 0o4 , 27 , 10 , 0o0);//declare as(year:month start to 0: date)..
//we cannot write 04 or 00 because octal leterals are not alowed write 0o0..


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-05-27") //according to us date system (yy-mm-dd)..
//let myCreatedDate = new Date("05-27-2024") //according to indian system (mm-dd-yy)
//console.log(myCreatedDate.toLocaleString());


//let myTimeStamp = Date.now()

// console.log(myTimeStamp);//time gives in millisecoond...
// console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
console.log(newDate);
 console.log(newDate.getMonth() +1);//it gives mont 4 because start with zero
console.log(newDate.getDay());//getday gives day of the week

// `${newDate.getDay()} and the time `

 newDate.toLocaleString('default', {
    weekday: "long",
    
 })