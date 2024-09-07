window.onload = function load() {
  var intro = document.getElementById("intro");
  var underline = document.getElementById("underline");
  var text = document.getElementById("text");
  var introH = intro.offsetHeight;
  var introW = intro.offsetWidth;
  intro.style.opacity = 1;

  // Center the intro text
  intro.style.left = "calc(50% - " + (introW / 2) + "px)";
  intro.style.top = "calc(50% - " + (introH / 2) + "px)";

  // Prompt the user for their name
  var userName = prompt("Please enter your name:");
  if (!userName) {
    userName = "Guest";
  }

  // Get the current time
  var currentTime = new Date().getHours();
  var greeting = "GOOD MORNING";
  var customMessage = "";
  var audioUrl = "";
  var speechText = "";

  // Determine the appropriate greeting, custom message, and audio based on the time
  if (currentTime >= 5 && currentTime < 12) {
    greeting = "GOOD MORNING";
    customMessage = "Rise and shine!";
    audioUrl = "https://www.soundjay.com/button/beep-07.wav"; // Morning sound
    speechText = `Good morning, ${userName}. Welcome to the site!`;
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "GOOD AFTERNOON";
    customMessage = "Hope you're having a productive day!";
    audioUrl = "https://www.soundjay.com/button/beep-09.wav"; // Afternoon sound
    speechText = `Good afternoon, ${userName}. Hope you're having a productive day!`;
  } else if (currentTime >= 18 && currentTime < 21) {
    greeting = "GOOD EVENING";
    customMessage = "Time to unwind.";
    audioUrl = "https://www.soundjay.com/button/beep-05.wav"; // Evening sound
    speechText = `Good evening, ${userName}. Time to unwind.`;
  } else {
    greeting = "GOOD NIGHT";
    customMessage = "Sweet dreams!";
    audioUrl = "https://www.soundjay.com/button/beep-06.wav"; // Night sound
    speechText = `Good night, ${userName}. Sweet dreams!`;
  }

  // Update the text with the appropriate greeting and custom message
  text.innerHTML = `<h1>${greeting} <a>!</a></h1><p>${customMessage}</p>`;

  // Reapply the animation after updating the content
  text.style.animation = "fadein 1s";  // Apply fade-in animation to the text
  underline.style.animation = "easein 1s ease";  // Apply underline animation

  // Play sound based on the time
  var audio = new Audio(audioUrl);
  audio.play(); // Play the sound on page load

  // Use Web Speech API to speak the greeting
  var utterance = new SpeechSynthesisUtterance(speechText);
  utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female') || speechSynthesis.getVoices()[0]; // Select a cute voice
  utterance.pitch = 1.2; // Adjust pitch for a cute effect
  utterance.rate = 1; // Adjust rate for a clear speech
  speechSynthesis.speak(utterance);

  // Redirect to login.html after 15 seconds
  setTimeout(function() {
    window.location.href = "login.html";
  }, 15000); // 15000 milliseconds = 15 seconds
};

window.onresize = function () {
  var intro = document.getElementById("intro");
  var introH = intro.offsetHeight;
  var introW = intro.offsetWidth;

  // Recalculate the position on window resize
  intro.style.left = "calc(50% - " + (introW / 2) + "px)";
  intro.style.top = "calc(50% - " + (introH / 2) + "px)";
};
