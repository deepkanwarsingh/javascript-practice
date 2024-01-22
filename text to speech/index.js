


let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");

speech.voice = speechSynthesis.getVoices()[0]; // Set the default voice

window.speechSynthesis.onvoiceschanged = () => {
    speech.voice = speechSynthesis.getVoices()[0]; // Update the voice when voices change

    voiceSelect.innerHTML = ''; // Clear existing options

    speechSynthesis.getVoices().forEach((voice, i) => {
        voiceSelect.add(new Option(voice.name, i)); // Create and add options
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = speechSynthesis.getVoices()[voiceSelect.value]; // Set the selected voice
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

