document.addEventListener("DOMContentLoaded", function() {
  const fieldLengthSlider = document.getElementById("field-length");
  const fieldWidthSlider = document.getElementById("field-width");
  const fieldLengthValue = document.getElementById("field-length-value");
  const fieldWidthValue = document.getElementById("field-width-value");
  const currentArea = document.getElementById("current-area");
  const maxArea = document.getElementById("max-area");
  const remainingFencing = document.getElementById("remaining-fencing");
  const fieldCanvas = document.getElementById("field-canvas");
  const ctx = fieldCanvas.getContext("2d");
  const checkAnswerButton = document.getElementById("check-answer");
  const resultText = document.getElementById("result");
  const nextProblemButton = document.getElementById('next-problem-button')

  let maxAreaValue = 2500;

  // Update the field length value
  fieldLengthSlider.addEventListener("input", function() {
    fieldLengthValue.textContent = fieldLengthSlider.value;
    updateField();
  });

  // Update the field width value
  fieldWidthSlider.addEventListener("input", function() {
    fieldWidthValue.textContent = fieldWidthSlider.value;
    updateField();
  });

  // Update the field and calculate area
  function updateField() {
    const length = parseInt(fieldLengthSlider.value);
    const width = parseInt(fieldWidthSlider.value);

    const area = length * width;
    currentArea.textContent = area;

    const remaining = 200 - (2 * (length + width));
    remainingFencing.textContent = remaining;

    drawField(length, width);
  }

  // Draw the field on the canvas
  function drawField(length, width) {
    const canvasWidth = fieldCanvas.width;
    const canvasHeight = fieldCanvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "green";
    ctx.lineWidth = 2;

    const rectX = canvasWidth / 2 - length;
    const rectY = canvasHeight / 2 - width;

    ctx.fillRect(rectX, rectY, length * 2, width * 2);
    ctx.strokeRect(rectX, rectY, length * 2, width * 2);
  }

  // Check the answer
  checkAnswerButton.addEventListener("click", function() {
    const length = parseInt(fieldLengthSlider.value);
    const width = parseInt(fieldWidthSlider.value);

    if (length * width === maxAreaValue) {
      resultText.textContent = "Good Job!";
      resultText.style.color = "green";
      nextProblemButton.classList.remove('hidden')
    } else {
      resultText.textContent = "Not Yet the Max Area";
      resultText.style.color = "red";
    }
  });

  // Initialize the field
  updateField();
});
