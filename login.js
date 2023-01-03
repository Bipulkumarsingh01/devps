const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function validateLoginForm() {
	// Get the form element
	var form = document.getElementById("signIn");
  
	// Get the email and password elements
	var email = form.elements["email"];
	var password = form.elements["password"];
  
	// Check if the email field is empty
	if (email.value.trim() == "") {
	  // If it is, display an error message and return false
	  document.getElementById("email-error").innerHTML = "Please enter your email.";
	  email.focus();
	  return false;
	}
  
	// Check if the password field is empty
	if (password.value.trim() == "") {
	  // If it is, display an error message and return false
	  document.getElementById("password-error").innerHTML = "Please enter your password.";
	  password.focus();
	  return false;
	}
  
	// If all fields are valid, return true
	return true;
  }

  
  function validateSignupForm() {
	// Get the form element
	var form = document.getElementById("signUp");
  
	// Get the email, password, and confirm password elements
	var email = form.elements["email"];
	var password = form.elements["password"];
	var confirmPassword = form.elements["confirm-password"];
  
	// Check if the email field is empty
	if (email.value.trim() == "") {
	  // If it is, display an error message and return false
	  document.getElementById("email-error").innerHTML = "Please enter your email.";
	  email.focus();
	  return false;
	}
  
	// Check if the password field is empty
	if (password.value.trim() == "") {
	  // If it is, display an error message and return false
	  document.getElementById("password-error").innerHTML = "Please enter a password.";
	  password.focus();
	  return false;
	}
  
	// Check if the confirm password field is empty
	if (confirmPassword.value.trim() == "") {
	  // If it is, display an error message and return false
	  document.getElementById("confirm-password-error").innerHTML = "Please confirm your password.";
	  confirmPassword.focus();
	  return false;
	}
  
	// Check if the password and confirm password fields match
	if (password.value != confirmPassword.value) {
	  // If they don't, display an error message and return false
	  document.getElementById("password-error").innerHTML = "Passwords do not match.";
	  document.getElementById("confirm-password-error").innerHTML = "Passwords do not match.";
	  password.focus();
	  return false;
	}
  
	// If all fields are valid, return true
	return true;
  }
  




