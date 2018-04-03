console.log('ready to prophesy');

function buttonClicked(){
 var el = document.getElementById("overlay");
 el.style.visibility = (el.style.visibility=="visible")? "hidden":"visible";
}

function askQ(){
    var answer = "something went wrong";
    var question = document.getElementById("question").value;
       var output = document.getElementById("output");
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
       output.innerHTML = "<br><br><h2>You asked me:<br> "+question+"<br><br>Here's my answer:<br>"+answer+"</h2>";
     }
