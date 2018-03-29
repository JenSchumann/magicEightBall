console.log('ready to prophesy');
// var output = document.getElementById("output");

function askQ(){
    var answer = "something went wrong";
       var output = document.getElementById("output");

       var question = prompt("Ask me anything");
       var randomNumber = Math.floor(Math.random()*6);
       switch (randomNumber){
           case 0:
               answer = "It will work out.";
               break;
           case 1:
               answer = "There's a slight possibility.";
               break;
           case 2:
               answer = "Probably not.";
               break;
           case 3:
               answer = "Highly likely.";
           default:
               answer = "I don't know about that.";
       }
       output.innerHTML = "You asked me "+question+"<br>Here's my answer: "+answer
     }
  // output.innerHTML = "You asked me "+question+"<br>Here's my answer: "+answer
