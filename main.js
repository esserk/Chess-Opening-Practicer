console.log("Hello world!");

const prompt = require('prompt-sync')();

// const opening = prompt('What opening do you want to learn? ');
// console.log(`${opening} is a cool opening`);

// prompts the user for a pgn
const pgn = prompt('Import the pgn for the opening you are trying to learn ');
var pgnArray = pgn.split(".");
pgnArray.shift();

// translates the pgn into individual moves
const moves = [];
for (let i = 0; i < pgnArray.length; i++) {
    var temp = (pgnArray[i].split(" ", 3));
    temp.shift();
    for (var j = 0; j < 2; j++) {
        moves.push(temp[j]);
    }

}
console.log(moves);

//
var moveCount = 1;
var correctMove = 0;
var numCorrect = 0;
var numIncorrect = 0;
for (var i = 0; i < moves.length; i++) {
    if (i % 2 == 0) {
        while (correctMove == 0) {
            const userMove = prompt('Play a move ');
            if (userMove == moves[i]) {
                console.log("That is correct!");
                correctMove = 1;
                numCorrect++
            }
            else {
                console.log("That is incorrect, try again");
                numIncorrect++;
            }
        }
        correctMove = 0;
    }
    else{
        //console.log(moves[i]);
        console.log(`${moveCount}. `, moves[i-1], moves[i]);
        moveCount++;
    }
}

console.log(`You got all ${numCorrect} moves right but messed up ${numIncorrect} times`);