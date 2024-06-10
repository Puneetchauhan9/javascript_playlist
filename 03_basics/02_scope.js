// let a = 5
// const b = 7
// var c = 6

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300
// if(true){
//     let a = 5
//     const b = 7   
//     var c = 6
//     console.log("inner:",a); //inside {} brackets all the ites are called scope
// }
//console.log(a);
// console.log(a);
//  console.log(b); throw error because its defne inside not outside...
//  console.log(c);


function one(){
    const username = "puneet chauhan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
one()