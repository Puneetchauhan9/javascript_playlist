const tinderUser = new Object() //this id singelton object..

// const oyoUser = {} // this is also object but not singleton..

  tinderUser.id = "123pun"
  tinderUser.name ="puneet"
  tinderUser.isLoggedIn = true


// console.log(oyoUser);


// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "puneet",
//             lastname: "chauhan"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = { 1 : "a" , 2 : "b"}

const obj2 = { 1: "a" , 2 : "b"}

// console.log(obj1 ,  obj2);
// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3 == obj1);
//object.assign is property in which both {} is just like a target andd all other s sourse so all 
//stored in {}empty set... but if we can take obj1 is source so answer is same but {} set practie is good
// console.log(obj3);

// const obj4 = {...obj1 , ...obj2}

// console.log(obj4);

// const user = [
// {
//     Id: 1,
//     emailId : "pun@rrds.chatgpt"
// },

// {
//     Id:2,
//     emailId1:"rss @777.gmail.com"
// },

// {
//     id:3,
//     gmailId2:"ssr@6675.facebook.com" 
// }
// ]
//   let abc =(user[1].gmailId2)
//   console.log(abc);



// TO CHECK THEIR IS AN OBJECT EXISTS OR NOT BY PROPERTY "HAS OWN PROPERTY"

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLoggedin'))


//************* ********* destruucturing of an object*************************************

const course = {
      courseName :"js_playlist",
      Price :599,
      courseInstructor :"Hitesh"
}

//so i want to call name of course
// console.log(course.courseName); // but its write method but we use destructuring

const {courseName:Name} = course //this is destructurinng

//console.log(courseName)
// console.log(Name);

// { 
//     "name": "puneet",
//     "coursename": "js_playlist", {}inka matlab he json he 
//but isme keys bhi string and value to string ha eee
//     "price": "free"
// }

// [
//   {},
//   {},
//   {}
// ]   