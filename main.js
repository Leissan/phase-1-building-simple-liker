// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
//in index .html we added modal class=hidden

//When a user clicks on an empty heart:
//Invoke mimicServerCall to simulate making a server request

//Every heart has a class of .like-glyph
//I need to add an event listener to every instance of that class

let heartsCollection=document.getElementsByClassName('like-glyph')
console.log(heartsCollection)

//turn heartsCollection into an array



let heartsNodeArray=[...heartsCollection]

let modal =document.getElementById('modal')
let modalParagraph=document.getElementById('modal-message')

////add event listener to each heart (two ways below)
//for (let index=0; index<heartsNodeArray.length; index++){
  //heartsNodeArray[index].addEventListener('click', mimicServerCall)
//}

//heartNode is anyname we can use here to indicate we need each element from heartNodeArray

//When the "server" returns a failure status:
//Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
//(so after mimicServer is called, we need to add .catch to it)

let callServerAndCatch=(event)=>{
  mimicServerCall()
  .then(()=> handleResponse(event))
  .catch(error=> handleError( error))
}

//remove class from modal
//Display the error modal by removing the .hidden class
//Display the server error message in the modal
//Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
 let handleError=(errorMessage)=>{
   modal.classList.remove('hidden')
   modalParagraph.innerText=errorMessage
   setTimeout(()=> {
     modal.classList.add('hidden')
     modalParagraph.innerText=""
    }, 3000)
   p.remove()
}

//When the "server" returns a success status:
//Change the heart to a full heart
//Add the .activated-heart class to make the heart appear red
  //When the "server" returns a success status:
//Change the heart to a full heart
//When a user clicks on a full heart:
//Change the heart back to an empty heart
//Remove the .activated-heart class
let handleResponse=(event)=>{ 
  if (event.target.textContent===EMPTY_HEART){
    event.target.classList.add('activated-heart')
    event.target.textContent=FULL_HEART
  } else{
    event.target.classList.remove('activated-heart')

    event.target.textContent=EMPTY_HEART
  }
}


heartsNodeArray.map(heartNode=> {
  heartNode.addEventListener('click', callServerAndCatch)
})



//Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
//Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.*/


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log('clicked!')
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
