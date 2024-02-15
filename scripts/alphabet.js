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
// Set keyboard keys background color for random number
function removeBackgroundColor(letterId){
    const randomKey = document.getElementById(letterId);
    randomKey.classList.remove('bg-orange-400');
}
// Continue Game
function continueGame(){
    showElement('second_screen');
    hideElement('first_screen');
    displayRandomLetter();
}
// User keypress event
function userKeyPressed(event){
    const pressedKey = event.key;
    const expectedKeyElement = document.getElementById('display_letter');
    const expectedKeyText = expectedKeyElement.innerText;
    const expectedKey = expectedKeyText.toLocaleLowerCase();
    if(pressedKey === expectedKey){
        displayRandomLetter();
        removeBackgroundColor(pressedKey);
        const scoreElement = document.getElementById('score');
        const scoreText = scoreElement.innerText;
        let score = parseInt(scoreText);
        score++;
        scoreElement.innerText = score;
    }
    else{
        const lifeElement = document.getElementById('life');
        const lifeText = lifeElement.innerText;
        let life = parseInt(lifeText);
        life--;
        lifeElement.innerText = life;
        if(life === 0 || event.key === 'Escape' || event.key === 'Enter'){
            removeBackgroundColor(expectedKey);
            hideElement('second_screen');
            showElement('third_screen');
            gameOver();
        }
    }
}
// Get user keyboard event
document.addEventListener('keyup', userKeyPressed);

function playAgain(){
    hideElement('third_screen');
    showElement('second_screen')
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = '0';
    const lifeElement = document.getElementById('life');
    lifeElement.innerText = '5';
    continueGame();
}

function gameOver(){
    const lastScore = document.getElementById('lastScore');
    const finalScore = document.getElementById('score').innerText;
    const displayFinalScore = lastScore.innerText=finalScore;
    return displayFinalScore;
}