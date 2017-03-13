$( document ).ready(function() {
var quiz = document.getElementById('quiz');

// create a count down timer that will stop the game when time runs out. 
var timeLeft = 60;
var interval = setInterval(function(){
  timeLeft--;
  $('#timeLeft').text("Time remaining: "+timeLeft);
  if(timeLeft === 0 )
             clearInterval(interval); 
  },
  1000);

});


// If radio button "optionR" clicked, then sum up the value of 1.  
// Else if "optionX" radio button is selected, sum up a value of 0.
// Display total score of user over the perfect score.

function isChecked(){ 
  var checked = $("input:radio.optionR:checked");
  
  
    var sum = checked.length;
    $('#correctAnswers').text("Correct Answers: "+sum+"/5");
    
}

// Once time is up the triva will show you your total score.
