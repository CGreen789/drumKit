/* Drumkit Webpage

This is a webpage that allows you to play a drumkit by clicking on the buttons or by pressing the corresponding keys on your keyboard.

Task 1 - Create buttons in the HTML file ✅

Task 2 - Upload all the sounds ✅

Task 3 - Create a function that plays the correct sound when the button is clicked ✅

Task 4 - Event listener for the buttons ✅

Task 5 - Styling the buttons so they change when a button is pressed

Task 6 - Styling the page


*/

//Assign all sounds to variables
const crashCymbal = new Audio('./assets/crashCymbal.wav');
const hiTom = new Audio('./assets/highTom.wav');
const lowTom = new Audio('./assets/lowTom.wav');
const snareDrum = new Audio('./assets/snare.wav');
const kickDrum = new Audio('./assets/kickDrum.wav');


//Create a function that plays the correct sound when the button is clicked
function playSound(sound) {
    sound.play();
}

//Event listener for the buttons
//Crash Cymbal
document.getElementById('crash-cymbal').addEventListener('click', function() {
    playSound(crashCymbal);
});
//Hi Tom
document.getElementById('hi-tom').addEventListener('click', function() {
    playSound(hiTom);
});
//Low Tom
document.getElementById('low-tom').addEventListener('click', function() {
    playSound(lowTom);
});
//Snare Drum
document.getElementById('snare-drum').addEventListener('click', function() {
    playSound(snareDrum);
});
//Kick Drum
document.getElementById('kick-drum').addEventListener('click', function() {
    playSound(kickDrum);
});

// add event listeners to the div elements that match the keycodes
//Crash Cymbal
document.getElementById('crash-cymbal').addEventListener('keydown', function() {
    playSound(crashCymbal);
});
//Hi Tom
document.getElementById('hi-tom').addEventListener('keydown', function() {
    playSound(hiTom);
});
//Low Tom
document.getElementById('low-tom').addEventListener('keydown', function() {
    playSound(lowTom);
});
//Snare Drum
document.getElementById('snare-drum').addEventListener('keydown', function() {
    playSound(snareDrum);
});
//Kick Drum
document.getElementById('kick-drum').addEventListener('keydown', function() {
    playSound(kickDrum);
});