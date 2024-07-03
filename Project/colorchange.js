const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

// button.forEach( (button) => {
//    button.addEventListener('click', function(event){
//      console.log(event)
//       console.log(event.target) 
      // if(event.target.id === 'grey')
      // body.style.backgroundColor = event.target.id 
      // if(event.target.id === 'white')
      // body.style.backgroundColor = event.target.id 
      // if(event.target.id === 'blue')
      // body.style.backgroundColor = event.target.id 
      // if(event.target.id === 'yellow')
      // body.style.backgroundColor = event.target.id 
   
// By HElp of Switch Case....

      // switch(event.target.id){
      //   case 'grey':
      //      body.style.backgroundColor = 'grey'
      //      break;
      //   case 'white':
      //     body.style.backgroundColor = 'white'
      //     break;
      // case 'blue':
      //   body.style.backgroundColor = 'blue'
      //   break;
      // case 'yellow':
      //   body.style.backgroundColor = 'yellow'
      //   break;
      //  default:
      //  console.log('no color match')
          
      // }
// BY help of Map.....

const colorMaping = {
  grey : 'grey',
  white :'white',
  blue : 'blue',
  yellow : 'yellow'
}
body.addEventListener('click' , function(event){
  const color = colorMaping[event.target.id]
  if(color){
  body.style.backgroundColor = color
  }
  else{
    console.log('no matching case')
  }
})