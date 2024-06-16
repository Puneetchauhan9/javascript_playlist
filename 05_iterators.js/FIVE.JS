// for each loop

const coding = ['js','py','ruby','swift','c++','c','java']

// coding.forEach( function (val){
//     console.log(val);
// })   // because function is call back so we can remove  name

// coding.forEach((item)=>{
//     console.log(item);
// }) by arrow function...

// function printMe(item) {
//     console.log(item);
//  } // execution yha krdo

//  coding.forEach(printMe) // and kahi call krlo without ececution...

// coding.forEach((item , index , arr) => {  three parameters can call tems with index and with array....
//      console.log(item , index , arr);
// })


//*************************************************array ke andar object ka access **********************************

const arr= [
    {
      languageName : 'Javascript',
    languageFilename : 'js'

    }
    ,
    {
        languageName:'python',
        languageFilename:'py'
    },
    {
       languageName:'java',
       languageFilename:'java'
    }
]

arr.forEach( (items)=>{
  console.log(items.languageFilename);
})

console.log(arr)
