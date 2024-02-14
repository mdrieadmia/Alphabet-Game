// Show an element by id
function showElement(elementId){
    const elementItem = document.getElementById(elementId);
    elementItem.classList.remove('hidden')
}
// Hide an element by id
function hideElement(elementId){
    const elementItem = document.getElementById(elementId);
    elementItem.classList.add('hidden')
}
// Genarate a random letter
function getRandomLetter(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const letter = alphabet.split('');
    const randomLetter = letter[Math.round(Math.random()*25)];
    return randomLetter;
}
// display random letter
function displayRandomLetter(){
    const display = document.getElementById('display_letter');
    const randomLetter = getRandomLetter();
    display.innerText = randomLetter;
    setBackgroundColor(randomLetter);
}
// Set keyboard keys background color for random number
function setBackgroundColor(letterId){
    const randomKey = document.getElementById(letterId);
    randomKey.classList.add('bg-orange-400');
}