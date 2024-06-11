//IIFE STANDS FOR IMEDIATE INVOKED FUNCTION EXPRESSION...

// function chai(){
//     console.log('puneet chauhan');
// }
 
// chai()  //simple function execution...

//  (function chai(){     
//     console.log('puneet chauhan');
// }) ()  // function execution with iife and name function..

//********************** Function call without name with arrow function iife...*********

//  ((name)=> {
//     console.log(name);
//  }) ('puneet chuahan')   iife on arrow function....

(function chai(){     
         console.log('puneet chauhan');
     }) ();

// we execute function with name or rrow function so it occurs error so we add semicolon to remove error
  ((name)=> {
    console.log(name);
  }) ('puneet chuahan1') 

