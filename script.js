

// Part 1: Event Handling Setup


// Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Feature
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');

let count = 0;

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;
}


// Part 3: Form Validation


const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

// Helper function: Validate email with regex
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default submission

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formMessage.textContent = '';

  let isValid = true;

  // Validate Name (min 3 chars)
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    isValid = false;
  }

  // Validate Email (simple regex)
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Validate Password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    form.reset();
    count = 0;
    updateCounter();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fix the errors above and try again.';
  }
});
