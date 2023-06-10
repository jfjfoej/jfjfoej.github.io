// Get DOM elements
const priceInput = document.getElementById('price-input');
const priceUpButton = document.getElementById('price-up');
const priceDownButton = document.getElementById('price-down');
const customerCount = document.getElementById('customer-count');
const revenue = document.getElementById('revenue');
const result = document.getElementById('result');
const checkButton = document.getElementById('check-button');
const nextProblemButton = document.getElementById('next-problem-button')

// Initial values
let price = 10;
let customers = 1000;
let maxRevenue = 18000;

// Update price and customer count
function updateDisplay() {
  priceInput.value = price;
  customerCount.textContent = customers;
}

// Update revenue based on price and customers
function updateRevenue() {
  const totalRevenue = price * customers;
  revenue.textContent = totalRevenue;
}

// Check the revenue
checkButton.addEventListener('click', () => {
  const totalRevenue = price * customers;
  if (totalRevenue === maxRevenue) {
    result.textContent = 'Good Job!';
    result.style.color = 'green';
    nextProblemButton.classList.remove('hidden')
  } else {
    result.textContent = 'Not yet the Max Revenue';
    result.style.color = 'red';
  }
});

// Increase price function
priceUpButton.addEventListener('click', () => {
  price++;
  customers -= 20;
  updateDisplay();
  updateRevenue();
});

// Decrease price function
priceDownButton.addEventListener('click', () => {
  price--;
  customers += 20;
  updateDisplay();
  updateRevenue();
});

// Allow manual price input
priceInput.addEventListener('input', () => {
  const newPrice = parseInt(priceInput.value);
  if (!isNaN(newPrice)) {
    price = newPrice;
    customers = Math.max(0, 1000 - 20 * (price - 10));
    updateRevenue();
  }
});

// Initial display update
updateDisplay();
updateRevenue();
