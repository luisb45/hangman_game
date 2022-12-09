//Array of words for players to guess
let arrWords = [
'elephant',
'pajama',
'xylophone',
'jigsaw',
'blizzard',
'abruptly',
'jazz',
'quiz',
'executioner',
'nauseous',
'rhythm',
];

//function to pick random word from array
let gameWord = '';
const randomWord = () => {
    gameWord = arrWords[Math.floor(Math.random()* arrWords.length)]
};
randomWord();
console.log(gameWord);


//function that takes random word and splits it / display amount of words 
let guessed = [];
let wordSplit;
const wordToGuess = () => {
    wordSplit = gameWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    
   document.getElementById('wordDisplay').innerHTML = wordSplit;
}
wordToGuess(); 


//generate letter buttons  
const generateButtons = () => {
    let abcButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(i =>
        `<button id='${i}' onClick='makeGuess("${i}")'>${i}</button>`).join(' ');

        document.getElementById('abcd').innerHTML = abcButtons 
}
generateButtons();


//button onclick to make guesses
const makeGuess = (letterGuessed) => {
    if(guessed.indexOf(letterGuessed) === -1){
        guessed.push(letterGuessed)} 

    document.getElementById(letterGuessed).setAttribute('disabled', true);

    if(gameWord.indexOf(letterGuessed) >= 0){
        wordToGuess();
        // should check if won game
    } else if(gameWord.indexOf(letterGuessed) === -1){
        updateWrongGuess();
        checkIfGameLost();
    }
}

//update wrong guess
let wrongGuess = 0;
const updateWrongGuess = () => {
    wrongGuess++
document.getElementById('wrongG').innerHTML = wrongGuess
}


//if wrong guess exceeds max wrong guess / lost game
const checkIfGameLost = () => {
    if(wrongGuess >= 5){
        //update score
        nextRound() // proceeds with next round
    } 
}


//if correctly guesses word / win
const ifGameWon = () => {

}


//update score for players
const updateScore = () => {

}

//function to starts next round for second player 
const nextRound = () => {

}

//reset game