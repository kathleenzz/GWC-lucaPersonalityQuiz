/*Add your JavaScript here*/
var questionCount = 0;

var scoreLuca = 0;
var scoreAlberto = 0;
var scoreGuilia = 0;
var scoreErcole = 0;

var restart = 0;
var result = 0;

var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');
var q1a3 = document.getElementById('q1a3');
var q1a4 = document.getElementById('q1a4');

var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');
var q2a3 = document.getElementById('q2a3');
var q2a4 = document.getElementById('q2a4');

var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');
var q3a3 = document.getElementById('q3a3');
var q3a4 = document.getElementById('q3a4');

var q4a1 = document.getElementById('q4a1');
var q4a2 = document.getElementById('q4a2');
var q4a3 = document.getElementById('q4a3');
var q4a4 = document.getElementById('q4a4');

var result = document.getElementById('result');
var restart = document.getElementById('restart');

q1a1.addEventListener('click', alberto);
q1a2.addEventListener('click', guilia);
q1a3.addEventListener('click', ercole);
q1a4.addEventListener('click', luca);

q2a1.addEventListener('click', luca);
q2a2.addEventListener('click', guilia);
q2a3.addEventListener('click', alberto);
q2a4.addEventListener('click', ercole);

q3a1.addEventListener('click', alberto);
q3a2.addEventListener('click', luca);
q3a3.addEventListener('click', ercole);
q3a4.addEventListener('click', guilia);

q4a1.addEventListener('click', guilia);
q4a2.addEventListener('click', alberto);
q4a3.addEventListener('click', luca);
q4a4.addEventListener('click', ercole);


restart.addEventListener('click', updateRestart);

function alberto() {
  scoreAlberto += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "scoreAlberto =" + scoreAlberto);

  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();
  }
}



function guilia() {
  scoreGuilia += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "scoreGuilia=" + scoreGuilia);

  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();
  }

}




function ercole() {
  scoreErcole += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "scoreErcole =" + scoreErcole);

  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();

  }

}

function luca() {
  scoreLuca += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "scoreLuca =" + scoreLuca);

  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();

  }

}


function updateResult() {
  if (scoreAlberto >= 2) {
    result.innerHTML = "You are Alberto!";
    console.log("You are Alberto!");
  } else if (scoreGuilia >= 2) {
    result.innerHTML = "You are Guilia!";
    console.log("You are Guilia!");
  } else if (scoreErcole >= 2) {
    result.innerHTML = "You are Ercole.";
    console.log("You are Ercole.");
  } else if (scoreLuca >= 2) {
    result.innerHTML = "You are Luca!";
    console.log("You are Luca!");
  }
  else {
    result.innerHTML = "You broke my code. ಥ╭╮ಥ  If I had to guess, you're probably Machiavelli.  So just run with that.";
  }
}


function updateRestart() {
  scoreLuca = 0;
  scoreAlberto = 0;
  scoreGuilia = 0;
  scoreErcole = 0;
  questionCount = 0;
  result.innerHTML = "You are...";
  enableButton();
}

// Add the buttons thing here //

q1a1.addEventListener('click', disableButtonQ1);
q1a2.addEventListener('click', disableButtonQ1);
q1a3.addEventListener('click', disableButtonQ1);
q1a4.addEventListener('click', disableButtonQ1);

q2a1.addEventListener('click', disableButtonQ2);
q2a2.addEventListener('click', disableButtonQ2);
q2a3.addEventListener('click', disableButtonQ2);
q2a4.addEventListener('click', disableButtonQ2);

q3a1.addEventListener('click', disableButtonQ3);
q3a2.addEventListener('click', disableButtonQ3);
q3a3.addEventListener('click', disableButtonQ3);
q3a4.addEventListener('click', disableButtonQ3);

q4a1.addEventListener('click', disableButtonQ4);
q4a2.addEventListener('click', disableButtonQ4);
q4a3.addEventListener('click', disableButtonQ4);
q4a4.addEventListener('click', disableButtonQ4);

function disableButtonQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableButtonQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableButtonQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disableButtonQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

function enableButton() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disbabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;

}