
    // Function to show the custom prompt
    function showPrompt() {
        document.getElementById('prompt-overlay').style.display = 'block';
    }

    // Function to play the welcome message
    function speak(text) {
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance(text);
        
        // Check if voices are loaded
        var voices = synth.getVoices();
        if (voices.length > 0) {
            utterThis.voice = voices[0]; // Selects the first available voice
            synth.speak(utterThis);
        } else {
            // Wait for the voiceschanged event to ensure voices are available
            synth.onvoiceschanged = function() {
                utterThis.voice = synth.getVoices()[0];
                synth.speak(utterThis);
            };
        }
    }

    // When the page loads, show the custom prompt
    window.onload = function() {
        showPrompt();

        // Handle the submit button click
        document.getElementById('prompt-btn').onclick = function() {
            var userName = document.getElementById('prompt-input').value;

            // Hide the prompt overlay
            document.getElementById('prompt-overlay').style.display = 'none';

            // If the user provides a name, personalize the welcome message
            if (userName) {
                speak("Welcome to the website, " + userName + "!");
            } else {
                speak("Welcome to the website!");
            }
        };
    };
