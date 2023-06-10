var infectedPopulation = 1;
var totalPopulation = 1000;
var days = 0;

const nextProblemButton = document.getElementById('next-problem-button')

function nextDay() {
    if (days > 0) {
        infectedPopulation *= 2;
    }
    days++;
    updateCircles();
    clearResult();
}

function updateCircles() {
    var circleContainer = document.getElementById("circle-container");
    circleContainer.innerHTML = ""; // Clear previous circles

    var maxCirclesPerRow = 20;
    var circleSize = Math.floor(500 / Math.sqrt(totalPopulation));

    for (var i = 0; i < infectedPopulation; i++) {
        var circle = document.createElement("div");
        circle.className = "circle";
        circle.style.width = circleSize + "px";
        circle.style.height = circleSize + "px";
        circleContainer.appendChild(circle);

        if ((i + 1) % maxCirclesPerRow === 0) {
            circleContainer.appendChild(document.createElement("br"));
        }
    }
}

function checkAnswer() {
    var answerInput = document.getElementById("answer-input");
    var userAnswer = parseInt(answerInput.value);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    if (userAnswer === 11) {
        resultElement.innerHTML = "Correct!";
        resultElement.style.color = "green";
        nextProblemButton.classList.remove('hidden')
    } else {
        resultElement.innerHTML = "Incorrect!";
        resultElement.style.color = "red";
    }
}

function clearResult() {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
}
