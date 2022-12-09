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
    console.log(gameWord)
};
randomWord();



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
        GameWon();// should check if won game 
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


//if wrong guess exceeds max wrong guess / lost round
const checkIfGameLost = () => {
    if(wrongGuess >= 5){
        document.getElementById('update').innerHTML = `You ran out of guesses. The word was ${gameWord}. Points +0`
        nextRound() // proceeds with next round
    } 
}


//if correctly guesses word / round win
const GameWon = () => {
    if(wordSplit === gameWord) {
        document.getElementById('update').innerHTML = 'You guessed the word! Points +1'
        updateScore();//update score
        nextRound();//next round
    }
}


//update score for players
let player = 1; 
let p1Score = 0;
let p2Score = 0;
const updateScore = () => {
    if(player === 1){
        p1Score++
        document.getElementById('p1Score').innerHTML = p1Score
    }else if(player === 2){
        p2Score++
        document.getElementById('p2Score').innerHTML = p2Score
    }
}

//function to starts next round for second player 
let roundNum = 1;
document.getElementById('roundNum').innerHTML = `Round ${roundNum}`

const nextRound = () => {
    roundNum++
    guessed = [];

    wrongGuess = 0;
    document.getElementById('wrongG').innerHTML = wrongGuess

    
    randomWord();
    wordToGuess();
    generateButtons();
    
    document.getElementById('roundNum').innerHTML = `Round ${roundNum}`

    if(player === 1){
        player = 2
        document.getElementById('player').innerHTML = "Player 2's turn"
    } else if(player === 2){
        player = 1
        document.getElementById('player').innerHTML = "Player 1's turn"
    }

    gameEnd(); //ends game after 6 rounds
}


//Won game conditions / draw
const gameEnd = () => {
    if (roundNum > 6){
        if(p1Score > p2Score){
            alert('Player 1 has Won!')//player 1 wins
            newGame()
        } else if(p2Score > p1Score){
            alert('Player 2 has Won!')//player 2 wins 
            newGame()
        }else {
            alert('The game is a draw!')//draw 
            newGame()
     }
    }
}




//start new game
const newGame = () => {
    roundNum = 1;
    document.getElementById('roundNum').innerHTML = `Round ${roundNum}`

    player = 1;
    guessed = [];

    wrongGuess = 0;
    document.getElementById('wrongG').innerHTML = wrongGuess

    p1Score = 0;
    p2Score = 0;
    document.getElementById('p1Score').innerHTML = p1Score
    document.getElementById('p2Score').innerHTML = p2Score

    randomWord();
    wordToGuess();
    generateButtons();

    document.getElementById('player').innerHTML = "Player 1's turn"
    document.getElementById('update').innerHTML = "New Game Start"
}