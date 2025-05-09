const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const developersBtn = document.getElementById('developersBtn');
const developersBox = document.getElementById('developersBox');
const toolsBtn = document.getElementById('toolsBtn');
const toolsDropdown = document.getElementById('toolsDropdown');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

hamburger.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    sideMenu.classList.toggle('open');
  }
});

developersBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (developersBox.hasAttribute('hidden')) {
    developersBox.removeAttribute('hidden');
    developersBtn.setAttribute('aria-expanded', 'true');
  } else {
    developersBox.setAttribute('hidden', '');
    developersBtn.setAttribute('aria-expanded', 'false');
  }
});

toolsBtn.addEventListener('click', () => {
  if (toolsDropdown.hasAttribute('hidden')) {
    toolsDropdown.removeAttribute('hidden');
    toolsDropdown.classList.add('open');
    toolsBtn.setAttribute('aria-expanded', 'true');
  } else {
    toolsDropdown.setAttribute('hidden', '');
    toolsDropdown.classList.remove('open');
    toolsBtn.setAttribute('aria-expanded', 'false');
  }
});

// Heading text rotation logic with fade out/in effect
const headingLeft = document.getElementById('headingLeft');
const headingRight = document.getElementById('headingRight');

const states = [
  ["Proxy", "Dev"],
  ["Proxy", "Tools"],
  ["Proxy", "Tech"],
  ["Proxy", "Web"],
];
let index = 0;

function fadeTextChange(leftText, rightText) {
  headingLeft.style.opacity = 0;
  headingRight.style.opacity = 0;

  setTimeout(() => {
    headingLeft.textContent = leftText;
    headingRight.textContent = rightText;

    headingLeft.style.opacity = 1;
    headingRight.style.opacity = 1;
  }, 400);
}

document.getElementById('calculateBtn').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultDiv = document.getElementById('result');
  const tipsDiv = document.getElementById('tips');

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = "Please enter valid weight and height.";
      tipsDiv.textContent = "";
      return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  resultDiv.textContent = `Your BMI is: ${bmi}`;

  // Provide tips based on BMI
  let tips = "";
  if (bmi < 18.5) {
      tips = "You are underweight. Consider increasing your calorie intake with nutritious foods.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      tips = "You have a normal weight. Maintain a balanced diet and regular exercise.";
  } else if (bmi >= 25 && bmi < 29.9) {
      tips = "You are overweight. Consider a balanced diet and regular physical activity to lose weight.";
  } else {
      tips = "You are obese. It's advisable to consult a healthcare provider for personalized advice.";
  }

  tipsDiv.textContent = tips;
});


function cycleHeading() {
  index++;
  if (index >= states.length) index = 0;
  fadeTextChange(states[index][0], states[index][1]);
}

// Initialize opacity for smooth fade
headingLeft.style.transition = "opacity 0.4s ease";
headingRight.style.transition = "opacity 0.4s ease";

setInterval(cycleHeading, 3000);

