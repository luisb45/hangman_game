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
'Rhythm',
];

//function to pick random word from array
let gameWord = '';
const randomWord = () => {
    gameWord = arrWords[Math.floor(Math.random()* arrWords.length)]
};
randomWord();
console.log(gameWord);

//function that takes random word and splits it / display amount of words 

const wordToGuess = () => {
    //gameWord.split('')
    document.getElementById('wordDisplay') 
    
}
wordToGuess();


//get answer from letter buttons  




//player 1 
//number of correct guesses and missed guesses 



//player 2 
//number of correct guesses and missed guesses 





//function to starts next round for second player / update score


//reset game