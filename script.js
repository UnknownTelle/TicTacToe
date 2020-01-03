<!-- board set up -->
var gameBoard;
var player1 = 'X';
var player2 = 'O';

const boxes = document.getElementsByClassName("game");
startGame();

function startGame() {
    gameBoard = Array.from(document.getElementsByClassName("game"));
    console.log("ln 11");
    playOneListener();
    reset();
}
function reset() {
    for (var i = 0; i < gameBoard.length; i++){
        boxes[i].innerText = '';
    }
}
<!-- Allowing the users to take terns -->
function eachTurn(boxID, player) {
    gameBoard[boxID] = player;
    document.getElementById(boxID).innerText = player;
}
function playerOne(playOne) {
    eachTurn(playOne.target.id, player1);
    checkForWinner();
    playerTwoListener();

}
function playerTwo(playTwo) {
    eachTurn(playTwo.target.id, player2);
    checkForWinner();
    playOneListener();

}

function playOneListener() {
    console.log("ln 32");
    for (var i = 0; i < gameBoard.length; i++) {
        boxes[i].addEventListener('click', playerOne, false);

        boxes[i].removeEventListener('click', playerTwo, false);
    }
}
function playerTwoListener() {
    for (var i = 0; i < gameBoard.length; i++) {
        boxes[i].addEventListener('click', playerTwo, false);
        boxes[i].removeEventListener('click', playerOne, false);
    }
}
<!-- End of user tern code -->

<!-- How the game determines a win -->
const way2win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
function sameString(arr) {
    console.log(arr.every( q => q === arr[0] && q !== '') + " ln 65");
    return arr.every( q => q === arr[0] && q !== '');
}

function endGame() {
    window.alert('game over');
}

function checkForWinner(){
    let winner = false;
    const grid = gameBoard;
    way2win.forEach(a => {
        console.log("ln 75");
        var gridSequence = [grid[a[0]], grid[a[1]], grid[a[2]]];

        console.log(gridSequence + " ln 78");

        if(sameString(gridSequence)){
            winner = true;
            endGame(gridSequence);
        }
    });
    return winner;
}
