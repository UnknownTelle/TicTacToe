<!-- board set up -->
var gameBoard;
const player1 = 'X';
const player2 = 'O';
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
const boxes = document.getElementsByClassName("game");
startGame();

function startGame() {
    gameBoard = Array.from(Array(9).keys());
    playOneListener();
    reset();
}
<!-- Allowing the users to take terns -->
function eachTurn(boxID, player) {
    gameBoard[boxID] = player;
    document.getElementById(boxID).innerText = player;
}
function playerOne(playOne) {
    eachTurn(playOne.target.id, player1);
    playerTwoListener();
}
function playerTwo(playTwo) {
    eachTurn(playTwo.target.id, player2);
    playOneListener();
}
function playOneListener() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', playerOne, false);
        boxes[i].removeEventListener('click', playerTwo, false);
    }
}
function playerTwoListener() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', playerTwo, false);
        boxes[i].removeEventListener('click', playerOne, false);
    }
}
<!-- End of user tern code -->

function reset() {
    for (var i = 0; i < boxes.length; i++){
        boxes[i].innerText = '';
    }
}