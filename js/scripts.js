$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault()
    console.log("submitted");
  });
}); 
