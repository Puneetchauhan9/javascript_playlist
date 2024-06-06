const tinderUser = new Object() //this id singelton object..

// const oyoUser = {} // this is also object but not singleton..

// tinderUser.id = "123pun"
// tinderUser.name ="puneet"

//  console.log(tinderUser);
// console.log(oyoUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "puneet",
            lastname: "chauhan"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)