// Username and password validation
function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('errorMessage');

  // Clear any previous error message
  errorMessage.textContent = "";

  // Set predefined username and password
  var correctUsername = "economics";
  var correctPassword = "Class11";

  // Check if the password is correct
  if (password === correctPassword) {
    errorMessage.style.color = "green";
    typeEffect(errorMessage, "Password is correct.");
  } else {
    errorMessage.style.color = "red";
    typeEffect(errorMessage, "Password is incorrect.");
  }
}

// Function to create typing effect for the error message
function typeEffect(element, text) {
  element.textContent = "";
  let i = 0;
  const speed = 50; // Typing speed in milliseconds

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
