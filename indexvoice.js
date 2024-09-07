  
        // Function to play the welcome message
        function speak(text) {
            var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance(text);
            utterThis.voice = synth.getVoices()[0]; // Selects the first available voice
            synth.speak(utterThis);
        }

        // Call the function when the page loads
        window.onload = function() {
            speak("Enter the Credentials below");
        };
    
