var box = document.getElementById("box");
var advanceButton = document.getElementById("advanceButton");
var boxSize = 200;
var daysPassed = 0;
var answerInput = document.getElementById("answerInput");
var checkButton = document.getElementById("checkButton");
var feedbackText = document.getElementById("feedbackText");
var divider = 1;
const nextProblemButton = document.getElementById('next-problem-button')
updateBox();

advanceButton.addEventListener("click", function() {
  daysPassed += 3;
  divider += 1;
  
  updateBox();
});

checkButton.addEventListener("click", function() {
  var userAnswer = answerInput.value;
  var correctAnswer = "9";

  if (userAnswer === correctAnswer) {
    feedbackText.style.color = "green";
    feedbackText.innerText = "Good Job!";
    nextProblemButton.classList.remove('hidden')
  } else {
    feedbackText.style.color = "red";
    feedbackText.innerText = "Answer is Incorrect";
  }
});

function updateBox() {
  if(daysPassed == 0){
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px"
  }
  else if(daysPassed % 2 == 1){
    box.style.width = (boxSize / (Math.floor(divider / 2) * 2)) + "px";
  }
  else{
    box.style.height = (boxSize / (Math.floor(divider / 2) * 2)) + "px";
  } 

  box.innerText = 200 / (2 ** divider);
}
