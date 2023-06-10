document.addEventListener("DOMContentLoaded", function() {
    const priceElement = document.getElementById("price");
    const price = 10 + (1000 / 40);
    priceElement.textContent = price.toFixed(2);
  });
  
  const nextProblemButton = document.getElementById("next-problem-button");
  nextProblemButton.addEventListener("click", function() {
    // Redirect to the next problem page
    window.location.href = "next-problem.html";
  });
  