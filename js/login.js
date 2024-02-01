import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firbase";
import { loding_button , redirect , resetButton } from "./utils/utils";

// Get a reference to the sign-up form
const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errAlert = document.getElementById("errAlert");
const successAlert = document.getElementById("successAlert");



console.log(loginForm);


// Add event listener to the form submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get user input values
const formValues = {
email:document.getElementById('email').value,
password:document.getElementById('password').value,
  }

  // Validate email, password, and name
  if (!validateEmail(formValues.email)) {
    dangerAlert('Invalid email address');
    email.classList.add('is-invalid')
    return;
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }

  if (!validatePassword(formValues.password)) {
    dangerAlert('Invalid password. Password must be at least 6 characters long');
    password.classList.add('is-invalid')
    return;
  } else {
    password.classList.remove('is-invalid')
    password.classList.add('is-valid')
  }


  try {
    loding_button()
    const user = await signInWithEmailAndPassword(auth , formValues.email , formValues.password);
    if (user) {
      errAlert.classList.add('d-none');
      successAlert.classList.remove('d-none');
      successAlert.textContent = 'User login successfully!';
      loginForm.reset();
      resetButton();
      redirect();
    }

  } catch (error) {
    console.error(error);
    resetButton()
    email.classList.remove('is-valid')
    password.classList.remove('is-valid')
    email.classList.add('is-unvalid')
    password.classList.add('is-unvalid')
    if (error.code === "auth/email-already-in-use") {
      errAlert.textContent = "The email address is already in use.";
    } else if (error.code === "auth/invalid-credential") {
      errAlert.textContent = "this email or password do't exsist";
    }
    else  {
      errAlert.textContent =  error.code;
    }
  }
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation function
function validatePassword(password) {
  return password.length >= 6;
}

function dangerAlert(msg) {
  errAlert.classList.remove('d-none');
  errAlert.textContent = msg;
}


