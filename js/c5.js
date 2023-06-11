const slider = document.getElementById("slider");
const greenRectangle = document.getElementById("green-rectangle");
const blueRectangle = document.getElementById("blue-rectangle");
const answerInput = document.getElementById("answer");
const resultMessage = document.getElementById("result");
const congratsLink = document.getElementById("congrats-link");

slider.addEventListener("input", function() {
  const value = parseInt(slider.value);
  const greenLength = value * 5;
  const blueLength = value * 3;

  greenRectangle.style.width = greenLength + "px";
  blueRectangle.style.width = blueLength + "px";
});

function checkAnswer() {
  const answer = parseInt(answerInput.value);
  
  if (answer === 2) {
    resultMessage.style.color = "green";
    resultMessage.textContent = "Good job";
    congratsLink.style.display = "inline";
  } else {
    resultMessage.style.color = "red";
    resultMessage.textContent = "Incorrect";
    congratsLink.style.display = "none";
  }
}
